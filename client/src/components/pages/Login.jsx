/**
 * Functional Component to handle user login
 * @UsrCreds
 * @LoginButton
 */

import React, { useState } from "react";
import { Button, Link, TextField } from "@mui/material";

function Login(props) {
    //handle local state change
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    // change local state
    const handleFormFieldChange = (event) => {
        switch (event.target.id) {
            case 'email': setEmail(event.target.value.toLowerCase()); break;
            case 'password': setPassword(event.target.value); break;
            default: return null;
        }
    };

    // send local state to authentication
    const handleSubmit = (e) => {
        e.preventDefault();
        if ((email !== null) && (password !== null)) {
            props.onAuth(email.toLowerCase(), password);
        } else {
            alert("Email or Password Field is Empty!");
        }
    }

    return(
        <div className="flex flex-wrap justify-center mt-20">
            <div className="w-full max-w-sm">
                <form className="shadow-md bg-white rounded px-8 pt-6 pb-8 mb-4" noValidate onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label className="block text-gray-700 text-lg font-bold mb-2">Sign In</label>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleFormFieldChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleFormFieldChange}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <Button
                            className="px-4 py-2"
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Sign In
                        </Button>
                        <Link href="#" variant="body2"> Forgot Password?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;