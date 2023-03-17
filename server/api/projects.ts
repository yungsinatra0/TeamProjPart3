import prisma from "@/prisma"

export default defineEventHandler(async event => {
    const query = getQuery(event) // If there is a query string, it will be parsed and returned as an object.
    
    // Returns all projects in the database.
    return await prisma.project.findMany({
        //where: {},
        // include: {}
    })
})