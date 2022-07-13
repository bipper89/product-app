import {SoldProduct} from "./SoldProduct";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const soldProducts = JSON.parse(localStorage.getItem('soldProducts') || '[]');
export const ShoppingCart = () => {
    const [products, setProducts] = useState(soldProducts);
    const [price, setPrice] = useState(0);
    const navigate = useNavigate();
    const getPrice = () =>{
        let carrito=JSON.parse(localStorage.getItem('soldProducts') || '[]');
         let precio=0;
         if(carrito?.length>0) {
             for(let i=0;i<carrito?.length;i++){
                 precio+=parseInt(carrito[i].precio)
             }
             setPrice(precio)
         } else{
             setPrice(0);
         }

     }

     const getSoldProducts = () => {
        const firebaseSoldProducts = getDocs(collection(db, 'soldProducts'));
     }
     const  updateProducts=(identificador)=>{
       let prod= products.filter((x)=>x.id!==identificador);
       setProducts(prod);
       localStorage.setItem('soldProducts',JSON.stringify(prod));
       getPrice();
     }
    useEffect(()=>{
        getPrice();
        setProducts(JSON.parse(localStorage.getItem('soldProducts') || '[]'));
        }, []
    )
    return (
        <div className="flex flex-row w-full h-full">
            { products?.length>0 ?
                <>
                    <div className="w-2/4">
                        <h2 className="text-lg font-bold text-center m-4">{products.length} Productos en el carrito de compras</h2>
                        <div className="h-[70%] overflow-y-scroll">
                            {products.map(product => (
                                <SoldProduct key={product.id} {...product} UpdateProducts={updateProducts}/>
                            ))}
                        </div>
                        <div className="flex items-center w-[100%] justify-center m-4">
                            <button className="w-[40%] h-10 bg-blue-600 rounded-3xl text-white cursor-pointer hover:bg-blue-700" onClick={() => navigate("/")}>Agregar Producto</button>
                        </div>
                    </div>
                    <div className="w-2/4 flex flex-col w-full h-full justify-evenly items-center">
                        <div className=" flex items-center flex-col justify-evenly h-[40%]  w-[80%] border border-slate-200 p-4 m-4 rounded-md bg-white shadow-xl relative">
                            <h1 className="text-4xl text-[#1A3d82] text-center">Total</h1>
                            <p className="text-2xl text-center">${price} mx</p>
                            <button className="rounded-md w-full p-3 bg-indigo-700 mt-5 hover:bg-indigo-500 text-white">Pagar</button>
                        </div>
                    </div>
                </>
                :
                <h1 className="flex justify-center items-center w-full h-full text-3xl">No hay productos en el carrito</h1>
            }
        </div>
    );
};


