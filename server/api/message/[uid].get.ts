import prisma from "@/prisma"

export default defineEventHandler(async event => {
    return await prisma.message.findUnique({
        where: { uid: +(event.context.params.uid as string) }
    })
})
