import React from 'react'
import './page-title.style.css'
function PageTitle({title}) {
    return (
        <div className="page-title">
            <h1>{title}</h1>
        </div>
    )
}

export default PageTitle
