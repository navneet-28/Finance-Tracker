import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalContext';
import { del } from '../utils/Icons';

function History() {
    const {transactionHistory, deleteIncome, deleteExpense} = useGlobalContext()

    const [...history] = transactionHistory()

    const handleDelete = (id, type) => {
        console.log(id);
        if(type === 'income'){
            deleteIncome(id)
        }
        if(type === 'expense'){
            deleteExpense(id)
        }
    }



    return (
        <HistoryStyled>
            <h2>Recent History</h2>
            {history.map((item) =>{
                const {_id, title, amount, type} = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'green'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type === 'expense' ? 'red' : 'green'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                            }
                        </p>
                        <button  onClick={() => handleDelete(_id, type)}><p>{del}</p></button>
                        
                    </div>
                )
            })}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        border-radius: 1%
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default History