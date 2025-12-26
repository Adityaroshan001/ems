
const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}];

const employees = [
    {
        id: 1,
        firstName: "Abhishek",
        lastName: "Mehata",
        email: "emp1@e.com",
        password: "123",
        salary: 50000,

        tasks: [
            {
                id: 101,
                title: "Update website",
                description: "Revamp the homepage design",
                dueDate: "2024-10-12",
                category: "Design",
                status: "pending"
            },
            {
                id: 102,
                title: "Client meeting",
                description: "Discuss project requirements",
                dueDate: "2024-10-10",
                category: "Meeting",
                status: "completed"
            },
            {
                id: 103,
                title: "Fix bugs",
                description: "Resolve bugs reported in issue tracker",
                dueDate: "2024-10-14",
                category: "Development",
                status: "pending"
            }
        ]
    },

    {
        id: 2,
        firstName: "Aman",
        lastName: "Mehta",
        email: "emp2@e.com",
        password: "123",
        salary: 60000,

        tasks: [
            {
                id: 201,
                title: "Database optimization",
                description: "Optimize queries for better performance",
                dueDate: "2024-10-11",
                category: "Database",
                status: "pending"
            },
            {
                id: 202,
                title: "Design new feature",
                description: "Create mockups for the new feature",
                dueDate: "2024-10-09",
                category: "Design",
                status: "completed"
            }
        ]
    },

    {
        id: 3,
        firstName: "Neeraj",
        lastName: "Kumar",
        email: "emp3@e.com",
        password: "123",
        salary: 70000,

        tasks: [
            {
                id: 301,
                title: "Prepare presentation",
                description: "Prepare slides for upcoming client presentation",
                dueDate: "2024-10-13",
                category: "Presentation",
                status: "pending"
            },
            {
                id: 302,
                title: "Code review",
                description: "Review the codebase for optimization",
                dueDate: "2024-10-12",
                category: "Development",
                status: "pending"
            },
            {
                id: 303,
                title: "Testing",
                description: "Test the latest build for bugs",
                dueDate: "2024-10-08",
                category: "QA",
                status: "completed"
            }
        ]
    },

    {
        id: 4,
        firstName: "Ayush",
        lastName: "Sharma",
        email: "emp4@e.com",
        password: "123",
        salary: 80000,

        tasks: [
            {
                id: 401,
                title: "Write documentation",
                description: "Update the project documentation",
                dueDate: "2024-10-13",
                category: "Documentation",
                status: "pending"
            },
            {
                id: 402,
                title: "Set up CI/CD",
                description: "Implement continuous integration pipeline",
                dueDate: "2024-10-11",
                category: "DevOps",
                status: "pending"
            }
        ]
    },

    {
        id: 5,
        firstName: "Santosh",
        lastName: "Chaudhary",
        email: "emp5@e.com",
        password: "123",
        salary: 90000,

        tasks: [
            {
                id: 501,
                title: "UI redesign",
                description: "Redesign the user interface for better UX",
                dueDate: "2024-10-14",
                category: "Design",
                status: "pending"
            },
            {
                id: 502,
                title: "Deploy new build",
                description: "Deploy the latest build to production",
                dueDate: "2024-10-09",
                category: "DevOps",
                status: "completed"
            },
            {
                id: 503,
                title: "Client feedback",
                description: "Gather feedback from clients after product launch",
                dueDate: "2024-10-12",
                category: "Support",
                status: "pending"
            }
        ]
    }
];



export const setLocalStorage = () => {
    localStorage.setItem("admin", JSON.stringify(admin));
    localStorage.setItem("employees", JSON.stringify(employees));
};

export const getLocalStorage = () => {
    const employees = localStorage.getItem("employees");
    const admin = localStorage.getItem("admin");

    if (employees && admin) {
        // return {employees: JSON.parse(employees), admin: JSON.parse(admin)}
        return { employees: JSON.parse(employees), admin: JSON.parse(admin) };

    }
    return null;
};



// export const setLocalStorage = (adminData = admin, employeeData = employees) => {
//     localStorage.setItem("admin", JSON.stringify(adminData));
//     localStorage.setItem("employees", JSON.stringify(employeeData));
// };

// export const getLocalStorage = () => {
//     const employeesData = JSON.parse(localStorage.getItem("employees"));
//     const adminData = JSON.parse(localStorage.getItem("admin"));
//     return { employees: employeesData || employees, admin: adminData || admin };
// };

// // Update both employees and loggedInUser
// export const updateLocalStorage = (updatedEmployees, loggedInUser = null) => {
//     const localData = getLocalStorage();
//     localStorage.setItem("employees", JSON.stringify(updatedEmployees));
//     localStorage.setItem("admin", JSON.stringify(localData.admin));

//     if (loggedInUser) {
//         localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
//     }
// };





























// const admin = [{
//     "id": 1,
//     "email": "admin@example.com",
//     "password": "123"
// }];

// const employees = [
//     {
//         "id": 1,
//         "firstName": "Abhishek",
//         "lastName": "Mehata",
//         "email": "emp1@e.com",
//         "password": "123",
//         "salary": "50000",
//         "taksCount": {
//             "pending":2,
//             "completed":1,
//             "failed":0
//             // "active": 2,
//             // "newTask": 1,
//             // "completed": 1,
//             // "failed": 0
//         },
//         "tasks": [
//             {
//                 // "active": true,
//                 // "newTask": true,
//                 // "completed": false,
//                 // "failed": false,

//                 "pending":true,
//                 "completed":false,
//                 "failed":false,
//                 "taskTitle": "Update website",
//                 "taskDescription": "Revamp the homepage design",
//                 "taskDate": "2024-10-12",
//                 "category": "Design"
//             },
//             {
//                 "active": false,
//                 "newTask": false,
//                 "completed": true,
//                 "failed": false,
//                 "taskTitle": "Client meeting",
//                 "taskDescription": "Discuss project requirements",
//                 "taskDate": "2024-10-10",
//                 "category": "Meeting"
//             },
//             {
//                 "active": true,
//                 "newTask": false,
//                 "completed": false,
//                 "failed": false,
//                 "taskTitle": "Fix bugs",
//                 "taskDescription": "Resolve bugs reported in issue tracker",
//                 "taskDate": "2024-10-14",
//                 "category": "Development"
//             },
//         ]
//     },

//     {
//         "id": 2,
//         "firstName": "Aman",
//         "lastName": "Mehta",
//         "email": "emp2@e.com",
//         "password": "123",
//         "salary": "60000",
//         "taskCounts": {
//             "active": 1,
//             "newTask": 0,
//             "completed": 1,
//             "failed": 0
//         },
//         "tasks": [
//             {
//                 "active": true,
//                 "newTask": false,
//                 "completed": false,
//                 "failed": false,
//                 "taskTitle": "Database optimization",
//                 "taskDescription": "Optimize queries for better performance",
//                 "taskDate": "2024-10-11",
//                 "category": "Database"
//             },
//             {
//                 "active": false,
//                 "newTask": false,
//                 "completed": true,
//                 "failed": false,
//                 "taskTitle": "Design new feature",
//                 "taskDescription": "Create mockups for the new feature",
//                 "taskDate": "2024-10-09",
//                 "category": "Design"
//             }
//         ]
//     },

//     {
//         "id": 3,
//         "firstName": "Neeraj",
//         "lastName": "Kumar",
//         "email": "emp3@e.com",
//         "password": "123",
//         "salary": "70000",
//         "taskCounts": {
//             "active": 2,
//             "newTask": 1,
//             "completed": 1,
//             "failed": 0
//         },
//         "tasks": [
//             {
//                 "active": true,
//                 "newTask": true,
//                 "completed": false,
//                 "failed": false,
//                 "taskTitle": "Prepare presentation",
//                 "taskDescription": "Prepare slides for upcoming client presentation",
//                 "taskDate": "2024-10-13",
//                 "category": "Presentation"
//             },
//             {
//                 "active": true,
//                 "newTask": false,
//                 "completed": false,
//                 "failed": false,
//                 "taskTitle": "Code review",
//                 "taskDescription": "Review the codebase for optimization",
//                 "taskDate": "2024-10-12",
//                 "category": "Development"
//             },
//             {
//                 "active": false,
//                 "newTask": false,
//                 "completed": true,
//                 "failed": false,
//                 "taskTitle": "Testing",
//                 "taskDescription": "Test the latest build for bugs",
//                 "taskDate": "2024-10-08",
//                 "category": "QA"
//             }
//         ]
//     },

//     {
//         "id": 4,
//         "firstName": "Ayush",
//         "lastName": "Sharma",
//         "email": "emp4@e.com",
//         "password": "123",
//         "salary": "80000",
//         "taskCounts": {
//             "active": 2,
//             "newTask": 1,
//             "completed": 0,
//             "failed": 0
//         },
//         "tasks": [
//             {
//                 "active": true,
//                 "newTask": true,
//                 "completed": false,
//                 "failed": false,
//                 "taskTitle": "Write documentation",
//                 "taskDescription": "Update the project documentation",
//                 "taskDate": "2024-10-13",
//                 "category": "Documentation"
//             },
//             {
//                 "active": true,
//                 "newTask": false,
//                 "completed": false,
//                 "failed": false,
//                 "taskTitle": "Set up CI/CD",
//                 "taskDescription": "Implement continuous integration pipeline",
//                 "taskDate": "2024-10-11",
//                 "category": "DevOps"
//             }
//         ]
//     },

//     {
//         "id": 5,
//         "firstName": "Santosh",
//         "lastName": "Chaudhary",
//         "email": "emp5@e.com",
//         "password": "123",
//         "salary": "90000",
//         "taskCounts": {
//             "active": 2,
//             "newTask": 1,
//             "completed": 1,
//             "failed": 0
//         },
//         "tasks": [
//             {
//                 "active": true,
//                 "newTask": true,
//                 "completed": false,
//                 "failed": false,
//                 "taskTitle": "UI redesign",
//                 "taskDescription": "Redesign the user interface for better UX",
//                 "taskDate": "2024-10-14",
//                 "category": "Design"
//             },
//             {
//                 "active": false,
//                 "newTask": false,
//                 "completed": true,
//                 "failed": false,
//                 "taskTitle": "Deploy new build",
//                 "taskDescription": "Deploy the latest build to production",
//                 "taskDate": "2024-10-09",
//                 "category": "DevOps"
//             },
//             {
//                 "active": true,
//                 "newTask": false,
//                 "completed": false,
//                 "failed": false,
//                 "taskTitle": "Client feedback",
//                 "taskDescription": "Gather feedback from clients after product launch",
//                 "taskDate": "2024-10-12",
//                 "category": "Support"
//             }
//         ]
//     }
// ]



// export const setLocalStorage = () => {
//     localStorage.setItem("admin", JSON.stringify(admin));
//     localStorage.setItem("employees", JSON.stringify(employees));
// };

// export const getLocalStorage = () => {
//     const employees = localStorage.getItem("employees");
//     const admin = localStorage.getItem("admin");

//     if (employees && admin) {
//         // return {employees: JSON.parse(employees), admin: JSON.parse(admin)}
//         return { employees: JSON.parse(employees), admin: JSON.parse(admin) };

//     }
//     return null;
// };


// /**

// src
// |---components
//     |-------Auth
//             |-------Login.jsx
//     |-------Dashboard
//             |-------AdminDashboard.jsx
//             |-------EmployeeDashboard.jsx
//     |-------others
//             |-------Header.jsx
// |---context
//     |-------AuthContext.jsx
// |---utils
//     |-------localStorage.jsx
// |---App.jsx
//  */