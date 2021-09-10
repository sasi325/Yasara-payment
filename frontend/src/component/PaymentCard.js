import React, { useState, useEffect } from "react";
import axios from "axios";

const PaymentCard = (props) => {

const DeleteItem = () => {
  axios
      .delete("http://localhost:8070/payment/delete/"+props.data._id)
      .then(() => {
        alert("Payment Deleted");
        props.FetchItems();
      })
      .catch((err) => {
        alert(err);
      });
}

  return (


<div className="card text-white bg-dark col-sm-6 col-md-4" style={{color:"#000000"}}>
  <img className="card-img-top payslipimage" src={props.data.payslip} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.data.amount}</h5>
    <p className="card-text">{props.data.name}</p>
    <div>
      <button class="btn actionbtn"><i class="fas fa-edit"></i></button>
      <button onClick={DeleteItem} class="btn actionbtn"><i class="fas fa-trash"></i></button>
    </div>
  </div>
</div>
  )

};



export default PaymentCard;
