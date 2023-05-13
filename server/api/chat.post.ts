import prisma from "@/prisma"

export default defineEventHandler(async event => {
	const body = await readBody(event)
	const senderIds = body.sender as string[]

	const result =  await prisma.chat.create({
		data: {
            users: { 
				connect: senderIds.map((id: string) => ({ uid: id }))
			},
		},
	})

	return { status: 201, body: result}
})