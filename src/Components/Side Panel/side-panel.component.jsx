import './side-panel.style.css'
import Category from '../Category/category.component'
import {getAllCategories} from '../../firebase'
import { useEffect, useState } from 'react'
const SidePanel = ({getCategory}) =>{

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getAllCategories().then(result=> {setCategories([...result])
        console.log(result);
        })
    },[])

return(
    <div className="side-panel-container" >
    <div className="side-panel">
    {categories.map(category => (
        <Category category={category} getCategory={getCategory}/>
    ))}
    </div>
    </div>
)
}
export default SidePanel