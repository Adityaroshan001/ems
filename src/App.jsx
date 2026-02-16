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















// import { useState } from "react";

// const API_KEY = "935b78c1"; // Replace with your OMDB API key

// function App() {
//   const [query, setQuery] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState("");

//   const searchMovies = async () => {
//     if (!query) return;

//     try {
//       const response = await fetch(
//         `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
//       );
//       const data = await response.json();

//       if (data.Response === "True") {
//         setMovies(data.Search);
//         setError("");
//       } else {
//         setMovies([]);
//         setError(data.Error);
//       }
//     } catch (err) {
//       setMovies([]);
//       setError("Error fetching data");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
//       <h1 className="text-4xl font-bold text-indigo-700 mb-6">Movie Search App</h1>

//       <div className="flex mb-6 w-full max-w-md">
//         <input
//           type="text"
//           placeholder="Search movies..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//         />
//         <button
//           onClick={searchMovies}
//           className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-500 transition"
//         >
//           Search
//         </button>
//       </div>

//       {error && <p className="text-red-500 mb-4">{error}</p>}

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
//         {movies.map((movie) => (
//           <div
//             key={movie.imdbID}
//             className="bg-white p-4 rounded-lg shadow flex flex-col items-center"
//           >
//             <img
//               src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"}
//               alt={movie.Title}
//               className="w-40 h-60 object-cover rounded mb-2"
//             />
//             <h2 className="text-lg font-bold text-center">{movie.Title}</h2>
//             <p className="text-gray-500">{movie.Year}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;