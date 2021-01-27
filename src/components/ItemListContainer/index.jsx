import Item from './item';

const products = [
    {
        id: 1,
        title: "Futbol",
        sku: "100040FS0391001",
        category: "Pelota De Futbol Adidas Mini Captsuba Nº1 Blanca ",
        stock: 10,
        price: "1999",
        photo: "https://www.solodeportes.com.ar/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/p/e/pelota-de-futbol-adidas-mini-captsuba-n-1-blanca-100040fs0391001-2.jpg"
    },
    {
        id: 2,
        title: "Futbol",
        sku: "100040FS0391001",
        category: "Pelota De Futbol Adidas Mini Captsuba Nº1 Blanca ",
        stock: 10,
        price: "1999",
        photo: "https://www.solodeportes.com.ar/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/p/e/pelota-de-futbol-adidas-mini-captsuba-n-1-blanca-100040fs0391001-2.jpg"
    },
];

const ItemListContainer = (props) => {

    const { title } = props; //Esto es destructuracion ES6, clase 25/01
    return (
        <>
            <h1>{title}</h1>
            {products.map( (product, index) => 
                <Item
                    key={index} 
                    product={product} 
                />
            )}
        </>
    );
}


export default ItemListContainer;