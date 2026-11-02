import { logoutUser } from "../api/auth.api";

export const useLogout = () => {
    const handleLogout = async () => {
        try {
            await logoutUser();
        } catch (error) {
            console.error("Logout failed:", error);
        }
    }

    return { handleLogout };
}