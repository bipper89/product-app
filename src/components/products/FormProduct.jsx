import {Input} from "../commons/Input";
import {useEffect, useState} from "react";
import {addDoc, collection, doc, updateDoc, getDoc} from "@firebase/firestore";
import {db} from "../../environments/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {useNavigate, useParams} from "react-router-dom";

const MySwal = withReactContent(Swal);
export const FormProduct = () => {
    const [product, setProduct] = useState({
        titulo: '',
        descripcion: '',
        precio: '',
        imagen: '',
    });

    const {titulo, descripcion, precio, imagen} = product;
    const {id} = useParams();
    const productDoc = doc(db, "products", id);
    const navigate = useNavigate();
    const productsCollectionRef = collection(db, "products");

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProduct({...product, [name]: value});
    }

    const onSave = async () => await addDoc(productsCollectionRef, product);

    const onUpdate = async () => {
        await updateDoc(productDoc, product);
    }

    const getProduct = async () => {
        const product = await getDoc(productDoc);
        setProduct(product.data());
    }

    useEffect(() => {
        getProduct();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            id ? await onUpdate() : await onSave();
            Swal.fire({
                icon: 'success',
                title: 'Producto guardado',
                text: 'Producto guardado con éxito',
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
        <>
            <div onClick={()=>navigate(-1)} className="m-2 flex flex-row items-center justify-center gap-x-2 bg-gray-200 p-4 w-fit rounded-md font-semibold cursor-pointer">
                <i className="material-icons">keyboard_arrow_left</i>
                <p className="px-4">Regresar</p>
            </div>
        <div className="w-full h-full grid place-content-center ">
            <form className="bg-white flex flex-col mx-auto w-[450px] p-10 rounded-xl shadow-2xl" onSubmit={handleSubmit}>
                <h1 className="text-center text-2xl text-gray-600 font-bold">{id ? 'Editar producto' : 'Nuevo producto'}</h1>
                <Input handleChange={handleChange} type="text" label="titulo" placeholder="Titulo" value={titulo} />
                <Input handleChange={handleChange} type="text" label="descripcion" placeholder="Descripción" value={descripcion} />
                <Input handleChange={handleChange} type="number" label="precio" placeholder="Precio" value={precio} />
                <Input handleChange={handleChange} type="url" label="imagen" placeholder="Imagen" value={imagen} />
                <div className="block mt-10">
                    <button className="bg-indigo-700 w-full text-white py-2 rounded-md shadow-lg hover:bg-indigo-500" type="submit">{id ? 'Editar' : 'Agregar'}</button>
                </div>
            </form>
        </div>
        </>
    );
};


