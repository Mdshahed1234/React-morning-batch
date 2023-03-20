import axios from "axios";
import React, { useEffect, useState } from "react";

const GetRequest = () => {
  const [data, setData] = useState([]);
  const apiData = async () => {
    const resp = await axios.get("https://fakestoreapi.com/products");
    setData(resp.data);
    console.log(resp.data);
  };
  useEffect(() => {
    apiData();
  }, []);
  return (
    <div>
      {data.map((items) => {
        return (
          <div
            style={{
              display: "inline-block",
              border: "3px solid yellow",
              backgroundColor: "gray",
            }}
          >
            <img src={items.image} width="350px" height="300px" alt="" />
            {/* <p>{items.title}</p> */}
            <h5>{items.category}</h5>
            <p>{items.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default GetRequest;
