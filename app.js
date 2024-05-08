import React, { useState, useEffect } from "react";
import CompanyRegistrationForm from "./companies";
import RegisteredCompanies from "./index";

function App() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await fetch("/registered_companies");
      const data = await response.json();
      setCompanies(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const registerCompany = async (companyData) => {
    try {
      const response = await fetch("/register_company", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(companyData),
      });
      const data = await response.json();
      console.log(data.message);
      fetchCompanies();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Company Registration</h1>
      <CompanyRegistrationForm onRegister={registerCompany} />
      <RegisteredCompanies companies={companies} />
    </div>
  );
}

export default App;
