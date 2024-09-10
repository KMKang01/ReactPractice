import React, { useState } from "react";

function SignUp1(props) {
  const [name, setName] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`이름: ${name}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input type="text" value={name} onChange={handleChangeName} />
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

export default SignUp1;
