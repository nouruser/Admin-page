import Switcher from "@components/Switcher";
import { Outlet } from "react-router-dom";


const AuthLayout = () => {
    return (
        <div className="h-screen w-full bg-auth-light dark:bg-auth-dark">
            <div className="absolute  top-6 right-10">
                <Switcher/>
            </div>
            <Outlet />
        </div>
    )
};

export default AuthLayout;