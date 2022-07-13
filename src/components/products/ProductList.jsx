import {Product} from "./Product";
import {Navbar} from "../commons/Navbar";
import {useEffect, useState} from "react";
import {db} from "../../environments/firebase";
import {collection, deleteDoc, getDocs, doc} from "@firebase/firestore";
import {useNavigate} from "react-router-dom";
import Spinner from "../commons/Spinner";
export const ProductList = () => {
    const [products, setProducts] = useState();
    const [load, setLoad] = useState(true);
    const navigate = useNavigate();
    const productsCollectionRef = collection(db, "products");

    const getProducts = async () => {
        const products = await getDocs(productsCollectionRef);
        setProducts(products.docs.map(doc => ({...doc.data(), id: doc.id})));
        setLoad(false);
    }

    useEffect(() => {
        getProducts();
    }, []);

    const onDelete = async (id) => {
        await deleteDoc(doc(db, "products", id));
        setProducts(products.filter(product => product.id !== id));
    }

    return (
        <>
            <Navbar />
            <div className="flex flex-row flex-wrap gap-10 mt-5 md:mt-0">
                <div className="mt-4 w-full grid place-content-end mx-10">
                    <button onClick={() => navigate("/new-product")} className="bg-amber-400 p-4 flex flex-row rounded-md shadow-xl font-bold">
                        <i className="material-icons">add</i>
                        Nuevo producto
                    </button>
                </div>
                {load ?
                    <>
                        <Spinner/>
                    </>
                    :products ? products.map(product => (
                    <Product onDelete={onDelete} key={product.id} {...product} />
                )) : <h1 className="text-xl w-full text-center font-bold">No hay productos</h1>}
            </div>
        </>

    );
};


