import { useState, useContext } from 'react'
import Header from '../others/Header'
import EmployeeDetails from './Employee/EmployeeDetails'
import TasksStats from './Employee/TasksStats'
import TaskList from './Employee/TaskList'

import { AuthContext } from '../../context/AuthContext'
import { setLocalStorage, getLocalStorage } from '../../utils/localStorage'

const EmployeeDashboard = (props) => {
    const { employeesData, setEmployeesData } = useContext(AuthContext);
    const [task, setTask] = useState(props.data.tasks);

    //  this function triggers when user submit any task
    const handleStatusChange = (taskId, newStatus) => {
        // 1️ Update tasks locally
        const updatedTasks = task.map(t =>
            t.id === taskId ? { ...t, status: newStatus } : t
        );
        setTask(updatedTasks);

        // 2️ Update employee inside employees array
        const updatedEmployees = employeesData.map(emp =>
            emp.id === props.data.id
                ? { ...emp, tasks: updatedTasks }
                : emp
        );

        // 3️ Update React Context (THIS IS CRUCIAL)
        setEmployeesData(updatedEmployees);

        // 4️ Persist to localStorage
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));

        // 5️ Sync loggedInUser
        const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (loggedUser?.role === "employee") {
            loggedUser.data = updatedEmployees.find(
                emp => emp.id === props.data.id
            );
            localStorage.setItem("loggedInUser", JSON.stringify(loggedUser));
        }
    };



    return (
        <div className='w-full min-h-screen bg-black p-4 text-white '>
            <Header props={props} />

            <div className='p-6 space-y-6'>
                <EmployeeDetails employee={props.data} />
                <TasksStats tasks={task} />
                <TaskList tasks={task} onStatusChange={handleStatusChange} />

            </div>
        </div>
    )
}

export default EmployeeDashboard



