import React, {useContext, useEffect} from "react";
import '../style.css';
import expenseContext from "../context/expenseContext";
import { useNavigate } from "react-router-dom";
import TableRow from "./TableRow";
import jspdf from 'jspdf';
import 'jspdf-autotable';
import moment from 'moment';


function HtmlToPdf() {
    const context = useContext(expenseContext);
      const {fetchExpenses, expense} = context;
      const navigate = useNavigate();

      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let monthIndex = new Date().getMonth();
      let monthName = monthNames[monthIndex];

      useEffect(()=>{
        if(localStorage.getItem('authToken')){
          fetchExpenses();
        }
        else{
          navigate('/login')
        }
        // eslint-disable-next-line
      },[])

      const calculateSum = (amount)=>{
        let sum = 0;
        for(let i=0;i<amount.length;i++) sum+=amount[i];
        return sum;
        }

        const getFormattedDate = (date)=>{
            return moment(date).format('DD-MM-YYYY');
        }

      const onClick = (e) =>{
        e.preventDefault();

        const unit = "pt";
        const size = "A4";
        const orientation = "portrait";

        const doc = new jspdf(orientation, unit, size);

        doc.setFontSize(15);

        const title1 = "Expense-Tracker";
        const title2 = `${monthName} month's expenses`;

        const headers = [["Sl No", "Date", "Expense"]];

        const data = expense.map((item, index) =>{return [index+1, getFormattedDate(item.date), calculateSum(item.expenses.amount)]});

        const content = {
            startY: 100,
            theme: 'grid',
            tableWidth: 'auto',
            columnWidth: 'auto',
            head: headers,
            headStyles: {
                fillColor: [49, 52, 66],
                textColor: [255,255,255],
                fontSize: 12,
            },
            alternateRowStyles: {
                fillColor: [245, 245, 245],
                textColor: [0,0,0],
                fontSize: 12,
            },
            body: data
        };
        const xoffSet1 = (doc.internal.pageSize.width / 2) - (doc.getStringUnitWidth(title1) * doc.internal.getFontSize() / 2);
        const xoffSet2 = (doc.internal.pageSize.width / 2) - (doc.getStringUnitWidth(title2) * doc.internal.getFontSize() / 2);
        doc.text(title1, xoffSet1, 40);
        doc.text(title2, xoffSet2, 70);

        doc.autoTable(content);
        doc.save("expense.pdf")
      } 

  return (
    <>
        <div className="mainContainer">
      <section>
        <h1 className="text-center">
          <u>Expense-Tracker</u>
        </h1>
        <h2 className="text-center mt-3" id="month">{`${monthName} Month's Expenses`}</h2>
      </section>

      <section className="tableHolder mt-4">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Total Expense</th>
            </tr>
          </thead>
          <tbody>

            {
                expense.map((item, index)=>{
                    return <TableRow date={item.date} amount={item.expenses.amount} index={index}/>
                })
            }
          </tbody>
        </table>
      </section>
        
    <button type="button" class="btn btn-primary" onClick={onClick}>Download PDF</button>
    </div>
    </>
  );
}

export default HtmlToPdf;
