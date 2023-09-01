import React, { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Form = styled.div`
    form { display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    font-family: Arial, sans-serif;
    max-width: 300px;
    margin: 0 auto;
    margin-top: 40px;
    }

    label {
        font-weight: bold;
        margin-bottom: 5px;
    }

    input {
        padding: 10px;
        border-radius: 5px;
        border: 2px solid rgb(50, 46, 46);
        margin-bottom: 10px;
        width: 50%;
        box-sizing: border-box;
    }

    button {
        background-color: #4286f4;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    h1 {
        font-size: 20px;
        text-align: center;
        margin-top: 20px;
    }
`;

function Mylogin() {

    // const [username, setUsername] = useState("");
    // const[password, setPassword] = useState("");

    const [data, setData] = useState({
        username: "",
        password: "",
    })
    const handleChange =(e) => {
        setData({
            ...data, 
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit =(e) => {
        e.preventDefault();

        setData({
            username: "",
            password: "",
        })
    }

    return(
        <div>
            <Form>
            
            <h1>Provide your login details</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">User Name</label>
                <input 
                    type="text"
                    name="username"
                    id="username"
                    value={data.username}
                    required={true}
                    onChange={handleChange}
                    />
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    name="password"
                    id="password"
                    value={data.password}
                    required={true}
                    onChange={handleChange}
                    />

                <Link to="/dashboard">
                <button type="submit">Login</button>
                </Link>
                
            </form>

        </Form>
        </div>
        )
};

export default Mylogin;