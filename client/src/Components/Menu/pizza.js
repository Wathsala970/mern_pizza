import React from "react";


export default function Pizza({ pizza }) {
    return (
        <div className="container">
            <h1 className="title">{pizza.name}</h1>
            <img src={pizza.image} className="img-fluid" />
            <div className="flex-container">
                <div className="w-100">
                    <p>Varients</p>
                    <select>
                        {pizza.varients.map(varient=>{
                            return<option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>
                <div className="w-100">
                    <p>Quentity</p>
                </div>
            </div>
        </div>
    )
}