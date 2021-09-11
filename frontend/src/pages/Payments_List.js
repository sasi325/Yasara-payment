import React, { useState, useEffect } from "react";
import axios from "axios";

import PaymentCard from "../component/PaymentCard2";

const Payments_List = (props) => {
  const [PaymentsList, setPaymentsList] = useState([]);

  const FetchItems = () => {
    axios
      .get("http://localhost:8070/payment/")
      .then((resp) => {
        setPaymentsList(resp.data);
      })
      .catch((err) => {
        setPaymentsList([]);
      });
  };

  useEffect(() => {
    FetchItems();
  }, []);

  return (
    <div className="container">
      {PaymentsList.map((data) => {
        return <PaymentCard FetchItems={FetchItems} data={data} />;
      })}
    </div>
  );
};

export default Payments_List;
