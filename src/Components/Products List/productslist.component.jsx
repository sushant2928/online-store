import SingleProduct from "../Single Product/singleproduct.component"
import './productslist.style.css'


const ProductsList = ({products, cart}) => {
    
return(
    <div className="productsList">
    {products.map((product)=>{
        
        return <SingleProduct key={product.id} product={product} cart={cart}/>
    })}
    
    
        
    </div>
)}
export default ProductsList