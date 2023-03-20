import React, { useState, useEffect } from "react";
import axios from "axios";
const Read = () => {
  const getApiData = async () => {
    const resp = await axios.get("");
  };
  return (
    <div>
      <h1>Get Method</h1>
    </div>
  );
};

export default Read;
