  import { useContext, useEffect, useState } from 'react'
  import { AuthContext } from "./context/AuthContext"
  import Login from './components/Auth/Login'
  import AdminDashboard from './components/Dashboard/AdminDashboard'
  import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'

  const App = () => {
    const [user, setUser] = useState(null) // "admin" / "employee" / null
    const [loggedInUserData, setLoggedInUserData] = useState(null) // actual user data
    const { employeesData, adminData } = useContext(AuthContext);



    useEffect(() => {
      const loggedUser = localStorage.getItem("loggedInUser");

      if (loggedUser) {
        const userData = JSON.parse(loggedUser)
        setUser(userData.role);
        setLoggedInUserData(userData.data)
      }
    }, [])

    useEffect(() => {
      // localStorage.setItem("logged")
      // console.log("Employee Data changed")
      console.log(loggedInUserData)
    }, [loggedInUserData])



    const handleLogin = (email, password) => {
      console.log("Handle login function triggered")

      // check admin credintals
      const adminUser = adminData.find(
        (u) => u.email === email && u.password === password
      )
      if (adminUser) {
        setUser("admin")
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", data: adminUser }));
        setLoggedInUserData(adminUser)
        return;
      }

      // check employee credintals
      const employee = employeesData.find(
        (emp) => emp.email === email && emp.password === password
      )
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
        // console.log(loggedInUserData)
        return;;
      }

      // invalid credintals
      alert("Invalid Credentials!");
    }


    const logout = () => {
      localStorage.removeItem("loggedInUser");
      setUser(null);
      setLoggedInUserData(null);
    }
    return (

      <>
        <div>
          {!user ? <Login handleLogin={handleLogin} /> : ''}

          {/* {user === "admin" ? <h1>Admin Dashboard <button onClick={logout}>Logout</button> </h1> : (user === "employee" ? <h1>Employee Dashboard <button onClick={logout}>Logout</button> </h1> : "")} */}

          {user === "admin" ? <><AdminDashboard logout={logout} role="admin" changeUser={setUser} data={loggedInUserData} /></> : (user === "employee" ? <><EmployeeDashboard logout={logout} role="employee" changeUser={setUser} data={loggedInUserData} /></> : "")}
        </div>

      </>

    )
  }

  export default App











// import { useContext, useEffect, useState } from 'react';
// import { AuthContext } from "./context/AuthContext";
// import Login from './components/Auth/Login';
// import AdminDashboard from './components/Dashboard/AdminDashboard';
// import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';

// const App = () => {
//   const [user, setUser] = useState(null); // "admin" / "employee" / null
//   const [loggedInUserData, setLoggedInUserData] = useState(null);
//   const { employeesData, adminData } = useContext(AuthContext);

//   useEffect(() => {
//     const loggedUser = localStorage.getItem("loggedInUser");
//     if (loggedUser) {
//       const userData = JSON.parse(loggedUser);
//       setUser(userData.role);
//       setLoggedInUserData(userData.data);
//     }
//   }, []);

//   const handleLogin = (email, password) => {
//     const adminUser = adminData.find(u => u.email === email && u.password === password);
//     if (adminUser) {
//       setUser("admin");
//       setLoggedInUserData(adminUser);
//       localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", data: adminUser }));
//       return;
//     }

//     const employee = employeesData.find(emp => emp.email === email && emp.password === password);
//     if (employee) {
//       setUser("employee");
//       setLoggedInUserData(employee);
//       localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
//       return;
//     }

//     alert("Invalid Credentials!");
//   };

//   const logout = () => {
//     localStorage.removeItem("loggedInUser");
//     setUser(null);
//     setLoggedInUserData(null);
//   };

//   return (
//     <div>
//       {!user ? <Login handleLogin={handleLogin} /> : ''}
//       {user === "admin" && <AdminDashboard logout={logout} role="admin" changeUser={setUser} data={loggedInUserData} />}
//       {user === "employee" && <EmployeeDashboard logout={logout} role="employee" changeUser={setUser} data={loggedInUserData} />}
//     </div>
//   );
// };

// export default App;
