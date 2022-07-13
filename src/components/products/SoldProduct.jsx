import {useState} from "react";
import Swal from "sweetalert2";

export const SoldProduct = ({id, titulo, descripcion, precio, imagen, onDelete,UpdateProducts}) => {
    const [product, setProduct] = useState();
    const  DeleteProdcut=()=>{
        UpdateProducts(id);
        Swal.fire({
            icon: 'success',
            title: 'Producto Eliminado',
            text: 'Producto Eliminado Exitosamente',
        });
    }
    return (
        <div className="flex flex-row border border-slate-200 p-4 m-4 rounded-md bg-white shadow-xl relative">

            <img className="h-32 w-32 rounded-lg" src={imagen} alt={descripcion}/>
            <div className="absolute top-0 right-0 " onClick={()=>DeleteProdcut()}>
                <i className="material-icons text-red-500 text-3xl hover:text-indigo-700 hover:cursor-pointer" >remove_circle</i>
            </div>
            <div className="w-full">
                <h1 className="text-4xl text-center font-bold text-gray-700">{titulo}</h1>
                <p className="p-4">{descripcion}</p>
            </div>
            <div className="grid place-content-center w-[150px]">
                <p className="text-center text-2xl font-bold">{`$${precio}`}</p>
            </div>
        </div>
    );
};


