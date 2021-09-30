import { Link } from 'react-router-dom'
import './navigation-link.style.css'
const NavigationLink = ({link, text}) =>{
    return(
        <Link to={link} className="navigation-link">{text}</Link>
    )
}
export default NavigationLink