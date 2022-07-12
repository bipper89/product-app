import {Product} from "./Product";

const products = [
    {
        id: 1,
        title: "Producto 1",
        description: "Descripción del producto 1",
        price: "$100",
        img: "https://picsum.photos/200/300"
    },
    {
        id: 2,
        title: "Producto 2",
        description: "Descripción del producto 2",
        price: "$200",
        img: "https://picsum.photos/200/300"
    },
    {
        id: 3,
        title: "Producto 3",
        description: "Descripción del producto 3",
        price: "$300",
        img: "https://picsum.photos/200/300"
    },
    {
        id: 4,
        title: "Producto 4",
        description: "Descripción del producto 4",
        price: "$400",
        img: "https://picsum.photos/200/300"
    },
    {
        id: 5,
        title: "Producto 5",
        description: "Descripción del producto 5",
        price: "$500",
        img: "https://picsum.photos/200/300"
    }
];

export const ProductList = () => {
    return (
        <div className="flex flex-row flex-wrap gap-10">
            {products.map(product => (
                <Product key={product.id} {...product} />
            ))}
        </div>
    );
};


