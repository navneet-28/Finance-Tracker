import { dashboard, expenses, transactions } from "./Icons";

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon:dashboard,
        url: '/dashboard'
    },
    {
        id: 2,
        title: "View Transactions",
        icon: transactions,
        url: "/dashboard",
    },
    {
        id: 3,
        title: "Incomes",
        icon: dashboard,
        url: "/dashboard",
    },
    {
        id: 4,
        title: "Expenses",
        icon: expenses,
        url: "/dashboard",
    },
    {
        id:5,
        title: 'Login',
        icon: dashboard,
        url: '/login'
    }
]