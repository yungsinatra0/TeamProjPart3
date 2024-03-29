import prisma from "@/prisma"

export default defineEventHandler(async event => {
	const body = await readBody(event)
    const newMessage = body.message as string
	const senderId = body.sender as string

	// Add the new message to the chat.
	// There is no functionality support to directly push a new message to the chat using Prisma for MySQL.
	// As such, we have to create a new message and then connect that to the chat.

	const message = await prisma.message.create({
		data: {
			chat: { connect: { uid: +(event.context.params!.uid as string) } },
			content: newMessage,
			sender: { connect: { uid: senderId } },
		}
	})

	const result = await prisma.chat.update({
		where: { uid: +(event.context.params!.uid as string) },
		data: { messages: { connect: { uid: message.uid} } },
	})

	if (result === null) return { status: 500, body: "Error updating chat."}

	return { status: 200, body: result}
})