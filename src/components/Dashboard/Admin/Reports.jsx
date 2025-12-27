import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../../context/AuthContext'

const Reports = () => {
    const { employeesData, setEmployeesData } = useContext(AuthContext);
    const [reviewEmps, setReviewEmps] = useState([]);

    useEffect(() => {
        if (!employeesData) return

        const reviewTasks = [];
        employeesData.map(emp => {
            emp.tasks.map(task => {
                if (task.status === "in_review") {
                    reviewTasks.push({
                        empID: emp.id,
                        empName: emp.firstName + ' ' + emp.lastName,
                        task: task
                    })
                }
            })
        });
    }, [employeesData])



    return (
        // <div></div>
        <div>
            Review Page
        </div>
    )
}

export default Reports