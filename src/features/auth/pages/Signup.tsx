import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../api/auth.api";
import { useAuth } from "../hooks/useAuth";

const Signup = () => {

    const { setUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const form = e.currentTarget;
        const data = new FormData(form);

        try {

            setLoading(true);

            const res = await signupUser(
                data.get("name") as string,
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
                    Create Account
                </h1>

                <p className="mb-8 text-center text-gray-500">
                    Start monitoring your APIs in real time.
                </p>

                <form
                    onSubmit={submitHandler}
                    className="space-y-5"
                >

                    <div className="form-group">

                        <label className="form-label">
                            Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder="Your name"
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label className="form-label">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            className="input"
                            placeholder="Your email"
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
                            className="input"
                            placeholder="Choose a password"
                            required
                        />

                    </div>

                    <button
                        className="btn-success w-full"
                        disabled={loading}
                    >
                        {loading ? "Creating Account..." : "Create Account"}
                    </button>

                </form>

                <p className="mt-6 text-center text-gray-600">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-semibold text-blue-600 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>

            </div>

        </div>
    );
};

export default Signup;