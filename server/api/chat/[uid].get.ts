import prisma from "@/prisma"

export default defineEventHandler(event => {
    return prisma.chat.findUnique({
        where: { uid: +(event.context.params.uid as string) },
        include: {
            users: true,
            messages: true
        }
    })
})
