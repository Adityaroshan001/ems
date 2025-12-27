
const AdminSidebar = ({ activePage, setActivePage, logout }) => {
    const menus = [
        { key: "dashboard", label: "Dashboard" },
        { key: "employees", label: "Employees" },
        { key: "create-task", label: "Create Task" },
        { key: "reports", label: "Reports" },
    ];


    return (
        <div className=' w-64 h-full p-4 rounded-lg bg-gray-900 text-white border-r border-white'>
            <h1 className='text-2xl font-bold mb-10'>Admin Panel</h1>

            <ul className='space-y-2'>
                {menus.map(item => (
                    <li
                        key={item.key}
                        className={`px-4 py-2 rounded cursor-pointer
                            ${activePage === item.key ? "bg-blue-600 font-semibold" : "hover:bg-gray-800"}`}
                        onClick={() => {
                            setActivePage(item.key)
                        }}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>

            <button
                className='mt-10 w-[100%] py-2 rounded bg-red-600'
                onClick={logout}>Logout</button>
        </div>
    )
}

export default AdminSidebar