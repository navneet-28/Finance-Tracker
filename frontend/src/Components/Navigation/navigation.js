import React from 'react'
import { styled } from 'styled-components'
import avatar from '../../images/avatar.png'
import { menuItems } from '../../utils/menuItems'
import { signout } from '../../utils/Icons'
import { useGlobalContext } from '../../context/globalContext'
import { InnerLayout } from '../../styles/Layouts'
import { dollar } from '../../utils/Icons'

export default function Navigation() {
    const {totalIncome, totalExpenses, totalBalance} = useGlobalContext()
  return (
    <NavStyled>
        <div className='user-con'>
            <img src={avatar} alt=''/>
            <h2>Navneet</h2>
            <p>Your money</p>
        </div>
        {/* <ul className='menu-items'>
            {menuItems.map((item) => (
                <li key={item.id}>
                    <a href={item.url}>
                        {item.icon}
                        <span>{item.title}</span>
                    </a>
                </li>
            ))}
        </ul> */}
        <InnerLayout>
        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {dollar} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
        </InnerLayout>
        <div className='bottom-nav'>
            <li>
                {signout} <span>Sign Out</span>
            </li>
        </div>
    </NavStyled>
  )

  
}
const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .user-con{
      height: 100px;
      display: flex;
      align-items: center;
      gap: 1rem;
      img{
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          background: #fcf6f9;
          border: 2px solid #FFFFFF;
          padding: .2rem;
          box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
      }
      h2{
          color: rgba(34, 34, 96, 1);
      }
      p{
          color: rgba(34, 34, 96, .6);
      }
  }

  .amount-con{
        display: grid;
        gap: 2rem;
        margin-top: 2rem;
        .income, .expense, .balance{
            background: #FCF6F9;
            border: 2px solid #FFFFFF;
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            border-radius: 20px;
            padding: 1rem;
            p{
                font-size: 1rem;
                font-weight: 400;
            }
        }
        .balance{
            display: flex;
            flex-direction: column;
            p{
                color: var(--color-green);
                font-size: 1rem;
                font-weight: 400;
            }
        }
}

  .menu-items{
      flex: 1;
      display: flex;
      flex-direction: column;
      li{
          display: grid;
          grid-template-columns: 40px auto;
          align-items: center;
          margin: .6rem 0;
          font-weight: 500;
          cursor: pointer;
          transition: all .4s ease-in-out;
          color: rgba(34, 34, 96, .6);
          padding-left: 1rem;
          position: relative;
          i{
              color: rgba(34, 34, 96, 0.6);
              font-size: 1.4rem;
              transition: all .4s ease-in-out;
          }
      }
  }

  .active{
      color: rgba(34, 34, 96, 1) !important;
      i{
          color: rgba(34, 34, 96, 1) !important;
      }
      &::before{
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 4px;
          height: 100%;
          background: #222260;
          border-radius: 0 10px 10px 0;
      }
  }
  `;
