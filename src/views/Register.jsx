import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"
import { useNavigate } from "react-router";

export default function Register() {

    const { register } = useContext(UserContext);
    const [userName, setUserName] = useState();
    const [userSurname, setUserSurname] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();
    const [userConfirmPassword, setUserConfirmPassword] = useState();

    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.id === 'name') {
            setUserName(e.target.value);
        } else if (e.target.id === 'surname') {
            setUserSurname(e.target.value);
        } else if (e.target.id === 'email') {
            setUserEmail(e.target.value);
        } else if (e.target.id === 'password') {
            setUserPassword(e.target.value);
        } else if (e.target.id === 'confirm_password') {
            setUserConfirmPassword(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userName, userSurname, userEmail, userPassword, userConfirmPassword) {
            register({ name: userName, surname: userSurname, email: userEmail, password: userPassword, confirm_password: userConfirmPassword })
        }
        navigate('/')
    }

    return (
        <>
            <h1>Pagina Registrazione</h1>
            <form onSubmit={handleSubmit} className="form">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border mt-[50px] text-center p-4">
                    <legend className="fieldset-legend">Register</legend>
                    <div>
                        <label htmlFor="name" className=""></label>
                        <input type="text" className="input" id="name" placeholder="Nome:" onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="surname" className=""></label>
                        <input type="text" className="input" id="surname" placeholder="Cognome: " onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="email" className="form-label"></label>
                        <input type="email" className="input" id="email" placeholder="mario@rossi.com" onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="password" className=""></label>
                        <input type="password" id="password" className="input" placeholder="Password" onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="confirm_password" className=""></label>
                        <input type="password" id="confirm_password" className="input" placeholder="Conferma Password" onChange={handleChange}></input>
                    </div>
                    <div>
                        <button className="btn btn-neutral mt-4">Registrati</button>
                    </div>
                </fieldset>
            </form >
        </>
    )
}