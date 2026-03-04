export default function Login() {
    return (
        <>
            <h1>Pagina Login</h1>

            <div className="flex justify-center">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border mt-[50px] text-center p-4">
                    <legend className="fieldset-legend">Login</legend>

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </div>
        </>
    )
}