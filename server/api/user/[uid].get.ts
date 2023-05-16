import prisma from "@/prisma"

export default defineEventHandler(async event => {

    const result = await prisma.user.findUnique({
        where: { uid: event.context.params!.uid as string },
        select: {
            uid: true,
            name: true,
            password: false,
        }
    })

    if (result === null) return { status: 404, body: "User not found."}

    return { status: 200, body: result}
})
