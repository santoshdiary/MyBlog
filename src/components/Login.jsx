import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index.js"
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth.js";
import { useForm } from "react-hook-form";

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const loginHandler = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(login({ userData }))
                }
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div
            className='flex w-full items-center justify-center px-3 py-4 sm:px-4 sm:py-6'
        >
            <div className={`mx-auto w-full max-w-md rounded-xl border border-line bg-mist/40 p-6 shadow-soft sm:max-w-lg sm:p-8 lg:p-10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight font-display text-canopy">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-ink-soft">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-leaf-dark transition-all duration-200 hover:text-canopy hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>

                {error && <p className="mt-8 text-center text-danger">{error}</p>}


                <form onSubmit={handleSubmit(loginHandler)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"

                            // this is the feature of react form hook to do this functionalities internally, automatically
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button
                            type="submit"
                            className="w-full"
                        >Sign in</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login