import prisma from "@/prisma"

export default defineEventHandler( event => {
    return prisma.project.findUnique({
       where: { uid: +(event.context.params.uid as string) },
        include: {
            tasks: true,
            users: {
                select: {
                    uid: true,
                    name: true,
                    password: false,
                }
            }
        }
    })
})