import React, { useState } from "react";
import axios from "axios";

export default function AddPayment() {
  function sendData(e) {
    e.preventDefault();

    // get all values to variable
    const newPayment = {
      name: e.target.name.value,
      clas: e.target.clas.value,
      perpose: e.target.perpose.value,
      bank: e.target.bank.value,
      amount: e.target.amount.value,
      date: e.target.date.value,
    };

    // form data object for send to API
    var ReqBody = new FormData();

    // add all daata in new payment variable to formsata object
    Object.keys(newPayment).map((key) => {
      ReqBody.append(key, newPayment[key]);
    });

    // add file to formdata
    ReqBody.append("payslip", e.target.payslip.files[0]);

    console.log("json : ", newPayment);
    console.log("Form data : ", ReqBody);

    axios
      .post("http://localhost:8070/payment/add", ReqBody)
      .then(() => {
        alert("Payment Added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <h1>Online Payment</h1>
      <form onSubmit={sendData}>
        <div className="container row addPaymentForm">
          <div className="mt-3 mb-1 col-sm-6 col-lg-4">
            <div class="form-group">
              <label for="name">Student Name</label>
              <input
                requird
                type="text"
                class="form-control"
                id="name"
                name="name"
                placeholder="Enter Full Name"
              />
            </div>
          </div>
          <div className="mt-3 mb-1 col-sm-6 col-lg-4">
            <div class="form-group">
              <label for="clas">Student's Class</label>
              <input
                requird
                type="text"
                class="form-control"
                id="clas"
                name="clas"
                placeholder="Enter Class"
              />
            </div>
          </div>
          <div className="mt-3 mb-1 col-sm-6 col-lg-4">
            <div class="form-group">
              <label for="perpose">Perpose</label>
              <input
                requird
                type="text"
                class="form-control"
                id="perpose"
                name="perpose"
                placeholder="Enter perpose for the payment"
              />
            </div>
          </div>
          <div className="mt-3 mb-1 col-sm-6 col-lg-4">
            <div class="form-group">
              <label for="bank">Bank Name</label>
              <input
                requird
                type="text"
                class="form-control"
                id="bank"
                name="bank"
                placeholder="Enter Bank Name"
              />
            </div>
          </div>
          <div className="mt-3 mb-1 col-sm-6 col-lg-4">
            <div class="form-group">
              <label for="amount">Amount</label>
              <input
                requird
                type="Number"
                class="form-control"
                id="amount"
                name="amount"
                placeholder="Enter Payment Amount"
              />
            </div>
          </div>
          <div className="mt-3 mb-1 col-sm-6 col-lg-4">
            <div class="form-group">
              <label for="date">Date</label>
              <input
                requird
                type="date"
                class="form-control"
                id="date"
                name="date"
                placeholder="Enter Date"
              />
            </div>
          </div>
          <div className="mt-3 mb-4 col-sm-12 col-lg-12">
            <div class="form-group">
              <label for="date">pay slip</label>
              <input
                requird
                type="file"
                class="form-control"
                id="payslip"
                name="payslip"
                placeholder="Upload your payment slip"
              />
            </div>
          </div>
          <div className="mt-3 mb-1 col-sm-12 col-lg-12">
            <button type="submit" class="btn dubmitButton">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
