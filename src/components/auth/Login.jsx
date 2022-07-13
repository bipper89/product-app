import {Input} from "../commons/Input";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../context/authContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const initialState = {
    email: "",
    password: ""
}
const MySwal = withReactContent(Swal);

export const Login = () => {
    const [user, setUser] = useState(initialState);
    const {login} = useAuth();
    const navigate = useNavigate();
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await login(user.email, user.password);
            Swal.fire({
                icon: 'success',
                title: 'Acceso exitoso',
                text: 'Bienvenido al sistema',
            }).then(() => navigate("/"));
        } catch (err) {
            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.message,
            });
        }
    }

    return (
        <div className="h-screen flex items-center">
            <div className="bg-white w-[350px] h-[350px] mx-auto rounded-xl shadow-2xl">
                <h1 className="text-2xl text-center font-bold text-gray-600 pt-8">Login</h1>
                <form className="flex flex-col items-center px-10" onSubmit={handleSubmit}>
                    <Input handleChange={handleChange} label="email" type="email"/>
                    <Input handleChange={handleChange} label="password" type="password"/>
                    <button
                        type="submit"
                        className="bg-indigo-700 text-white w-full h-10 rounded-md shadow-lg hover:bg-indigo-500 mt-8">
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    );
};


