import {Input} from "../commons/Input";

export const FormProduct = () => {
    return (
        <div className="w-full h-full grid place-content-center">
            <form className="bg-white flex flex-col mx-auto w-[450px] p-10 rounded-xl shadow-2xl">
                <h1 className="text-center text-2xl text-gray-600 font-bold">Nuevo producto</h1>
                <Input type="text" label="title" placeholder="Title" />
                <Input type="text" label="descripcion" placeholder="Descripción" />
                <Input type="text" label="precio" placeholder="Precio" />
                <Input type="url" label="imagen" placeholder="Imagen" />
                <div className="block mt-10">
                    <button className="bg-indigo-700 w-full text-white py-2 rounded-md shadow-lg hover:bg-indigo-500">Agregar</button>
                </div>
            </form>
        </div>
    );
};

