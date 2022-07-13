import {Input} from "../commons/Input";
import {useState} from "react";

export const FormProduct = ({addOrEdit}) => {
    const [product, setProduct] = useState({
        uid: "",
        titulo: "",
        descripcion: "",
        precio: "",
        imagen: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProduct({...product, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addOrEdit(product);
    }

    return (
        <div className="w-full h-full grid place-content-center">
            <form className="bg-white flex flex-col mx-auto w-[450px] p-10 rounded-xl shadow-2xl" onSubmit={handleSubmit}>
                <h1 className="text-center text-2xl text-gray-600 font-bold">{'Nuevo producto'}</h1>
                <Input handleChange={handleChange} type="text" label="titulo" placeholder="Titulo" />
                <Input handleChange={handleChange} type="text" label="descripcion" placeholder="Descripción" />
                <Input handleChange={handleChange} type="number" label="precio" placeholder="Precio" />
                <Input handleChange={handleChange} type="url" label="imagen" placeholder="Imagen" />
                <div className="block mt-10">
                    <button className="bg-indigo-700 w-full text-white py-2 rounded-md shadow-lg hover:bg-indigo-500" type="submit">Agregar</button>
                </div>
            </form>
        </div>
    );
};


