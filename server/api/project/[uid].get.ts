import prisma from "@/prisma"

export default defineEventHandler( async event => {
    const result = await prisma.project.findUnique({
       where: { uid: +(event.context.params!.uid as string) },
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

    if (!result) return { status: 404, body: { message: "Project not found" } }

    return { status: 200, body: result }
})