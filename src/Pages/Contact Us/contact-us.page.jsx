import React, { useEffect } from 'react'
import PageTitle from '../../Components/Page Title/page-title.component'
import './contact-us.style.css'

function ContactUs({changeCategoryState}) {
    useEffect(() => {
        changeCategoryState(false) 
     }, [])
    return (
        <div className="contact-us">
            <PageTitle title="Contact Us"/>
        </div>
    )
}

export default ContactUs
