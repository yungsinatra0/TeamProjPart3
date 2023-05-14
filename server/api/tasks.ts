import prisma from "@/prisma"

export default defineEventHandler(async event => {
    const query = getQuery(event) // If there is a query string, it will be parsed and returned as an object.
    
    // Returns all tasks in the database.
    return await prisma.task.findMany({
        //where: {},
        include: {
            project: true,
            assignees: {
                select: {
                    uid: true,
                    name: true,
                    password: false,
                }
            }
        }
    })
})