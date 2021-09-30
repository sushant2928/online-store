import React, { useEffect } from 'react'
import PageTitle from '../../Components/Page Title/page-title.component'
import './account.style.css'
import {LogOut} from '../../firebase'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

function Account({changeCategoryState, currentUser}) {
    useEffect(() => {
        changeCategoryState(false) 
        
        
     }, [])
    return (
        <div>
        {currentUser ?
        <div className="account">
        {console.log("currentUser", currentUser)}
            <PageTitle title={`Hello ${currentUser.displayName}`}/>
            <button className="authentication-button" onClick={()=>LogOut()}>Sign Out</button>
        </div>
        : <Redirect to='/Authentication'></Redirect>}
        </div>
    )
}

const mapStateToProps = ({user})=>({
    currentUser: user.currentUser
})

export default connect(mapStateToProps)(Account)
