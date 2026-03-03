export default function Login() {
    return (
        <>
                <h1>Pagina Login</h1>

            <form>
                <div className="loginPage">
                    <div>
                        <label htmlForfor="email" className="form-label">Email: </label>
                        <input type="email" className="" id="email" placeholder="mario@rossi.com"></input>
                    </div>
                    <div>
                        <label htmlForfor="password" class="">Password: </label>
                        <input type="password" id="password" class=""></input>
                    </div>
                </div>
            </form>
        </>
    )
}