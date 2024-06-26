import React, { useContext, useState } from "react"
import axios from '../api/axios'
import useAuth from "../hooks/useAuth";




const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const {auth, setAuth} = useAuth();


    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

   

    //calculate incomes
    const addIncome = async (income) => {
        // console.log(auth)
        const response = await axios.post(`/api/addIncome`, income)
            .catch((err) =>{
                alert(err.response.data.msg)
            })
        getIncomes()
    }

    const getIncomes = async () => {
        
    const userEmail = auth.email;
        // console.log("User Email is: ", userEmail)
        const response = await axios.get(`/api/getIncome`, {
            params: {
                userEmail: userEmail
            }
        })
        setIncomes(response.data)
        // console.log(response.data)
    }

    const deleteIncome = async (id) => {
        const res  = await axios.delete(`/api/deleteIncome/${id}`)
        getIncomes()
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    //calculate incomes
    const addExpense = async (income) => {
        
        const response = await axios.post(`/api/addExpense`, income)
            .catch((err) =>{
                alert(err.response.data.msg)
            })
        getExpenses()
    }

    const getExpenses = async () => {
        
    const userEmail = auth.email;
        // console.log("User Email is: ", userEmail)
        const response = await axios.get(`/api/getExpense`,{
            params: {
                userEmail: userEmail
            }
        })
        setExpenses(response.data)
        // console.log(response.data)
    }

    const deleteExpense = async (id) => {
        const res  = await axios.delete(`/api/deleteExpense/${id}`)
        getExpenses()
    }

    const totalExpenses = () => {
        let totalExpenses = 0;
        expenses.forEach((income) =>{
            totalExpenses = totalExpenses + income.amount
        })

        return totalExpenses;
    }


    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 6)
    }


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}