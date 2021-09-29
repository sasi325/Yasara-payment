import React, { useState, useEffect } from "react";
import axios from "axios";

import ExpenceCard from "../component/ExpenceCard";

const Expences_List = (props) => {
  const [ExpencesList, setExpencesList] = useState([]);

  const FetchItems = () => {
    axios
      .get("http://localhost:8070/payment/")
      .then((resp) => {
        setExpencesList(resp.data);
      })
      .catch((err) => {
        setExpencesList([
          
        ]);
      });
  };

  useEffect(() => {
    FetchItems();
  }, []);

  return (
    <div className="container">
      {ExpencesList.map((data) => {
        return <ExpenceCard FetchItems={FetchItems} data={data} />;
      })}
    </div>
  );
};

export default Expences_List;
