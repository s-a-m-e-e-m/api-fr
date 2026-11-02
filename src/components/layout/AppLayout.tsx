import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AppLayout = () => {
    return (
        <div className="min-h-screen bg-gray-100">

            <Navbar />

            <Sidebar />

            <main className="ml-64 pt-16 p-6">
                <Outlet />
            </main>

        </div>
    );
};

export default AppLayout;