import {useAuth} from "../../context/authContext";
import {useNavigate} from "react-router-dom";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export const Navbar = () => {
    const {user, logout} = useAuth();
    const navigate = useNavigate();
    const onLogout = async() => {
        await logout();
        MySwal.fire({
            icon: 'success',
            title: 'Cerraste sesión',
            text: 'Hasta pronto',
        });
    }

    return (
        <div className="bg-indigo-700 p-5 px-12 flex flex-row justify-between shadow-lg">
            <h1 className="text-center text-white text-4xl">Productos</h1>
            <div className="flex flex-row gap-4">
                <p className="p-2 text-white text-2xl">{user?.email}</p>
                <button className="rounded-full w-12 text-white bg-orange-400 hover:bg-gray-200 hover:text-orange-400" onClick={() => navigate("/shopping-cart")}>
                    <i className="material-icons p-2">add_shopping_cart</i>
                </button>
                {user && (<button className="text-white bg-gray-500 px-5 rounded-md hover:bg-gray-400 hover:text-gray-800" onClick={onLogout}>Logout</button>)}
            </div>
        </div>
    );
};


