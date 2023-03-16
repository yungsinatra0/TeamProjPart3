import prisma from "@/prisma"

export default defineEventHandler( event => {
    return prisma.task.findUnique({
        where: { uid: event.context.params.uid as string }
    })
})
