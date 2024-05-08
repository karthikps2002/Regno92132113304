import React from "react";
function RegisteredCompanies({ companies }) {
  return (
    <div>
      <h2>Registered Comapnies</h2>
      <ul>
        {companies.map((company, index) => {
          <li key={index}>
            <strong>{company.Companyname}</strong> : {company.address}
            <strong>{company.ClientID}</strong> : {company.address}
            <strong>{company.Clientsecret}</strong> : {company.address}
            <strong>{company.Ownername}</strong> : {company.address}
            <strong>{company.Owneremail}</strong> : {company.address},
            <strong>{company.Rollno}</strong> : {company.address}
          </li>;
        })}
      </ul>
    </div>
  );
}
export default RegisteredCompanies;
