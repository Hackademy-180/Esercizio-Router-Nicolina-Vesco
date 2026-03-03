export default function Register() {
    return (
        <>
            <h1>Pagina Registrazione</h1>
            <form>
                <div className="registerPage">
                    <div>
                        <label htmlForfor="name" className="">Nome: </label>
                        <input type="text" className="" id="name"></input>
                    </div>
                    <div>
                        <label htmlFor="surname" class="">Cognome: </label>
                        <input type="text" className="" id="surname"></input>
                    </div>
                    <div>
                        <label htmlForfor="email" className="form-label">Email: </label>
                        <input type="email" className="" id="email" placeholder="mario@rossi.com"></input>
                    </div>
                    <div>
                        <label htmlForfor="password" class="">Password: </label>
                        <input type="password" id="password" class=""></input>
                    </div>
                    <div>
                        <label htmlForfor="confirm_password" class="">Conferma password: </label>
                        <input type="password" id="confirm_password" class=""></input>
                    </div>
                </div>
            </form>
        </>
    )
}