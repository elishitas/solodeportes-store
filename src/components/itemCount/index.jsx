
//esto es una seccion de la card y es el hijo de la card pero todavia no se encuentra creada
//para mostrar datos
export const ItemCount = ({stock, onAdd, contador, onSubstract}) =>{
    return (
        <>
            <h1>Esto es el contador que va a quedar lindo abajo de cada uno de los productos</h1>
            <button onClick= {onSubstract} >-</button>
            <b>{contador}</b>
            {(contador < stock ) ? 
            <button onClick={ () => { onAdd ( stock )}}>+</button> 
            : <p>No hay mas stock</p>          
        }
            
            <div>
                <button>Agregar al carrito</button>
            </div>

        </>

    );
};

export default ItemCount;