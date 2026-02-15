import React, { useState } from "react";
import "./Auth.css";

export default function Auth({ theme }) {
    const [modo, setModo] = useState("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rol, setRol] = useState("usuario");

    const enviar = (e) => {
        e.preventDefault();

        if (modo === "login") {
            alert(`Login:
Correo: ${email}
Contraseña: ${password}`);
        } else {
            alert(`Registro:
Correo: ${email}
Contraseña: ${password}
Rol: ${rol}`);
        }
    };

    return (
        <div className={`auth-container ${theme}`}>
            <div className="auth-card">
                <h2>{modo === "login" ? "Iniciar Sesión" : "Registrarse"}</h2>
                <p>{modo === "login" ? "Bienvenido de nuevo" : "Crea tu cuenta"}</p>

                <form onSubmit={enviar}>
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {modo === "register" && (
                        <select value={rol} onChange={(e) => setRol(e.target.value)}>
                            <option value="usuario">Usuario</option>
                            <option value="admin">Administrador</option>
                        </select>
                    )}

                    <button type="submit">
                        {modo === "login" ? "Entrar" : "Registrarse"}
                    </button>
                </form>

                {modo === "login" ? (
                    <span>
                        ¿No tienes cuenta?{" "}
                        <b onClick={() => setModo("register")}>Regístrate</b>
                    </span>
                ) : (
                    <span>
                        ¿Ya tienes cuenta?{" "}
                        <b onClick={() => setModo("login")}>Inicia sesión</b>
                    </span>
                )}
            </div>
        </div>
    );
}
