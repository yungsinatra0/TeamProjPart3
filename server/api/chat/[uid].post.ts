import prisma from "@/prisma"

export default defineEventHandler(async event => {
	const body = await readBody(event)

	const result =  await prisma.chat.create({
		data: {
            users: { connect: { uid: body.uid as string } },
		},
	})

	return { status: 201, body: result}
})
