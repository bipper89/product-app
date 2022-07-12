export const Product = ({title, description, price, img}) => {
    return (
        <div className="flex items-center mx-auto sm:p-5 md:p-10 md:mt-10 xl:p-2">
            <div className="w-[350px] mx-auto rounded-b-xl shadow-2xl">
                <div className="bg-cover h-[200px] w-full rounded-xl">
                    <img className="rounded-t-xl w-full h-full object-cover" src={img} alt={description} ></img>
                </div>
                <div className="bg-white flex flex-col items-center p-6 rounded-b-xl">
                    <h1 className="text-2xl">{title}</h1>
                    <p className="mt-2 text-gray-500 text-sm">{description}</p>
                    <div className="w-full bg-gray-300 h-12 rounded-md mt-4 grid content-center">
                        <p className="text-center">{price}</p>
                    </div>
                    <button className="rounded-md w-full p-3 bg-indigo-700 mt-5 hover:bg-indigo-500">
                        <p className="text-white">Comprar</p>
                    </button>
                    <p className="text-center text-gray-600 font-bold mt-4 hover:cursor-pointer hover:underline hover:text-black">Cancelar</p>
                </div>
            </div>
        </div>
    );
};


