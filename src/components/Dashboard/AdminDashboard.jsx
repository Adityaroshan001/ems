import React from 'react'
import Header from '../others/Header'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import AdminSidebar from './Admin/AdminSIdebar'
import Stats from './Admin/Stats'
import EmployeeTable from './Admin/emp-table/EmployeeTable'
import Reports from './Admin/Reports'
import CreateTask from './Admin/create-task/CreateTask'

const AdminDashboard = (props) => {
    const { employeesData, adminData, setEmployeesData } = useContext(AuthContext);

    const [activePage, setActivePage] = useState("dashboard");

    useEffect(() => {
    }, [activePage])


    return (
        <div className='w-full min-h-screen bg-black text-white '>
            <Header props={props} />

            {/*  */}
            {/* <div className='flex gap-4 w-full mt-4 h-[calc(100vh-144px)] bg-[#1a1a1a] rounded-lg'> */}
            <div className='flex gap-4 w-full mt-4 h-[calc(100vh-144px)] bg-gray-900 rounded-lg'>
                <AdminSidebar activePage={activePage} setActivePage={setActivePage} logout={props.logout} />

                <main className='flex-1 '>
                    {/* {activePage === "dashboard" && ("Dashboard Content")}
                    {activePage === "employees" && ("Employees Content")}
                    {activePage === "create-task" && ("Create Task Content")}
                    {activePage === "reports" && ("Reports Content")} */}

                    {activePage === "dashboard" && (<Stats employeesData={employeesData} />)}

                    {activePage === "employees" && (<EmployeeTable employeesData={employeesData} setEmployeesData={setEmployeesData} />)}

                    {activePage === "create-task" && (<CreateTask />)}

                    {activePage === "reports" && (<Reports />)}

                </main>
            </div>

        </div>
    )
}

export default AdminDashboard



