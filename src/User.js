import React from "react";

const User = (props) => {
  const { data } = props;
  return (
    <div>
      <h1>User Component</h1>
      <h3>
        {" "}
        <span>Name : </span>
        {data.name}
      </h3>
      <h3>
        {" "}
        <span>Age : </span>
        {data.age}
      </h3>
    </div>
  );
};

export default User;
