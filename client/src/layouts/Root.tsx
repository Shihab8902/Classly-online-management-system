import { Outlet } from "react-router";
import Login from "../pages/auth/Login";

const Root = () => {
    const user = false;


    return <main className="bg-slate-200 w-full min-h-screen">
        {user ? <Outlet /> : <Login />}
    </main>
}

export default Root