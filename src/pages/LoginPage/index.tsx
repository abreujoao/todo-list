import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function login(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (username === "teste@email.com" && password === "1234") {
            navigate("/")
        }
    }

    return (
        <form onSubmit={login}>
            <label>
                Username:
                <input onChange={e => setUsername(e.target.value)} value={username} />
            </label>
            <label>
                Senha:
                <input onChange={e => setPassword(e.target.value)} value={password} />
            </label>
            <button>Entrar</button>
        </form>
    );
}