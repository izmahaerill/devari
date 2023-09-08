import ImgChild from "../assets/child.jpg"

// function Login ({ ImgChild }) {
function Login () {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full ">
            <div className="hidden sm:block ">
                <img  className="w-full h-full object-cover" src={ImgChild} alt="" />
            </div>
            <div className="bg-slate-500 flex flex-col justify-center">
                <form className="max-w-[400px] w-full mx-auto bg-slate-800 p-8 rounded-lg">
                    <h2 className="text-4xl dark:text-white font-bold text-center ">sign in</h2>
                    <div className="flex flex-col text-slate-600 py-2">
                        <label htmlFor="">username</label>
                        <input className="rounded-lg bg-slate-600 text-slate-400 mt-2 p-2 focus:border-blue-500 focus:bg-slate-700 focus:outline-none " type="text" />
                    </div>
                    <div className="flex flex-col text-slate-600 py-2">
                        <label htmlFor="">password</label>
                        <input className="rounded-lg bg-slate-600 text-slate-400 mt-2 p-2 focus:border-blue-500 focus:bg-slate-700 focus:outline-none" type="password" />
                    </div>
                    <div className="flex justify-between text-slate-200 py-2">
                        <p><input type="checkbox" />remember me</p>
                        <button>forgot password?</button>
                    </div>
                    <button className=" w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/40 text-slate-50 font-semibold rounded-lg">sign in</button>
                </form>
            </div>
        </div>
    );
}

export default Login;