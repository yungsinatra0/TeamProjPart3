import prisma from "@/prisma"

export default defineEventHandler(async event => {
	const body = await readBody(event)
    const newMessage = body.message as string

	const result = await prisma.message.update({
		where: { uid: +(event.context.params!.uid as string) },
		data: { content: newMessage },
	})

	if (result === null) return { status: 500, body: "Error updating message."}

	return { status: 200, body: result}
})