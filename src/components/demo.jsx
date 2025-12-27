
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "./components/Auth/Login";

const App = () => {
  const [user, setUser] = useState(null);

  // Accessing context data
  const { employeesData, adminData } = useContext(AuthContext);

  // 🔥 Auto-login using localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser(parsed.role); // "admin" / "employee"
    }
  }, []);

  const handleLogin = (email, password) => {
    
    // Check admin credentials
    const adminUser = adminData.find(
      (u) => u.email === email && u.password === password
    );

    if (adminUser) {
      setUser("admin");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: adminUser })
      );
      return;
    }

    // Check employee credentials
    const employee = employeesData.find(
      (emp) => emp.email === email && emp.password === password
    );

    if (employee) {
      setUser("employee");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
      return;
    }

    // Invalid credentials
    alert("Invalid credentials!");
  };

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  return (
    <div>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <>
          <h1 className="text-2xl font-bold text-center mt-10 text-green-400">
            Admin Dashboard
          </h1>
          <button
            onClick={logout}
            className="mt-6 bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full block mx-auto"
          >
            Logout
          </button>
        </>
      ) : user === "employee" ? (
        <>
          <h1 className="text-2xl font-bold text-center mt-10 text-blue-400">
            Employee Dashboard
          </h1>
          <button
            onClick={logout}
            className="mt-6 bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full block mx-auto"
          >
            Logout
          </button>
        </>
      ) : null}
    </div>
  );
};

export default App;
