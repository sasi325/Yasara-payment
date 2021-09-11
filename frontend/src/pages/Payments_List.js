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
        setPaymentsList([
          {
            id: "613a139eba3cf55460af1c3e",
            name: "sasi",
            class: "adad",
            perpose: "fee",
            bank: "boc",
            amount: 2432,
            payslip : "https://help.myob.com/wiki/download/attachments/17273963/Note%20on%20pay%20slip.jpg?version=1&modificationDate=1519266766000&api=v2",
            date: "2021-09-09T14:01:02.000Z",
            _v: 0,
          },
          {
            id: "613a139eba3cf55460af1c3e",
            name: "sasi",
            class: "adad",
            perpose: "fee",
            bank: "boc",
            amount: 2432,
            payslip : "https://help.myob.com/wiki/download/attachments/17273963/Note%20on%20pay%20slip.jpg?version=1&modificationDate=1519266766000&api=v2",
            date: "2021-09-09T14:01:02.000Z",
            _v: 0,
          },
          {
            id: "613a139eba3cf55460af1c3e",
            name: "sasi",
            class: "adad",
            perpose: "fee",
            bank: "boc",
            amount: 2432,
            payslip : "https://help.myob.com/wiki/download/attachments/17273963/Note%20on%20pay%20slip.jpg?version=1&modificationDate=1519266766000&api=v2",
            date: "2021-09-09T14:01:02.000Z",
            _v: 0,
          },
          {
            id: "613a139eba3cf55460af1c3e",
            name: "sasi",
            class: "adad",
            perpose: "fee",
            bank: "boc",
            amount: 2432,
            payslip : "https://help.myob.com/wiki/download/attachments/17273963/Note%20on%20pay%20slip.jpg?version=1&modificationDate=1519266766000&api=v2",
            date: "2021-09-09T14:01:02.000Z",
            _v: 0,
          },
        ]);
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
