import prisma from "@/prisma"

export default defineEventHandler(async event => {
    const query = getQuery(event) // If there is a query string, it will be parsed and returned as an object.
    
    // Returns all users in the database.
    return await prisma.user.findMany({
        //where: {},
        //include: {}
    })
})