import prisma from "@/prisma"

export default defineEventHandler(async event => {
	const body = await readBody(event)
    const newMessage = body.message as string

	// Add the new message to the chat.
	// There is no functionality support to directly push a new message to the chat using Prisma.
	// As such, we have to create a new message and then connect that to the chat.



	const result = await prisma.message.update({
		where: { uid: +(event.context.params.uid as string) },
		data: { content: newMessage },
	})

	return { status: 200, body: result}
})