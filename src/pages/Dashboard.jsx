import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [portfolio, setPortfolio] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    fetch("http://localhost:5000/api/portfolio", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPortfolio(data));
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(portfolio, null, 2)}</pre>
    </>
  );
};

export default Dashboard;
