import React,{useState,} from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index.js"
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        setError("")
        try {
            const session = await authService.createAccount(data)
            if (session) {
                const currentUser = await authService.getCurrentUser()
                if (currentUser) {
                    dispatch(login({ userData: currentUser }))
                }
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="flex w-full items-center justify-center px-3 py-4 sm:px-4 sm:py-6">
            <div className={`mx-auto w-full max-w-md rounded-xl border border-line bg-mist/40 p-6 shadow-soft sm:max-w-lg sm:p-8 lg:p-10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight font-display text-canopy">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-ink-soft">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-leaf-dark transition-all duration-200 hover:text-canopy hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                
                {error && <p className="mt-8 text-center text-danger">{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                            label="Full Name: "
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: true,
                            })}
                        />
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
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
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Signup