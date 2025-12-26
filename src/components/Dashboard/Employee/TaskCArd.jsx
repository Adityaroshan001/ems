import { useEffect } from "react";

const TaskCArd = ({ task, onStatusChange }) => {
    const statusColors = {
        pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
        completed: "bg-green-500/20 text-green-400 border-green-500/40",
        failed: "bg-red-500/20 text-red-400 border-red-500/40",
        in_review: "bg-purple-500/20 text-purple-400 border-purple-500/40",
    };


    const handleSubmit = () => {
        const ask = confirm("Are you sure that the Task is completed?")
        if (ask && task.status === "pending") {
            onStatusChange(task.id, "in_review")
        }
    }

    // console.log(task)
    return (
        <div className='border p-4 rounded-lg bg-gray-900  border-gray-700 hover:border-gray-600 transition duration-100'>

            {/* Header */}
            <div className='flex justify-between items-center'>
                <h4 className='font-semibold'>{task.title}</h4>
                <span className={`text-xs font-medium px-3 py-1 rounded-full border ${statusColors[task.status]}`}>{task.status}</span>
            </div>

            {/* Description */}
            <div className='text-sm text-gray-400 mb-4 line-clamp-2'>{task.description}</div>

            {/* Footer */}
            <div className='flex justify-between text-[15px] text-gray-500'>
                <span>Due: {task.dueDate}</span>
                <span className='uppercase tracking-wide'>{task.category}</span>
            </div>

            {task.status === "pending" && (
                <button
                    className="mt-3 px-3 py-1 bg-blue-600 rounded"
                    onClick={handleSubmit}
                >
                    Submit Task
                </button>

            )}
        </div>
    )
}

export default TaskCArd