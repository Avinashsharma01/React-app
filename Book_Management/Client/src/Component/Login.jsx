import { useState } from 'react';
function Login() {
    const [ user, setUser] = useState();
    const [ password, setPassword] = useState();
    const [ role, setRole] = useState(" ");


    const Handlesubmit = () => {
        const data = {
            UserName: user,
            Password: password,
            Role: role
        }
        console.log(data)
    }

    
    return (
        <div className="LoginCon  flex justify-center items-center " 
        style={{ height: 'calc(100vh - 100px)' }}
        >
            <div className="login w-72 h-96 bg-slate-700 p-5 text-white">
                <h1 className="text-white text-3xl text-center uppercase">Login Here</h1>
                <div className="username flex flex-col mb-5 mt-8">
                    <label htmlFor="">UserName: </label>
                    <input type="text" name="UserName" id="" className="w-full h-10 text-black outline-none px-2" onChange={(e)=> setUser(e.target.value)} />
                </div>
                <div className="Password flex flex-col mb-5">
                    <label htmlFor="">Password: </label>
                    <input type="text" name="Password" id="" className=" w-full h-10 text-black outline-none px-2" onChange={(e)=> setPassword(e.target.value)} />
                </div>

                <div className="option flex justify-center">
                <select name="role" id="" className="text-black text-center" onChange={(e)=> setRole(e.target.value)}>
                    <option value=" ">Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </select>
                </div>

                <div className="btn flex justify-center items-center mt-10">
                    <button className=" w-full h-10 bg-cyan-600 text-white  " onClick={Handlesubmit}>Submit</button>
                </div>
               
            </div>
        </div>
    );
}

export default Login;
