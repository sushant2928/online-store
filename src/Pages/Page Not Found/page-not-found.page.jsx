import { useEffect } from 'react'
import './page-not-found.style.css'
const PageNotFound = ({changeCategoryState}) =>{
    useEffect(() => {
        changeCategoryState(false);
    }, [])
    return (
        <div className="page-not-found">
            <p>Page Not Found</p>
        </div>
    )

}
export default PageNotFound