
import TaskCArd from './TaskCArd'

const TaskList = ({ tasks, onStatusChange }) => {

    return (
        <div>
            <h3 className='text-lg font-semibold my-3'>My Tasks</h3>

            {tasks.length === 0 ? (
                <p className='bg-gray-400'> No Tasks Assigned</p>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {tasks.map(task => (
                        // console.log(task
                        // <div>task</div>
                        <TaskCArd
                         key={task.id}
                          task={task} 
                          onStatusChange={onStatusChange}
                          />

                    ))}

                </div>
            )}
        </div>
    )
}

export default TaskList