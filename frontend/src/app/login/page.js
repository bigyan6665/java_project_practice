"use client";
import { Button, Typography, TextField, Box } from "@mui/material";
import { useState } from "react";
import { login } from "../utility/api";
import { useRouter } from "next/navigation";

export default function Login() {
    const [loginData, setloginData] = useState(
        {
            username: "",
            password: ""
        }
    )
    const router = useRouter();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setloginData({
            ...loginData,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("my data:", loginData)
        const response = await login(loginData)
        console.log(response)
        if(response.Token){
            router.push("/menu")
        }

        document.getElementById("unempty").style.visibility = "hidden"
        document.getElementById("passempty").style.visibility = "hidden"
        try {
            if (loginData.username == "" || loginData.username == "NULL") {
                document.getElementById("unempty").style.visibility = "visible"
            }
            if (loginData.password == "" || loginData.password == "NULL") {
                document.getElementById("passempty").style.visibility = "visible"
            }
        }
        catch (error) {
            console.log("Error")
        }
    }
    return (
        <div>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {/* <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}> */}
                <Typography variant="h1" component="h2">Login</Typography>
                <TextField
                    variant="outlined"
                    sx={{ width: 1 / 4 }}
                    id="outlined-basic"
                    label="Username"
                    name="username"
                    value={loginData.username}
                    onChange={handleChange}
                />
                <Box sx={{ color: "#d50000", visibility: 'hidden' }} id="unempty">
                    "fill this area"
                </Box>
                <TextField
                    variant="outlined"
                    sx={{ width: 1 / 4 }}
                    id="outlined-basic"
                    label="Password"
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                />
                <Box sx={{ color: "#d50000", visibility: 'hidden' }} id="passempty">
                    "fill this area"
                </Box>
                <Button
                    type="submit"
                    sx={{ width: 1 / 4 }}
                    variant="contained"
                    onClick={handleSubmit}
                >Login</Button>
            </Box>
        </div>
    );
}