import React from "react";


export default function Pizza({pizza}){
    return(
        <div>
            <h1 className="title">{pizza.name}</h1>
            <img src={pizza.image} className="img-fluid"/>
        </div>
    )
}