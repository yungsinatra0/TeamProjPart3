import prisma from "@/prisma"

export default defineEventHandler(async event => {
    const result = await prisma.chat.findUnique({
        where: { uid: +(event.context.params!.uid as string) },
        include: {
            users: true,
            messages: {
                include: {
                    sender: {
                        select: {
                            name: true,
                        },
                    },
                },
            },
        },
    })

    if (!result) return { status: 404, body: { message: "Chat not found" } }

    return { status: 200, body: result }
})
