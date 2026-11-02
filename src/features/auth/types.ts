import type React from "react";

export interface User {
    _id: string;
    name: string;
    email: string;
    role: string;
}

export interface AuthContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;

    authLoading: boolean;
    setAuthLoading: React.Dispatch<React.SetStateAction<boolean>>;

    isAuthenticated: boolean;
}