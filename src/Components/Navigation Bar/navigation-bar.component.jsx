import { Link } from 'react-router-dom'
import NavigationLink from '../Navigation Link/navigation-link.component'
import './navigation-bar.style.css'
const NavigationBar = ({changeSidePanelState, willCategoryShow}) =>{
    return(
        <div className="navigation-bar">
            <Link className="logo navigation-link" to="/">E-shop</Link>
            <div className="navigation-links">
            {willCategoryShow && <span className="categories navigation-link" onClick={()=>{changeSidePanelState()}}>Categories</span>}
                <NavigationLink className="navigation-link" link="/Account" text='My Account'/>
                <NavigationLink className="navigation-link"  link="/ContactUs" text='Contact Us'/>
                <NavigationLink className="navigation-link"  link="/Cart" text='Cart'/>
            </div>
        </div>
    )
}
export default NavigationBar