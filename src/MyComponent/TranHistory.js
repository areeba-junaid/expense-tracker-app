import React, { useContext } from 'react'
import {GlobalContext} from '../Context/GlobalState'
export default function TranHistory() {
  const {transactions}=useContext(GlobalContext);
    return (
    <div className='tran-his'>
        <h1>Transaction History  </h1>
        <hr></hr>
        <ul>
            {transactions.map(transaction => <div className='tran-list'>
                <div>{transaction.text }</div>
                <div>{transaction.amount} </div>
            </div>)}
        </ul>
        
    </div>
  )
}

