import React from 'react'
import loader from '../Infinity-1s-200px.gif'

function Loading() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <img src={loader} alt=""/>
            </div>
        </>
    )
}

export default Loading
