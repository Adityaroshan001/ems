import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../context/AuthContext';


const CreateTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [dueDate, setDueDate] = useState('');// date will be in YYYY-MM-DD format
    const [employees, setEmployees] = useState([]); // list of all employees in company with name and id only
    const [selectedEmployee, setSelectedEmployee] = useState("") // state variable for tracking which employee is selected to assign task using emmployee id



    const { employeesData, setEmployeesData } = useContext(AuthContext);


    useEffect(() => {
        if (!employeesData) return

        const data = employeesData.map(emp => {
            return {
                empName: emp.firstName + ' ' + emp.lastName,
                empID: emp.id
            }
        })

        setEmployees(data)
    }, [], [employeesData])

    const createTask = () => {

        const id = Number(selectedEmployee);
        if (!id) return;

        const updatedEmployees = employeesData.map(emp => {

            const taskObject = {
                "id": emp.tasks.length + 1,
                "title": title,
                "description": description,
                "dueDate": dueDate,
                "category": category,
                "status": "pending"
            }
            if (emp.id === id) {
                return {
                    ...emp,
                    tasks: [...emp.tasks, taskObject]
                }
            } else {
                return emp
            }
        })
        setEmployeesData(updatedEmployees)
        // console.log(updatedEmployees)
        // localStorage.setItem('employeesData', JSON.stringify(updatedEmployees));

        setTitle('');
        setDescription('');
        setCategory('');
        setDueDate('');
        setSelectedEmployee('')
    }

    return (
        <div className='bg-transparent max-w-5xl mx-auto p-4 mt-2'>
            <form
                className='rounded-xl text-white bg-gray-800 backdrop-opacity-60 shadow-md p-8'
                onSubmit={(e) => {
                    e.preventDefault()
                    createTask()
                }}
            >
                <h2 className='text-3xl font-semibold  mb-6'>Create New Task</h2>

                <div>

                    {/* title input */}
                    <div className='mb-6'>
                        <label className='block text-sm font-medium mb-2'>Task Title</label>
                        <input
                            required
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                            type="text"
                            placeholder='Enter Task Title'
                            className='w-full  px-4 py-2.5 border lg:border-2  border-gray-500 rounded-[5px] focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none'
                        />
                    </div>


                    {/* Description input */}
                    <div className='mb-6'>
                        <label className='block text-sm font-medium mb-2'>Task Description</label>
                        <textarea
                            required
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                            type="text"
                            placeholder='Enter Task Description'
                            rows="3"
                            className='w-full px-4 py-2.5 border lg:border-2  border-gray-500 rounded-[5px] focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none'
                        />
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6'>

                        {/* Category input */}
                        <div>
                            <label className='block text-sm font-medium mb-2'>Task Category</label>

                            <input
                                required
                                value={category}
                                onChange={(e) => {
                                    setCategory(e.target.value)
                                }}
                                type="text"
                                placeholder='Enter Task Caegory'
                                className='w-full px-4 py-2.5 border lg:border-2  border-gray-500 rounded-[5px] focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none'

                            />
                        </div>

                        {/* Due Date input */}
                        <div>
                            <label className='block text-sm font-medium mb-2'>Due Date</label>
                            <input
                                required
                                type="date"
                                value={dueDate}
                                onChange={(e) => {
                                    setDueDate(e.target.value)
                                }}
                                className='w-full px-4 py-2.5 border lg:border-2  border-gray-500 rounded-[5px] focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none'

                            />
                        </div>
                    </div>
                </div>

                <div className='mb-6'>
                    <label className='block text-sm font-medium mb-2'>Assign To</label>
                    <select
                        required
                        value={selectedEmployee}
                        onChange={(e) => {
                            setSelectedEmployee(e.target.value)
                        }}
                        className='w-full px-4 py-2.5 border lg:border-2  border-gray-500 rounded-[5px] focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none'
                    >
                        <option value="">Select Employee</option>
                        {employees.map(emp => (
                            <option key={emp.empID} value={emp.empID}>{emp.empName}</option>
                        ))}
                    </select>
                </div>

                <button
                    type='submit'
                    // disabled={!title || !description || !category || !dueDate || !Number(selectedEmployee)}
                    className="w-full lg:w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg cursor-pointer"
                >Assign Task</button>
            </form>
        </div>
    )
}

export default CreateTask






