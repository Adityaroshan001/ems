import React from 'react'
import Header from '../others/Header'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import AdminSidebar from './Admin/AdminSIdebar'
import Stats from './Admin/Stats'
import EmployeeTable from './Admin/emp-table/EmployeeTable'

const AdminDashboard = (props) => {
    const { employeesData, adminData, setEmployeesData } = useContext(AuthContext);
    console.log("Admin Dashboard")

    const [activePage, setActivePage] = useState("dashboard");

    useEffect(() => {
        console.log("Navigate to:", activePage)
    }, [activePage])


    return (
        <div className='w-full min-h-screen bg-black text-white '>
            <Header props={props} />

            {/*  */}
            <div className='flex gap-4 w-full mt-4 h-[calc(100vh-144px)] bg-[#1a1a1a] rounded-lg'>
                <AdminSidebar activePage={activePage} setActivePage={setActivePage} logout={props.logout} />
                {/* <div>Main Content</div> */}
                <main className='flex-1 '>
                    {/* {activePage === "dashboard" && ("Dashboard Content")}
                    {activePage === "employees" && ("Employees Content")}
                    {activePage === "create-task" && ("Create Task Content")}
                    {activePage === "reports" && ("Reports Content")} */}

                    {activePage === "dashboard" && (
                        <Stats employeesData={employeesData} />
                    )}
                    {activePage === "employees" && (<EmployeeTable employeesData={employeesData} setEmployeesData={setEmployeesData} />)}
                    {activePage === "create-task" && ("Create Task Content")}
                    {activePage === "reports" && ("Reports Content")}
                </main>
            </div>

        </div>
    )
}

export default AdminDashboard



