import {Input} from "../commons/Input";
import {useState} from "react";

const initialState = {
    email: "",
    password: ""
}

export const Login = () => {
    const [login, setLogin] = useState(initialState);

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    }
    return (
        <div className="h-screen flex items-center">
            <div className="bg-white w-[350px] h-[350px] mx-auto rounded-xl shadow-2xl">
                <h1 className="text-2xl text-center font-bold text-gray-600 pt-8">Login</h1>
                <form className="flex flex-col items-center px-10">
                    <Input handleChange={handleChange} label="email" type="email"/>
                    <Input handleChange={handleChange} label="password" type="password"/>
                </form>
                <div className="mt-8 px-10 mx-auto">
                    <button
                        className="bg-indigo-700 text-white w-full h-10 rounded-md shadow-lg hover:bg-indigo-500">Ingresar
                    </button>
                </div>
            </div>
        </div>
    );
};


