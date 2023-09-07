//using a mock API 
import { createServer } from "miragejs";
import data from "./data.json"
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Style = styled.div`
h1 {
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
  }
div {
    box-sizing: border-box;
  border: 1px hidden;
  border-radius: 10px;
  background-color: #ee9972;;
  margin: 0 auto;
  margin-top: 40px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  font-family: Arial, sans-serif;
}
li{
    list-style:none;
}
`

createServer({
    routes() {
        this.get("/api/customer", () => {
            return data;
        })
    }
})
function Transactiondetails() {
const [customer, setCustomer] = useState([]);

useEffect(() => {
    fetch("/api/customer")
    .then(res => res.json())
    .then(result => {
        setCustomer(result)
    });
}, []);

    return(
            <div>
                <nav>
                <Link to="/dashboard">My Dashboard</Link>
                <Link to="/transactiondetails">Transaction Details</Link>
                </nav>

            <Style>
            <h1>Payment Transactions</h1>
            <div>
                {customer.map(list => (
                    <div>
                        <ul key={list.id}>
                        <li>Name: {list.name}</li>
                        <li>Phone Number: {list.telephonenumber}</li>
                        <li>Product: {list.product}</li>
                        <li>Amount Paid: {list.amountpaid}</li>
                        <li>Date of Payment: {list.date}</li>
                        </ul>
                    </div>                    
                ))}
            </div>
            </Style>        
            </div>            
    )
}
export default Transactiondetails;