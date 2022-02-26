import React, {useContext} from 'react';
import {GlobalState} from '../context/GlobalState';

//Currency Formatter 
function currencyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' + p[0].split('').reverse().reduce(function (acc, num, i, orig) {
      return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
    }, '') + '.' + p[1]
  );
}

export const Transaction = ({transaction}) => {
  const {transactionDeleted} = useContext(GlobalState);
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'negative' : 'positive'}>
      {transaction.text} 
      <span>{sign}{currencyFormatter(transaction.amount)}</span>
      <button onClick={() => transactionDeleted(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}