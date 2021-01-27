const Item = ({product}) => {
    return (
        <div>
            <div>
                <img src={product.photo} alt={product.title}></img>
            </div>
            <div>
                <h4>{product.title}</h4>
                <p>
                    <span className='categories'>{product.category}</span>
                    <span className='sku'>{product.sku}</span>
                    <span className='price'>$ {product.price}</span>
                </p>
                <a href='/#'>Añadir al carrito</a>
            </div>
        </div>
    );
}

export default Item;