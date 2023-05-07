import prisma from "@/prisma"

export default defineEventHandler(async event => {
	const body = await readBody(event)
	const senderId = body.sender as string

	const result = await prisma.chat.update({
		where: { uid: +(event.context.params.id as string) },
		data: { users : { disconnect: { uid: senderId} } },
	})

	return { status: 200, body: result}
})