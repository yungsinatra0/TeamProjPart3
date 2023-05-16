import prisma from "@/prisma"

export default defineEventHandler(async event => {
	const body = await readBody(event)
	const senderIds = body.sender as string[]

	if (senderIds.length === 0) return { status: 400, body: "Not enough senders provided."}
	
	const result = await prisma.chat.update({
		where: { uid: +(event.context.params!.uid as string) },
		data: { users : { connect: senderIds.map((id: string) => ({ uid: id })) } },
	})

	if (result === null) return { status: 500, body: "Error adding member."}

	return { status: 200, body: result}
})