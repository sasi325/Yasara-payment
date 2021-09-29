import React, { useState, useEffect } from "react";
import axios from "axios";

const Expence_Edit = (props) => {
  const [itemData, setItemData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8070/payment/get/${props.match.params.id}`)
      .then((resp) => {
        setItemData(resp.data.expence);
      })
      .catch((err) => {
        alert("cannot get expence data");
        window.location.href = "/payments/expence_list";
      });
  }, []);

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


    axios
      .put(
        `http://localhost:8070/payment/update/${props.match.params.id}`,
        newExpence

      )
      .then(() => {
        alert("Successfully updated the expence");
        window.location.href = "/payments/expence_list";
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <h1>Edit Expence : {props.match.params.id}</h1>
      <form onSubmit={sendData}>
        <div className="container row Payment_EditForm">
          <div className="mt-3 mb-1 col-sm-6 col-lg-4">
            <div className="form-group">
              <label for="name">Name</label>
              <input
                requird
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={(e) => {
                  setItemData((st) => {
                    return { ...st, name: e.target.value };
                  });
                }}
                value={itemData.name}
                placeholder="Enter Full Name"
              />
            </div>
          </div>
          <div className="mt-3 mb-1 col-sm-6 col-lg-4">
            <div className="form-group">
              <label for="post">Post</label>
              <select
                className="form-control"
                id="post"
                name="post"
                onChange={(e) => {
                  setItemData((st) => {
                    return { ...st, post: e.target.value };
                  });
                }}
                value={itemData.post}
                placeholder="Enter Post"
              >
                <option value="" disabled selected>
                  Select Your Post
                </option>
                <option value="Finance">Finance Manager</option>
                <option value="librarian">Librarian</option>
                <option value="delivery">Delivery Manager</option>
              </select>
            </div>
          </div>
          <div className="mt-3 mb-1 col-sm-6 col-lg-4">
            <div className="form-group">
              <label for="perpose">Perpose</label>
              <input
                requird
                type="text"
                className="form-control"
                id="perpose"
                name="perpose"
                onChange={(e) => {
                  setItemData((st) => {
                    return { ...st, perpose: e.target.value };
                  });
                }}
                value={itemData.perpose}
                placeholder="Enter perpose for the payment"
              >
              </input>
            </div>
          </div>
          <div className="mt-3 mb-1 col-sm-6 col-lg-4">
            <div className="form-group">
              <label for="bank">Bank Name</label>
              <select
                className="form-control"
                id="bank"
                name="bank"
                onChange={(e) => {
                  setItemData((st) => {
                    return { ...st, bank: e.target.value };
                  });
                }}
                value={itemData.bank}
                placeholder="Enter Bank Name"
              >
                <option value="" disabled selected>
                  Select Bank Name
                </option>
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
            <div className="form-group">
              <label for="amount">Amount</label>
              <input
                requird
                type="Number"
                className="form-control"
                id="amount"
                name="amount"
                onChange={(e) => {
                  setItemData((st) => {
                    return { ...st, amount: e.target.value };
                  });
                }}
                value={itemData.amount}
                placeholder="Enter Payment Amount"
              />
            </div>
          </div>
          <div className="mt-3 mb-1 col-sm-6 col-lg-4">
            <div className="form-group">
              <label for="date">Date</label>
              <input
                requird
                type="date"
                className="form-control"
                id="date"
                name="date"
                onChange={(e) => {
                  setItemData((st) => {
                    return { ...st, date: e.target.value };
                  });
                }}
                value={itemData.date ? itemData.date.split("T")[0] : ""}
                placeholder="Enter Date"
              />
            </div>
          </div>
          {/* <div className="mt-3 mb-4 col-sm-12 col-lg-12">
            <div className="form-group">
              <label for="date">pay slip</label>
              <input
                requird
                type="file"
                className="form-control"
                id="payslip"
                name="payslip"
                onChange={e => {setItemData(st =>{ return {...st, payslip:e.target.value}})}}
                
                value={itemData.payslip}
                placeholder="Upload your payment slip"
              />
            </div>
          </div> */}
          <div className="mt-3 mb-1 col-sm-12 col-lg-12">
            <button type="submit" className="btn dubmitButton">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Expence_Edit;
