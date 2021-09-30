import './category.style.css'
const Category = ({category, getCategory}) =>{
return(
    <div className="category" onClick={()=>{getCategory(category.type)}}>
        <h3 className="category-name">{category.type}</h3>
        <img className="forward-icon" src="https://cdn-icons-png.flaticon.com/512/81/81068.png" alt="" />
    </div>
)
}
export default Category