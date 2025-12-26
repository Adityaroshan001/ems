// This component shows an overview of how many tasks the employe has pending,completed or other state 

const TasksStats = ({ tasks }) => {
    const pending = tasks.filter(t => t.status === "pending").length
    const completed = tasks.filter(t => t.status === "completed").length
    const failed = tasks.filter(t => t.status === "failed").length
    const inReview = tasks.filter(t => t.status === "in_review").length


    const stats = [
        { title: "Pending Tasks", value: pending, css: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40" },
        { title: "In Review", value: inReview, css: "bg-purple-500/20 text-purple-400 border-purple-500/4" },
        { title: "completed", value: completed, css: "bg-green-500/20 text-green-400 border-green-500/40" },
        { title: "Failed Tasks", value: failed, css: "bg-red-500/20 text-red-400 border-red-500/40" }
    ];




    return (

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>

            {stats.map((stat, index) => (
                <div
                    key={index}
                    className={`${stat.css} p-4 rounded shadow-md hover:shadow-lg transition duration-100`}
                >
                    <h4 className={`text-${stat.color}-400`}>{stat.title}</h4>
                    <p className='text-[27px] font-bold'>{stat.value}</p>
                </div>
            ))}
        </div>
    )
}

export default TasksStats


