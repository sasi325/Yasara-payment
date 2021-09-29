import React, { useState } from "react";
import axios from "axios";

export default function AddExpence() {
  function sendData(e) {
    e.preventDefault();

    // get all values to variable
    const newExpence = {
      name: e.target.name.value,
      post: e.target.post.value,
      perpose: e.target.perpose.value,
      bank: e.target.bank.value,
      amount: e.target.amount.value,
      date: e.target.date.value,
    };

    // form data object for send to API
    var ReqBody = new FormData();

    // add all daata in new payment variable to formsata object
    Object.keys(newExpence).map((key) => {
      ReqBody.append(key, newExpence[key]);
    });

    // add file to formdata
    ReqBody.append("payslip", e.target.payslip.files[0]);

    console.log("json : ", newExpence);
    console.log("Form data : ", ReqBody);

    axios
      .post("http://localhost:8070/expences/add", ReqBody)
      .then(() => {
        alert("Expence Added");
        window.location.href = "/payments/expence_list";
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <h1>Online Expences</h1>
      <form onSubmit={sendData}>
        <div className="container row addExpenceForm">
          <div className="mt-3 mb-1 col-sm-6 col-lg-4">
            <div class="form-group">
              <label for="name">Name</label>
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
              <label for="post">Post</label>
              <select
                class="form-control"
                id="post"
                name="post"
                placeholder="Enter Post"
              >
                <option value="" disabled selected>Select Your Post</option>
                <option value="Finance">Finance Manager</option>
                <option value="librarian">Librarian</option>
                <option value="delivery">Delivery Manager</option>
              </select>
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
                placeholder="Enter perpose for the expence"
              >
              </input>
            </div>
          </div>
          <div className="mt-3 mb-1 col-sm-6 col-lg-4">
            <div class="form-group">
              <label for="bank">Bank Name</label>
              <select
                class="form-control"
                id="bank"
                name="bank"
                placeholder="Enter Bank Name"
              >
                <option value="" disabled selected>Select Bank Name</option>
                <option value="BOC">BOC</option>
                <option value="Sampath Bank">Sampath Bank</option>
                <option value="NTB">NTB</option>
                <option value="Commercial Bank">Commercial Bank</option>
                <option value="People's Bank">People's Bank</option>
                <option value="Other">Other</option>
              </select>
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
