import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth.api";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
    const { setUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            setLoading(true);

            const res = await loginUser(
                data.get("email") as string,
                data.get("password") as string
            );

            setUser(res);
            navigate("/");
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">

            <div className="card w-full max-w-md">

                <h1 className="page-title mb-2 text-center">
                    Welcome Back
                </h1>

                <p className="mb-8 text-center text-gray-500">
                    Sign in to continue monitoring your APIs.
                </p>

                <form
                    onSubmit={submitHandler}
                    className="space-y-5"
                >

                    <div className="form-group">
                        <label className="form-label">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input"
                            required
                        />
                    </div>

                    <button
                        className="btn-primary w-full"
                        disabled={loading}
                    >
                        {loading ? "Signing In..." : "Sign In"}
                    </button>

                </form>

                <p className="mt-6 text-center text-gray-600">
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="font-semibold text-blue-600 hover:underline"
                    >
                        Create one
                    </Link>
                </p>

            </div>

        </div>
    );
};

export default Login;