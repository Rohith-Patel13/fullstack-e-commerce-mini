
import "./index.css"

const Products = (props)=>{
    const {eachObject} = props
    const {
        
    imageSrc,
    Name,
    altName,
    stock
    }=eachObject
    return(
        <li className="product-card">
        <img src={imageSrc} alt={altName} className="productImageStyle"/>
        <h3>{Name}</h3>
        <p>{stock}</p>
      </li>
    )
}

export default Products