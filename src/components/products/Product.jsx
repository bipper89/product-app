import {useNavigate} from "react-router-dom";

export const Product = ({id, titulo, descripcion, precio, imagen}) => {
    const navigate = useNavigate()
    return (
        <div className="flex items-center mx-auto sm:p-5 md:p-10 md:mt-10 xl:p-2">
            <div className="w-[350px] mx-auto rounded-b-xl shadow-2xl relative">
                <div className="absolute top-0 right-0 mx-2">
                    <i className="material-icons text-white text-3xl hover:text-indigo-700 hover:cursor-pointer">remove_circle</i>
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
                    <button className="rounded-md w-full p-3 bg-indigo-700 mt-5 hover:bg-indigo-500">
                        <p className="text-white">Comprar</p>
                    </button>
                    <p className="text-center text-gray-600 font-bold mt-4 hover:cursor-pointer hover:underline hover:text-black"
                       onClick={() => navigate(`/product/${id}`)}>Editar</p>
                </div>
            </div>
        </div>
    );
};


