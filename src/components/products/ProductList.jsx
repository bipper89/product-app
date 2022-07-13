import {Product} from "./Product";
import {Navbar} from "../commons/Navbar";
import {useEffect, useState} from "react";
import {FormProduct} from "./FormProduct";
import {db} from "../../environments/firebase";
import {collection, getDocs} from "@firebase/firestore";

export const ProductList = () => {
    const [products, setProducts] = useState();
    const productsCollectionRef = collection(db, "products");

    const addOrEdit = (product) => {
        console.log(product);
    }

    useEffect(() => {
        const getProducts = async () => {
            const products = await getDocs(productsCollectionRef);
            setProducts(products.docs.map(doc => ({...doc.data(), id: doc.id})));
        }
        getProducts();
    }, []);


    return (
        <>
            <Navbar />
            <div className="grid grid-cols-3">
                <div className="w-full bg-gray-200 h-screen">
                    <FormProduct addOrEdit={addOrEdit} />
                </div>
                <div className="col-span-2">
                    <div className="flex flex-row flex-wrap gap-10 mt-5 md:mt-0">
                        {products ? products.map(product => (
                            <Product key={product.id} {...product} />
                        )) : <h1 className="text-xl w-full text-center font-bold">No hay productos</h1>}
                    </div>
                </div>
            </div>

        </>

    );
};


