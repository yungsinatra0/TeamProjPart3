import prisma from "@/prisma"
import { User } from "@prisma/client"

export default defineEventHandler(async event => {
    const query = getQuery(event) // If there is a query string, it will be parsed and returned as an object.
    
    // Returns all chats in the database.
    return await prisma.chat.findMany({
        where: {
            // Find chats where the user is a member.
            users: {
                some: {
                    uid: query.uid as User["uid"]
                }
            }
        },
        include: {
            users: true,
            messages: true
        }
    })
})