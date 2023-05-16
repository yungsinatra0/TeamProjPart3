import prisma from "@/prisma"

export default defineEventHandler(async event => {
    const result = await prisma.task.findUnique({
        where: { uid: +(event.context.params!.uid as string) }
    })

    if (!result) return { status: 404, body: { message: "Task not found" } }

    return { status: 200, body: result }
})
