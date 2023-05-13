import prisma from "@/prisma"

export default defineEventHandler(async event => {
    const query = getQuery(event) // If there is a query string, it will be parsed and returned as an object.

    const clear = await prisma.$transaction([
        prisma.user.deleteMany(),
        prisma.project.deleteMany(),
        prisma.task.deleteMany(),
    ])
    
    const users = await prisma.$transaction([
        prisma.user.create({
            data: {
                name: "Scott",
                password: "1234",                
            }
        }),
        prisma.user.create({
            data: {
                name: "Vladimir",
                password: "123456",
            }
        }),
        prisma.user.create({
            data: {
                name: "Neumann",
                password: "testing",
            }
        }),
        prisma.user.create({
            data: {
                name: "King",
                password: "testing",
            }
        }),
        prisma.user.create({
            data: {
                name: "Queen",
                password: "testing",
            }
        }),
        prisma.user.create({
            data: {
                name: "Harry",
                password: "testing",
            }
        }),
        prisma.user.create({
            data: {
                name: "Katie",
                password: "testing",
            }
        }),
        prisma.user.create({
            data: {
                name: "Rachael",
                password: "testing",
            }
        }),
        prisma.user.create({
            data: {
                name: "Callum",
                password: "testing",
            }
        }),
        prisma.user.create({
            data: {
                name: "Aaron",
                password: "testing",
            }
        }),
        prisma.user.create({
            data: {
                name: "Elliot",
                password: "testing",
            }
        }),
        prisma.user.create({
            data: {
                name: "Tom",
                password: "testing",
            }
        }),
        prisma.user.create({
            data: {
                name: "Ben",
                password: "testing",
            }
        }),
        prisma.user.create({
            data: {
                name: "Amy",
                password: "testing",
            }
        }),
        prisma.user.create({
            data: {
                name: "Jack",
                password: "testing",
            }
        }),
        prisma.user.create({
            data: {
                name: "Neil",
                password: "testing",
            }
        }),
        prisma.user.create({
            data: {
                name: "Bob",
                password: "testing",
            }
        }),
        prisma.user.create({
            data: {
                name: "Maddie",
                password: "testing",
            }
        }),
        prisma.user.create({
            data: {
                name: "Cole",
                password: "testing",
            }
        }),
        prisma.user.create({
            data: {
                name: "Tony",
                password: "testing",
            }
        }),
    ])

    const projects = await prisma.$transaction([ // Transaction is a set of multiple operations (e.g. create, update, delete) that are executed in a single database transaction.
        prisma.project.create({
            data: {
                name: "Project 1",
                tasks: {
                    create: [
                        {
                        name: "Task 1",
                        description: "Task 1 description",
                        created: new Date(),
                        dueDate: new Date("2023-10-19"),
                        workHours: 10,
                        assignees: { connect: [{ name: "Neumann"}]}
                        },
                        {
                        name: "Task 2",
                        description: "Task 2 description",
                        created: new Date(),
                        dueDate: new Date("2023-05-20"),
                        workHours: 50,
                        assignees: { connect: [{ name: "Scott"}]}
                        }    
                        ]
                },
                users: { connect: [ { name: "Neumann" }, {name: "Scott"} ] }, // Connect to existing users, for example using their name
            },
            include: {  // Will include the tasks and users in the response (connected from other tables)
                tasks: true,
                users: true
            }
        }),
        prisma.project.create({
            data: {
                name: "Project 2",
                tasks: {
                    create: [ 
                        {
                        name: "Task 40",
                        description: "Task 1 description",
                        created: new Date(),
                        dueDate: new Date("2023-06-14"),
                        workHours: 10,
                        assignees: { connect: [{ name: "King" }] },
                        },
                        {
                        name: "Task 7",
                        description: "Task 7 description",
                        created: new Date(),
                        dueDate: new Date("2023-05-29"),
                        workHours: 50,
                        assignees: {connect: [{ name: "King"} , {name: "Aaron"}]},
                        },
                        {
                        name: "Task 14",
                        description: "Task 14 description",
                        created: new Date(),
                        dueDate: new Date("2023-05-16"),
                        workHours: 5,
                        assignees: {connect: [{ name: "King"}]},
                        },
                        ]
                    
                },
                users: { connect: [ { name: "King" }, {name: "Scott"}, {name: "Aaron"} ] },
            },
            include: { 
                tasks: true,
                users: true
            }
        }),
        prisma.project.create({
            data: {
                name: "Project 3",
                tasks: {
                    create: [ 
                        {
                        name: "Task 40",
                        description: "Task 40 description",
                        created: new Date(),
                        dueDate: new Date("2023-06-23"),
                        workHours: 100,
                        assignees: { connect: [{ name: "Elliot" }] },
                        },
                        ]        
                },
                users: { connect: [ { name: "Tom" }, {name: "Elliot"}, {name: "Rachael"}, {name: "Queen"} ] },
            },
            include: { 
                tasks: true,
                users: true
            }
        }),
        prisma.project.create({
            data: {
                name: "Project 4",
                tasks: {
                    create: [ 
                        {
                        name: "Task 51",
                        description: "Task 51 description",
                        created: new Date(),
                        dueDate: new Date("2023-06-28"),
                        workHours: 30,
                        assignees: { connect: [{ name: "Ben" }] },
                        },
                        {
                        name: "Task 52",
                        description: "Task 52 description",
                        created: new Date(),
                        dueDate: new Date("2023-07-03"),
                        workHours: 50,
                        assignees: {connect: [{ name: "Callum"} , {name: "Katie"}]},
                        },
                        {
                        name: "Task 53",
                        description: "Task 53 description",
                        created: new Date(),
                        dueDate: new Date("2023-05-08"),
                        workHours: 200,
                        assignees: {connect: [{ name: "Harry"} , {name: "Katie"} , {name: "Queen"} , {name: "Ben"}]},
                        },
                        {
                        name: "Task 54",
                        description: "Task 54 description",
                        created: new Date(),
                        dueDate: new Date("2023-08-26"),
                        workHours: 5,
                        assignees: {connect: [{ name: "Queen"}]},
                        },
                        {
                        name: "Task 55",
                        description: "Task 55 description",
                        created: new Date(),
                        dueDate: new Date("2023-10-11"),
                        workHours: 25,
                        assignees: {connect: [{ name: "Harry"}]},
                        },
                        {
                        name: "Task 56",
                        description: "Task 56 description",
                        created: new Date(),
                        dueDate: new Date("2023-12-14"),
                        workHours: 70,
                        assignees: {connect: [{ name: "Jack"} , {name: "Harry"}]},
                        },
                        ]
                    
                },
                users: { connect: [ { name: "Ben" }, {name: "Callum"}, {name: "Jack"} , {name: "Katie"} , {name: "Harry"} , {name: "Queen"} ]},
            },
            include: { 
                tasks: true,
                users: true
            }
        }),
        prisma.project.create({
            data: {
                name: "Project 5",
                tasks: {
                    create: [ 
                        {
                        name: "Task 41",
                        description: "Task 41 description",
                        created: new Date(),
                        dueDate: new Date("2023-05-21"),
                        workHours: 100,
                        assignees: { connect: [{ name: "Scott" } , {name: "Katie"}] },
                        },
                        ]        
                },
                users: { connect: [ { name: "Scott" }, {name: "Neumann"}, {name: "Katie"} ] },
            },
            include: { 
                tasks: true,
                users: true
            }
        }),
        prisma.project.create({
            data: {
                name: "Project 6",
                tasks: {
                    create: [ 
                        {
                        name: "Task 30",
                        description: "Task 30 description",
                        created: new Date(),
                        dueDate: new Date("2023-08-20"),
                        workHours: 50,
                        assignees: { connect: [{ name: "Amy"}] },
                        },
                        ]        
                },
                users: { connect: [ { name: "Amy"} ]},
            },
            include: { 
                tasks: true,
                users: true
            }
        }),
        prisma.project.create({
            data: {
                name: "Project 7",
                tasks: {
                    create: [ 
                        {
                        name: "Task 71",
                        description: "Task 71 description",
                        created: new Date(),
                        dueDate: new Date("2023-05-01"),
                        workHours: 65,
                        assignees: { connect: [{ name: "King" } , {name: "Queen"}] },
                        },
                        {
                        name: "Task 72",
                        description: "Task 72 description",
                        created: new Date(),
                        dueDate: new Date("2023-07-02"),
                        workHours: 200,
                        assignees: { connect: [{ name: "Jack"}] },
                        }
                    ]             
                },
                users: { connect: [ { name: "King" }, {name: "Queen"}, {name: "Jack"} ] },
            },
            include: { 
                tasks: true,
                users: true
            }
        }),
        prisma.project.create({
            data: {
                name: "Project 8",
                tasks: {
                    create: [ 
                        {
                        name: "Task 110",
                        description: "Task 110 description",
                        created: new Date(),
                        dueDate: new Date("2023-04-03"),
                        workHours: 30,
                        assignees: { connect: [{ name: "Elliot" }] },
                        },
                        {
                        name: "Task 111",
                        description: "Task 111 description",
                        created: new Date(),
                        dueDate: new Date("2023-05-23"),
                        workHours: 100,
                        assignees: {connect: [{ name: "Elliot"} , {name: "Vladimir"}]},
                        },
                        {
                        name: "Task 112",
                        description: "Task 112 description",
                        created: new Date(),
                        dueDate: new Date("2023-05-29"),
                        workHours: 45,
                        assignees: {connect: [{ name: "Rachael"} , {name: "Harry"} , {name: "Vladimir"}]},
                        },
                        {
                        name: "Task 113",
                        description: "Task 113 description",
                        created: new Date(),
                        dueDate: new Date("2023-09-24"),
                        workHours: 10,
                        assignees: {connect: [{ name: "Elliot"}]},
                        },
                        ]
                    
                },
                users: { connect: [ { name: "Rachael" }, {name: "Harry"}, {name: "Vladimir"} , {name: "Elliot"} ]},
            },
            include: { 
                tasks: true,
                users: true
            }
        }),
        prisma.project.create({
            data: {
                name: "Project 9",
                tasks: {
                    create: [ 
                        {
                        name: "Task 80",
                        description: "Task 80 description",
                        created: new Date(),
                        dueDate: new Date("2023-06-22"),
                        workHours: 30,
                        assignees: { connect: [{ name: "Tom" }] },
                        },
                        {
                        name: "Task 81",
                        description: "Task 81 description",
                        created: new Date(),
                        dueDate: new Date("2023-08-14"),
                        workHours: 50,
                        assignees: {connect: [{ name: "Amy"} , {name: "Queen"}]},
                        },
                        {
                        name: "Task 82",
                        description: "Task 82 description",
                        created: new Date(),
                        dueDate: new Date("2023-05-05"),
                        workHours: 90,
                        assignees: {connect: [{ name: "Tom"} ]},
                        },
                        ]
                    
                },
                users: { connect: [ { name: "Tom" }, {name: "Amy"}, {name: "Queen"} ]},
            },
            include: { 
                tasks: true,
                users: true
            }
        }),
        prisma.project.create({
            data: {
                name: "Project 10",
                tasks: {
                    create: [ 
                        {
                        name: "Task 90",
                        description: "Task 90 description",
                        created: new Date(),
                        dueDate: new Date("2023-05-20"),
                        workHours: 55,
                        assignees: { connect: [{ name: "Vladimir" }] },
                        },
                        {
                        name: "Task 91",
                        description: "Task 91 description",
                        created: new Date(),
                        dueDate: new Date("2023-03-29"),
                        workHours: 50,
                        assignees: {connect: [{ name: "Katie"} , {name: "Vladimir"}]},
                        },
                        {
                        name: "Task 92",
                        description: "Task 92 description",
                        created: new Date(),
                        dueDate: new Date("2023-06-02"),
                        workHours: 100,
                        assignees: {connect: [{ name: "Ben"} , {name: "Neumann"}]},
                        },
                        {
                        name: "Task 93",
                        description: "Task 93 description",
                        created: new Date(),
                        dueDate: new Date("2023-06-15"),
                        workHours: 200,
                        assignees: {connect: [{ name: "Amy"} , {name: "Katie"} , {name: "Ben"} , {name: "Harry"} , {name: "Vladimir"}]},
                        },
                        ]
                    
                },
                users: { connect: [ { name: "Neumann" }, {name: "Harry"}, {name: "Vladimir"} , {name: "Amy"} , {name: "Katie"} , {name: "Ben"} ]},
            },
            include: { 
                tasks: true,
                users: true
            }
        }),
        
    ])

    

    const tasks = await prisma.$transaction([
        prisma.task.create({
            data: {
                name: "Task 5",
                description: "Task 5 description",
                created: new Date(),
                dueDate: new Date("2023-05-19"),
                workHours: 50,
                assignees: { connect: [{ name: "Neumann" }] },
            },
            include: {
                assignees: true
            }
        }),
        prisma.task.create({
            data: {
                name: "Task Testing",
                description: "Task description",
                created: new Date(),
                dueDate: new Date("2023-07-02"),
                workHours: 20,
                assignees: { connect: [{ name: "Amy" }] },
            },
            include: {
                assignees: true
            }
        }),
        prisma.task.create({
            data: {
                name: "Task 99",
                description: "Task description",
                created: new Date(),
                dueDate: new Date("2023-07-04"),
                workHours: 100,
                assignees: { connect: [{ name: "Vladimir" }] },
            },
            include: {
                assignees: true
            }
        }),
        prisma.task.create({
            data: {
                name: "Task 50",
                description: "Task description",
                created: new Date(),
                dueDate: new Date("2023-05-12"),
                workHours: 65,
                assignees: { connect: [{ name: "Tom" }] },
            },
            include: {
                assignees: true
            }
        }),
        prisma.task.create({
            data: {
                name: "Task 10",
                description: "Task 10 description",
                created: new Date(),
                dueDate: new Date("2023-06-14"),
                workHours: 40,
                assignees: { connect: [{ name: "Queen" }] },
            },
            include: {
                assignees: true
            }
        }),
        prisma.task.create({
            data: {
                name: "Task 200",
                description: "Task 200 description",
                created: new Date(),
                dueDate: new Date("2023-06-21"),
                workHours: 20,
                assignees: { connect: [{ name: "Tony" }] },
            },
            include: {
                assignees: true
            }
        }),
        prisma.task.create({
            data: {
                name: "Quick Task",
                description: "Task description",
                created: new Date(),
                dueDate: new Date("2023-07-10"),
                workHours: 2,
                assignees: { connect: [{ name: "Bob" }] },
            },
            include: {
                assignees: true
            }
        }),
        prisma.task.create({
            data: {
                name: "Task 1000",
                description: "Task description",
                created: new Date(),
                dueDate: new Date("2023-05-24"),
                workHours: 200,
                assignees: { connect: [{ name: "Bob" } , {name: "Amy"} , {name: "Maddie"}] },
            },
            include: {
                assignees: true
            }
        }),
        prisma.task.create({
            data: {
                name: "Task 500",
                description: "Task description",
                created: new Date(),
                dueDate: new Date("2023-06-17"),
                workHours: 100,
                assignees: { connect: [{ name: "Jack" } , {name: "Cole"}] },
            },
            include: {
                assignees: true
            }
        }),
        prisma.task.create({
            data: {
                name: "Task 250",
                description: "Task description",
                created: new Date(),
                dueDate: new Date("2023-06-14"),
                workHours: 25,
                assignees: { connect: [{ name: "King" }] },
            },
            include: {
                assignees: true
            }
        }),
        prisma.task.create({
            data: {
                name: "Task 125",
                description: "Task description",
                created: new Date(),
                dueDate: new Date("2023-11-19"),
                workHours: 55,
                assignees: { connect: [{ name: "Scott" } , {name: "Katie"} , {name: "Amy"}] },
            },
            include: {
                assignees: true
            }
        }),
        prisma.task.create({
            data: {
                name: "Task 225",
                description: "Task description",
                created: new Date(),
                dueDate: new Date("2023-11-04"),
                workHours: 2,
                assignees: { connect: [{ name: "Cole"} ]},
            },
            include: {
                assignees: true
            }
        }),
        prisma.task.create({
            data: {
                name: "Task 653",
                description: "Task description",
                created: new Date(),
                dueDate: new Date("2023-11-19"),
                workHours: 100,
                assignees: { connect: [{ name: "King" } , {name: "Queen"}] },
            },
            include: {
                assignees: true
            }
        }),
        prisma.task.create({
            data: {
                name: "Task 0000",
                description: "Task description",
                created: new Date(),
                dueDate: new Date("2023-05-30"),
                workHours: 50,
                assignees: { connect: [{ name: "Cole" } , {name: "Jack"} , {name: "Tom"}] },
            },
            include: {
                assignees: true
            }
        }),
        prisma.task.create({
            data: {
                name: "Task 15",
                description: "Task description",
                created: new Date(),
                dueDate: new Date("2023-08-16"),
                workHours: 25,
                assignees: { connect: [{ name: "Katie" }] },
            },
            include: {
                assignees: true
            }
        }),
        
    
    ])

    // Run all the transactions
    return {
        clear,
        projects,
        users,
        tasks
    }
})