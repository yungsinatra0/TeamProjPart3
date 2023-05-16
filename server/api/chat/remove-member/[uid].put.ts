import prisma from "@/prisma"

export default defineEventHandler(async event => {
	const body = await readBody(event)
	const senderId = body.sender as string

	const result = await prisma.chat.update({
		where: { uid: +(event.context.params!.uid as string) },
		data: { users : { disconnect: { uid: senderId} } },
	})

	if (!result) {
		return { status: 404, body: "Chat not found" }
	}

	return { status: 200, body: result}
})