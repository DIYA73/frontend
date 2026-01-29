import { useEffect, useState } from "react";
import "./Dashboard.css";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/portfolio", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) return <p>Loading...</p>;

 return (
  <div className="dashboard">
    <div className="dashboard-card">
      <h1>{data.name}</h1>
      <p className="role">{data.role}</p>

      <h3>Skills</h3>
      <ul>
        {data.skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  </div>
);

}
