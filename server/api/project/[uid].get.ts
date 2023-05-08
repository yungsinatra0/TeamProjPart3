import prisma from "@/prisma"

export default defineEventHandler(async event => {
    return await prisma.project.findUnique({
        where: { uid: +(event.context.params.uid as string) }
    })
})


