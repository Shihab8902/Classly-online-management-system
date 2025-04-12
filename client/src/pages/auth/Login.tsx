import React from "react"
import Logo from "../../components/Logo"
import { FaRegEnvelope } from "react-icons/fa"
import { RiLockPasswordLine } from "react-icons/ri"
import { FiLogIn } from "react-icons/fi"
import AnimatedBackground from "../../components/Background"


const Login: React.FC = () => {

    return <div className=" min-h-screen flex justify-center items-center p-3">

        <AnimatedBackground />

        <form className="bg-white w-full md:w-[50%] lg:w-[30%] px-5 py-8 rounded-md z-10">
            <Logo />

            <h3 className="text-center mt-4 font-bold text-sm text-primary-dark uppercase">Login to COMS</h3>

            {/* Email Input */}
            <div className=" mt-8">
                <div className="flex items-center bg-gray-100 pl-4 gap-2 rounded-md">
                    <FaRegEnvelope className="text-neutral-dark text-2xl" />
                    <input className="w-full pt-3 pb-3 outline-0 text-font text-sm font-semibold placeholder:font-medium" type="email" name="email" id="email" placeholder="Enter email address" />
                </div>
                <span className="text-xs font-medium text-red-600">Error message goes here</span>
            </div>


            {/* Password Input */}
            <div className=" mt-3">
                <div className="flex items-center bg-gray-100 pl-4 gap-2 rounded-md">
                    <RiLockPasswordLine className="text-neutral-dark text-2xl" />
                    <input className="w-full pt-3 pb-3 outline-0 text-font text-sm font-semibold placeholder:font-medium" type="password" name="password" id="password" placeholder="Enter password" />
                </div>
                <span className="text-xs font-medium text-red-600">Error message goes here</span>
            </div>

            <div className="mt-5">
                <button className="w-full cursor-pointer bg-primary p-2 text-white font-semibold rounded-md" type="submit">
                    <span className=" flex justify-center items-center gap-2"><FiLogIn className="text-lg text-white" /> Login</span>
                </button>
            </div>

            <span className="text-center block mt-6 text-sm font-medium text-accent-coral hover:underline">Forgot Password?</span>

        </form >

    </div >
}

export default Login