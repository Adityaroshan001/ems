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


    const handleStatusChange = (taskId, newStatus) => {
        const updatedTasks = task.map(t =>
            t.id === taskId ? { ...t, status: newStatus } : t
        );
        setTask(updatedTasks)


        // update the tasks in employee array
        const updatedEmployees = employeesData.map(emp =>
            emp.id == props.data.id ? { ...emp, tasks: updatedTasks } : emp
        );

        setEmployeesData(updatedEmployees)

        // persist to the local storage
        const localData = getLocalStorage();
        setLocalStorage(localData.admin, updatedEmployees)

    }


    return (
        <div className='w-full min-h-screen bg-black p-4 text-white '>
            <Header props={props} />

            <div className='p-6 space-y-6'>
                <EmployeeDetails employee={props.data} />
                {/* <TasksStats tasks={props.data.tasks} />
                <TaskList tasks={props.data.tasks} onStatusChange={handleStatusChange} /> */}
                <TasksStats tasks={task} />
                <TaskList tasks={task} onStatusChange={handleStatusChange} />

            </div>
        </div>
    )
}

export default EmployeeDashboard

