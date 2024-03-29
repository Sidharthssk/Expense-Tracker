import React, {useContext, useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
import ExpenseContext from '../context/expenseContext';
import {Chart as Chartjs} from 'chart.js/auto';

function LineChart(props) {

  const context = useContext(ExpenseContext);
  const [data, setData] = useState({});
  const {fetchMonthlyExpense, monthlyExpense} = context;

  const fetchData = async() =>{
    await fetchMonthlyExpense();
  }

  const orderData = (data) =>{
    data.sort((a,b)=>{
      const monthOrder = {
        January: 0,
        February: 1,
        March: 2,
        April: 3,
        May: 4,
        June: 5,
        July: 6,
        August: 7,
        September: 8,
        October: 9,
        November: 10,
        December: 11
      };

      return monthOrder[a.month] - monthOrder[b.month];

    });
  }

  useEffect(()=>{
    fetchData(); 
    // eslint-disable-next-line
  },[]);

  useEffect(()=>{
    if (monthlyExpense && monthlyExpense.length > 0){
    orderData(monthlyExpense);
    setData({
      labels: monthlyExpense?.map((item)=>item.month),
      datasets: [{
        label: 'Monthly Expense in (Rs.)',
        data: monthlyExpense?.map((item)=>item.total),
        borderColor: [
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
        pointBackgroundColor: 'rgb(255, 99, 132)',
      }]
    });
    }
  },[monthlyExpense]);

  const options = {
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
        ticks: {
          color: 'white',
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
        ticks: {
          color: 'white',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
    },
  };

  return (
    <div className='container position-absolute top-50 start-50 translate-middle'>
      <div className='d-flex justify-content-center align-items-center'>
        {
          monthlyExpense && Array.isArray(data.labels) && Array.isArray(data.datasets[0].data) ?
            <Line data={data} options={options}/>
            : <h1>Loading...</h1>
        }
      </div>
    </div>
  )
}

export default LineChart;
