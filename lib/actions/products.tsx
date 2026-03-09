"use server"

import { redirect } from "next/navigation";
import { getCurrentUser } from "../auth";
import { prisma } from "../prisma";
import { z } from "zod";

const ProductSchema = z.object({
    name: z.string().min(1, "Product name is required"),
    price: z.coerce.number().int().min(0, "Price must be a positive number"),
    quantity: z.coerce.number().int().min(0, "Quantity must be a positive number"),
    sku: z.string().optional(),
    lowStockAt: z.coerce.number().int().min(0).optional(),
})

export async function deleteProduct(formData: FormData) {
    const user = await getCurrentUser();
    const id = String(formData.get("id") || "");

    await prisma.product.deleteMany({where: {id: id, userId: user.id} });
}

export async function createProduct(formData: FormData) {
    const user = await getCurrentUser();
    
    const parsed = ProductSchema.safeParse({
        name: formData.get("name"),    
        price: formData.get("price"),
        quantity: formData.get("quantity"),
        sku: formData.get("sku") || undefined,
        lowStockAt: formData.get("lowStockAt") || undefined,
    });
    console.log("Parsed data:", parsed);
    if (!parsed.success){
        console.error("Validation errors:", parsed.error.flatten());
        throw new Error(`Validation failed: ${JSON.stringify(parsed.error.flatten().fieldErrors)}`);
    } 
    try {
        await prisma.product.create({
            data: { ...parsed.data, userId: user.id }
        });
        redirect("/inventory");
    } catch (error) {
        console.error("Error creating product:", error);
        throw new Error("Failed to create product");
    }
}