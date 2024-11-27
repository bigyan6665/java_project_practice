"use client";
import { Button, Typography, TextField, Box } from "@mui/material";
import { useState } from "react";

export default function Login() {
    const [signupData, setsignupData] = useState(
        {
            username: "",
            password: "",
            cpassword: ""
        }
    )
    const handleChange = (e) => {
        const { name, value } = e.target;
        setsignupData({
            ...signupData,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        document.getElementById("unempty").style.visibility = "hidden"
        document.getElementById("passempty").style.visibility = "hidden"
        document.getElementById("cpassempty").style.visibility = "hidden"
        document.getElementById("confirm").style.visibility = "hidden"
        try {
            console.log("my data:", signupData)
            if (signupData.username == "" || signupData.username == "NULL") {
                document.getElementById("unempty").style.visibility = "visible"
            }
            if (signupData.password == "" || signupData.password == "NULL") {
                document.getElementById("passempty").style.visibility = "visible"
            }
            if (signupData.cpassword == "" || signupData.cpassword == "NULL") {
                document.getElementById("cpassempty").style.visibility = "visible"
            }
            const x = signupData.password.localeCompare(signupData.cpassword)
            if(x ==! 0){
                document.getElementById("confirm").style.visibility = "visible"
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}> */}
                <Typography variant="h1" component="h2">Signup</Typography>
                <TextField
                    variant="outlined"
                    sx={{ width: 1 / 4 }}
                    id="outlined-error"
                    label="Username"
                    name="username"
                    value={signupData.username}
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
                    value={signupData.password}
                    onChange={handleChange}
                />
                <Box sx={{ color: "#d50000", visibility: 'hidden' }} id="passempty">
                    "fill this area"
                </Box>
                <TextField
                    variant="outlined"
                    sx={{ width: 1 / 4 }}
                    id="outlined-basic"
                    label="Confirm Password"
                    type="password"
                    name="cpassword"
                    value={signupData.cpassword}
                    onChange={handleChange}
                />
                <Box sx={{ color: "#d50000", visibility: 'hidden' }} id="cpassempty">
                    "fill this area"
                </Box>
                <Button
                    type="submit"
                    sx={{ width: 1 / 4 }}
                    variant="contained"
                    onClick={handleSubmit}
                >Signup</Button>
                <Box sx={{ color: "#d50000", visibility: 'hidden' }} id="confirm">
                    "Properly confirm your password"
                </Box>
            </Box>
        </div>
    );
}