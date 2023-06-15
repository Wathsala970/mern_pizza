import React, { useState } from "react";
import {Modal} from 'react-bootstrap';

export default function Pizza({ pizza }) {
    const [quantity, setQuantity] = useState(0)
    const [varient, setVarient] = useState('none')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{ margin: '70px' }} className="shadow-lg p-3 mb-5 bg-white rounded">
            <div onClick={handleShow}>
            <h1 className="title">{pizza.name}</h1>
            <img src={pizza.image} className="img-fluid" />
            </div>
            <div className="flex-container">
                <div className="w-100 m-1">
                    <p>Varients</p>
                    <select className='form-control' value={varient} onChange={(e) => { setVarient(e.target.value) }}>
                        {pizza.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>
                <div className="w-100 m-1">
                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                        {[...Array(11).keys()].map((price, i) => {
                            return <option value={i + 0}>{i + 0}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="flex-container ">
                <div className="w-100 m-1">
                    <h1 className="title1">Price : {pizza.price[0][varient] * quantity}.00 Rs/=</h1>
                    {/* <p>Please select one varient and then you can see price</p> */}
                </div>
                <div className="w-100 m-1">
                    <button className="btn">ADD TO CART</button>
                </div>

            </div>
            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.image} style={{height: '200px !important', width:'200px'}}/>
                    <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>CLOSE</button>
                    
                </Modal.Footer>
            </Modal>
        </div>
    )
}