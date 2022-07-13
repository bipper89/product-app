import {SoldProduct} from "./SoldProduct";
import {useState} from "react";

const soldProducts = JSON.parse(localStorage.getItem('soldProduct') || '[]');

export const ShoppingCart = () => {
    const [products, setProducts] = useState(soldProducts);

    console.log(products);

    return (
        <div className="flex flex-row w-full h-full">
           <div className="w-2/4">
               <h2 className="text-lg font-bold text-center m-4">{products.length} Productos en el carrito de compras</h2>
               <div className="h-[90%] overflow-y-scroll">
                   {products.map(product => (
                       <SoldProduct key={product.id} {...product} />
                   ))}
               </div>
               <div className="flex items-center w-[100%] justify-center m-4">
                   <button className="w-[40%] h-10 bg-blue-600 rounded-3xl text-white cursor-pointer hover:bg-blue-700 ">Agregar Producto</button>
               </div>
           </div>
            <div className="w-2/4 flex flex-col w-full h-full justify-center items-center">
                <div className=" h-[40%]  w-[80%] border border-slate-200 p-4 m-4 rounded-md bg-white shadow-xl relative">
                    <h1>Total</h1>
                    <p>$480.00 mx</p>
                    <button>Pagar</button>
                </div>
            </div>
        </div>
    );
};


