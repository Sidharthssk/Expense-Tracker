import React from 'react';
import moment from 'moment';

function TableRow(props) {

    const {date, amount, index} = props;
    const formatedDate = moment(date).format('DD-MM-YYYY');

    let sum = 0;
    for(let i=0;i<amount.length;i++) sum+=amount[i];

  return (
    <>
      <tr>
              <th scope="row">{index+1}</th>
              <td>{formatedDate}</td>
              <td>{sum}</td>
            </tr>
    </>
  )
}

export default TableRow
