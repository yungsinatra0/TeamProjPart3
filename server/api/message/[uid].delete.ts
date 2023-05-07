import prisma from "@/prisma"

export default defineEventHandler( event => {
    return prisma.message.delete({
        where: { uid: +(event.context.params.uid as string) }
    })
})
