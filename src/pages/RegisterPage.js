import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/imgs/logo.png"
import { useEffect, useState } from "react"
import { ThreeDots } from 'react-loader-spinner'
import axios from "axios"
import { BASE_URL } from "../constants/urls"

export default function RegisterPage() {
    const navigate = useNavigate()
    const [disabledSwitch, setDisabledSwitch] = useState(false);
    const [notDisabledSwitch, setNotDisabledSwitch] = useState(!disabledSwitch);
    const [form, setForm] = useState({ email: '', name: '', image: '', password: '' });

    useEffect(() => {
        document.body.style.backgroundColor = "white";
    }, [])
    
    function register(e) {
        e.preventDefault();
        setDisabledSwitch(true)
        setNotDisabledSwitch(false)
        axios.post(`${BASE_URL}/auth/sign-up`, form)
            .then(res => {
                setDisabledSwitch(false)
                setNotDisabledSwitch(true)
                navigate('/')
            })
            .catch(err => {
                alert(err.response.data.message);
                setDisabledSwitch(false)
                setNotDisabledSwitch(true)
            })
    }

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <RegisterContainer disable={disabledSwitch}>
            <img src={logo} alt="Logo" />
            <form onSubmit={register}>
                <input data-identifier="input-email" name="email" value={form.email} onChange={handleChange} type="email" placeholder="email" required disabled={disabledSwitch} />
                <input data-identifier="input-password" name="password" value={form.password} onChange={handleChange} type="password" placeholder="senha" required disabled={disabledSwitch} />
                <input data-identifier="input-name" name="name" value={form.name} onChange={handleChange} type="text" placeholder="nome" required disabled={disabledSwitch} />
                <input data-identifier="input-photo" name="image" value={form.image} onChange={handleChange} type="text" placeholder="foto" required disabled={disabledSwitch} />
                <button type="submit" disabled={disabledSwitch}>
                    <StyledButtonText visible={notDisabledSwitch}>Cadastrar</StyledButtonText>
                    <ThreeDots color="white" visible={disabledSwitch} />
                </button>
            </form>
            <Link to={'/'}><span data-identifier="back-to-login-action">Já tem uma conta? Faça login!</span></Link>
        </RegisterContainer>
    )
}

<ThreeDots
    height="80"
    width="80"
    radius="9"
    color="#4fa94d"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
/>

const RegisterContainer = styled.div`
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

const StyledButtonText = styled.h1`
    display: ${props => props.visible ? 'contents' : 'none'};
`