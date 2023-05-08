import prisma from "@/prisma"

export default defineEventHandler(async event => {

    const result = await prisma.user.findUnique({
        where: { uid: event.context.params.uid as string }
    })


    return { status: 200, body: result}
})
