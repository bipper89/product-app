import {Input} from "../commons/Input";
import {useState} from "react";
import {useAuth} from "../../context/authContext";
import {useNavigate} from "react-router-dom";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const Register = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState();
    const {signUp} = useAuth();
    const navigate = useNavigate();
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await signUp(user.email, user.password);
            Swal.fire({
                icon: 'success',
                title: 'Registro exitoso',
                text: 'Usuario y contraseña guardados',
            }).then(() => navigate("/auth/login"));
        } catch (err) {
            setError(err.message);
            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
            });
        }
    }

    return (
        <div className="h-screen flex items-center">
            <div className="bg-white w-[350px] h-[350px] mx-auto rounded-xl shadow-2xl">
                <h1 className="text-2xl text-center font-bold text-gray-600 pt-8">Register</h1>
                <form className="flex flex-col items-center px-10" onSubmit={handleSubmit} autoComplete="false">
                    <Input handleChange={handleChange} label="email" type="email" placeholder="username" />
                    <Input handleChange={handleChange} label="password" type="password" placeholder="*********" />
                    <button type="submit"
                            className="bg-indigo-700 text-white w-full h-10 rounded-md shadow-lg hover:bg-indigo-500 mt-8">
                        Registrar
                    </button>
                </form>
            </div>
        </div>
    );
};


