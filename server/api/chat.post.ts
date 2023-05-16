import prisma from "@/prisma"

export default defineEventHandler(async event => {
	const body = await readBody(event)
	const senderIds = body.sender as string[]

	if (senderIds.length === 0 || senderIds.length == 1) return { status: 400, body: "Not enough senders provided."}

	const result =  await prisma.chat.create({
		data: {
            users: { 
				connect: senderIds.map((id: string) => ({ uid: id }))
			},
		},
	})

	if (result === null) return { status: 500, body: "Error creating chat."}

	return { status: 201, body: result}
})