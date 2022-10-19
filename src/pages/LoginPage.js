import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/imgs/logo.png"

export default function LoginPage() {
    const navigate = useNavigate()
    let disabledSwitch = false;
    return (
        <LoginContainer disable={disabledSwitch}>
            <img src={logo} alt="Logo" />
            <form onSubmit={login}>
                <input type="email" placeholder="email" required disabled={disabledSwitch}/>
                <input type="password" placeholder="senha" required disabled={disabledSwitch}/>
                <button disabled={disabledSwitch} type="submit">Entrar</button>
            </form>
            <Link to={"/cadastro"}><span>Não tem uma conta? Cadastre-se</span></Link>
        </LoginContainer>
    )

    function login(){
        alert("Usuário logou")
        navigate('/hoje')
    }

}


const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        margin-top: 68px;
        margin-bottom: 32px;
        width: 180px;

    }
    input{
        filter:brightness(${props => props.disable ? 0.95 : 1});
        margin-bottom:6px;
    }
    button{
        filter:brightness(${props => props.disable ? 0.95 : 1});
        margin-bottom: 25px;
        width: 303px;
        height: 45px;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
    }
    span{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }
    form{
        display: flex;
        flex-direction: column;
    }
    `