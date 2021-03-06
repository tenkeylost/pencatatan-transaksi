import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext)

  const sign = transaction.amount < 0 ? '-' : '+'

  const icon = transaction.amount < 0 ? 'minus' : 'plus'

  return (
    <>
      <li className={icon}>
        {transaction.text} <span>{sign} Rp {Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
      </li>
    </>
  )
}
