import { styled } from "styled-components";

const Details = styled.div`
h1 {
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
  }
li{
    list-style:none;
    text-align: center;
    padding: 10px;
}
`

function Mydashboard() {
    return(
        <div>
            <Details>
            <h1>Dashboard</h1>
        {/* summarized details of financial investments */}
        <div>
            <li>Customer Name: Ifeoluwa Adeleke</li>
            <li>Telephone Number: 08000000000</li>
            <li>Product: Electricity bill</li>
            <li>Amount paid: #5,000</li>
            <li>Date of Payment: 31/08/2023</li>
        </div>
            </Details>
        

        </div>
    )
};

export default Mydashboard;