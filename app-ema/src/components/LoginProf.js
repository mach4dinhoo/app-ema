import React from "react";

const Login = (props) => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;

    return (
        <section className="login">
            <div className="loginContainer">

                <h1 className="Professor">Professor</h1>
                
                <div className="cadastro">
                    {hasAccount ? (
                        <>
                        </>
                    ) : (
                        <>
                            <p>Cadastro</p>
                        </>
                    )}
                </div>

                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="email"
                />

                <p className="errorMsg">{emailError}</p>
                <br />
                <br />
                <input
                    type="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="senha"
                />


                <p className="errorMsg">{passwordError}</p>

                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Entrar</button>
                            <p><span onClick={() => setHasAccount(!hasAccount)}>Primeiro Acesso</span></p>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignup}>cadastrar</button>
                            <p>Já tenho uma conta!<span onClick={() => setHasAccount(!hasAccount)}> Login </span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login;