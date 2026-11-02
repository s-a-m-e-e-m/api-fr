import api from "../../../services/api";

import type { User } from "../types";

interface AuthResponse {
    user: User;
}

export const loginUser = async (
    email: string,
    password: string
): Promise<User> => {
    const res = await api.post<AuthResponse>("/users/login", {
        email,
        password
    });
    return res.data.user;
}

export const signupUser = async (
    name: string,
    email: string,
    password: string
): Promise<User> => {
    const res = await api.post<AuthResponse>("/users/register", {
        name,
        email,
        password
    });
    return res.data.user;
}

export const getLoggedInUser = async (): Promise<User> => {
    const res = await api.get<AuthResponse>("/users/loggedin");
    return res.data.user;
}

export const logoutUser = async () => {
    const res = await api.delete("/users/logout");
    return res.data;
}