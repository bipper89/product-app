import {useNavigate} from "react-router-dom";
import {useState} from "react";

export const Product = ({id, titulo, descripcion, precio, imagen, onDelete}) => {
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        id,
        titulo,
        descripcion,
        precio,
        imagen
    });

    const onDeleteProduct = async () => {
        await onDelete(id);
    }

    const onAddShoppingCart = () => {
        let soldProducts = JSON.parse(localStorage.getItem("soldProducts")) || [];
        soldProducts = [...soldProducts, product];
        localStorage.setItem("soldProducts", JSON.stringify(soldProducts));
    }

    return (
        <div className="flex items-center mx-auto sm:p-5 md:p-10 md:mt-10 xl:p-2">
            <div className="w-[350px] mx-auto rounded-b-xl shadow-2xl relative">
                <div className="absolute top-0 right-0 mx-2">
                    <i className="material-icons text-red-500 text-3xl hover:text-indigo-700 hover:cursor-pointer" onClick={onDeleteProduct}>remove_circle</i>
                </div>
                <div className="bg-cover h-[200px] w-full rounded-xl">
                    <img className="rounded-t-xl w-full h-full object-cover" src={imagen} alt={descripcion} ></img>
                </div>
                <div className="bg-white flex flex-col items-center p-6 rounded-b-xl">
                    <h1 className="text-2xl">{titulo}</h1>
                    <p className="mt-2 text-gray-500 text-sm">{descripcion}</p>
                    <div className="w-full bg-gray-300 h-12 rounded-md mt-4 grid content-center">
                        <p className="text-center">{`$${precio}`}</p>
                    </div>
                    <button className="rounded-md w-full p-3 bg-indigo-700 mt-5 hover:bg-indigo-500 text-white" onClick={onAddShoppingCart}>
                        Comprar
                    </button>
                    <p className="text-center text-gray-600 font-bold mt-4 hover:cursor-pointer hover:underline hover:text-yellow-600"
                       onClick={() => navigate(`/product/${id}`)}>Editar</p>
                </div>
            </div>
        </div>
    );
};


