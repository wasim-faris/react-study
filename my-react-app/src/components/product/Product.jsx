import { useState } from "react"

function Product(){
    const [quantity, setQuantity] = useState(1)
    const product = {
        name: "lenovo think padd",
        price: 2334
    }

    return(
        <div>
            <h1>
                products
            </h1>
            <p>
                name: {product.name}
                <br/>
                price: {product.price}
            </p>
            <p>
                quantity: {quantity}
            </p>
            <br/>

            <button onClick={()=> setQuantity(quantity + 1)}>+</button>
            <br/>
            <button onClick={()=> setQuantity(quantity > 1? quantity-1: 1)}>-</button>
        </div>
    )

}

export default Product;