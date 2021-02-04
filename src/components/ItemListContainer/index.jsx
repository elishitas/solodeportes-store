import { useState } from 'react';
import ItemCount from '../itemCount';
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
//aca cambiar nombre a ItemCardCointainer
const ItemListContainer = (props) => {


    const [contador, setContador] = useState(1)

    const onAdd = ( stock ) =>{
        //console.log(stock)
        if (contador < stock ){
            setContador(contador + 1)
        }else{
            console.log("Sin stock");
        }     
    }

    const  onSubstract = () =>{
        if (contador > 1 ){
            setContador (contador - 1)
        }else{
            console.log("El valor es menor de lo que podemos vender")
        }
  
    }

  

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
            <ItemCount stock= {12} contador = {contador} 
            onSubstract = {onSubstract}    onAdd = {onAdd}/>
        </>
    );
}


export default ItemListContainer;