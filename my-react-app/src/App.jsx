import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([])

  useEffect(()=>{
   fetch("https://dummyjson.com/products")
   .then((response)=> response.json())
   .then((data)=>{
    setProducts(data.products)
   })
  })

  return (
    <div>
      <h1>
        Products
      </h1>
      {products.map((product)=>(
        <div key={product.id}>
          <p>
            {product.title} 
          </p>
          <p>
            {product.price}
          </p>
        </div>
      ))}
    </div>
  )
}


export default App;