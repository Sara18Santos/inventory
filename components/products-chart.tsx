'use client';
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Area, Tooltip  } from 'recharts';

interface ChartData {
    week: string;
    products: number;
}

export default function ProductsChart({data}: {data: ChartData[]}) {
    console.log(data);
    return (
    <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke='#f0f0f0' />
                <XAxis dataKey="week" stroke='#666' fontSize={12} tickLine={false} axisLine={false}/>
                <YAxis stroke='#666' fontSize={12} tickLine={false} axisLine={false} allowDecimals={false} />
                <Area type="monotone" dataKey="products" stroke='#8b5cf6' fill='#8b5cf6' fillOpacity={0.2} strokeWidth={2} 
                dot={{ fill:"#8b5cf6", r: 2 }} activeDot={{fill:"#8b5cf6", r: 4}} />
                <Tooltip contentStyle={{
                    backgroundColor: "white", border: "1px solid #e5e7eb", borderRadius: "4px", padding: "8px", fontSize: "12px"
                }}  labelStyle={{ color: "#374151", fontWeight: "500" }}/>
            </AreaChart>
        </ResponsiveContainer>
    </div>
    )
}