import React, { useState } from "react";

const PostRequest = () => {
  const [userData, setUserData] = useState({});
  console.log(userData);
  return (
    <div>
      <h1>Create User</h1>
      <div>
        <label htmlFor="">First Name:</label>
        <input
          onChange={(e) =>
            setUserData({ ...userData, firstName: e.target.value })
          }
          type="text"
        />{" "}
        <br />
        <label htmlFor="">Lats Name:</label>
        <input
          onChange={(e) =>
            setUserData({ ...userData, lastName: e.target.value })
          }
          type="text"
        />{" "}
        <br />
        <label htmlFor="">i agre</label>
        <input
          onChange={(e) =>
            setUserData({ ...userData, checkbox: e.target.value })
          }
          type="checkBox"
        />{" "}
        <br />
        <button>submit</button>
      </div>
    </div>
  );
};

export default PostRequest;
