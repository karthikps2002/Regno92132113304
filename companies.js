import React, { useState } from "react";
function CompanyRegistrationForm({ onRegister }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ Companyname, Ownername, Rollno, Owneremail, Accesscode });
    setCompanyname("");
    setOwnername("");
    setRollno("");
    setOwneremail("");
    setAccesscode("");
  };
  return (
    <form onSubmit={handleSet}>
      <label>
        Companyname:
        <input
          type="text"
          value={Companyname}
          onChange={(e) => setCompanyname(e.target.value)}
        />
      </label>
      <label>
        Ownername:
        <input
          type="text"
          value={Ownername}
          onChange={(e) => setOwnername(e.target.value)}
        />
      </label>
      <label>
        Rollno :
        <input
          type="number"
          value={Rollno}
          onChange={(e) => setRollno(e.target.value)}
        />
      </label>
      <label>
        Owneremail:
        <input
          type="email"
          value={Owneremail}
          onChange={(e) => setOwneremail(e.target.value)}
        />
      </label>
      Accesscode:
      <input
        type="text"
        value={Accesscode}
        onChange={(e) => setAccesscode(e.target.value)}
      />
    </form>
  );
}
export default CompanyRegistrationForm;
