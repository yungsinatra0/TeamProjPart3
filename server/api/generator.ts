import prisma from "@/prisma"

export default defineEventHandler(async event => {
    const query = getQuery(event) // If there is a query string, it will be parsed and returned as an object.
    
    const projects = await prisma.$transaction([ // Transaction is a set of multiple operations (e.g. create, update, delete) that are executed in a single database transaction.
        prisma.project.create({
            data: {
                name: "Project 1",
                tasks: {
                    create: [ { 
                        name: "Task 1",
                        description: "Task 1 description",
                        created: new Date(),
                        workHours: 10,
                        assignees: { connect: [{ name: "Neumann" }] },
                    }] // Create additional nested data, like tasks
                },
                users: { connect: [ { name: "Neumann" } ] }, // Connect to existing users, for example using their name
            },
            include: {  // Will include the tasks and users in the response (connected from other tables)
                tasks: true,
                users: true
            }
        })
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
    ])

    const tasks = await prisma.$transaction([
        prisma.task.create({
            data: {
                name: "Task 2",
                description: "Task 2 description",
                created: new Date(),
                workHours: 20,
                assignees: { connect: [{ name: "Vladimir" }] }
            },
            include: {
                assignees: true
            }
        }),
    ])

    // Run all the transactions
    return {
        projects,
        users,
        tasks
    }
})