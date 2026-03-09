# Inventory Management System

A modern, full-stack inventory management application built with Next.js, Prisma, and TypeScript. This project allows users to track products, manage stock levels, view analytics through charts, and handle user authentication.

## Features

- **Product Management**: Add, edit, delete, and view products with details like name, description, quantity, and price
- **Dashboard**: Overview of inventory status with key metrics and charts
- **User Authentication**: Secure sign-in and user management
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Automatic UI updates for inventory changes
- **Data Visualization**: Charts and graphs for inventory analytics
- **Pagination**: Efficient handling of large product lists

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Prisma ORM with SQLite/PostgreSQL
- **Authentication**: NextAuth.js
- **Charts**: Custom chart components
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- Database (SQLite for development, PostgreSQL for production)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sara18Santos/inventory.git
cd inventory
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up the database:
```bash
npx prisma migrate dev
npx prisma db seed
```

4. Configure environment variables:
Create a `.env.local` file with:
```
DATABASE_URL="your-database-url"
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

- **Sign In**: Access the application through the sign-in page
- **Dashboard**: View inventory overview and analytics
- **Add Products**: Use the add-product page to create new inventory items
- **Manage Inventory**: Edit quantities and product details
- **Settings**: Configure application preferences

## Project Structure

```
inventory/
├── app/                    # Next.js app directory
│   ├── add-product/       # Add product page
│   ├── dashboard/         # Main dashboard
│   ├── inventory/         # Inventory listing
│   ├── settings/          # Settings page
│   └── sign-in/           # Authentication
├── components/            # Reusable React components
│   ├── sidebar.tsx        # Navigation sidebar
│   ├── products-chart.tsx # Analytics charts
│   └── pagination.tsx     # Pagination component
├── lib/                   # Utility libraries
│   ├── prisma.ts          # Database client
│   ├── auth.ts            # Authentication config
│   └── actions/           # Server actions
├── prisma/                # Database schema and migrations
│   ├── schema.prisma      # Prisma schema
│   └── seed.ts            # Database seeding
└── public/                # Static assets
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Sara18Santos/inventory)

For manual deployment, follow the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
