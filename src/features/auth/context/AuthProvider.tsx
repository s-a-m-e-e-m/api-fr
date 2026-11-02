import React, { createContext, useState, useEffect } from "react";
import { getLoggedInUser } from "../api/auth.api";
import type { User, AuthContextType } from "../types";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: {children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [authLoading, setAuthLoading] = useState(true);

    const isAuthenticated = !!user;

    const fetchCurrentUser = async () => {
        try {
            const user = await getLoggedInUser();
            setUser(user);
        } catch (error) {
            console.error(error);
            setUser(null);
        } finally {
            setAuthLoading(false);
        }
    }

    useEffect(() => {
        fetchCurrentUser();
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser, authLoading, setAuthLoading, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};