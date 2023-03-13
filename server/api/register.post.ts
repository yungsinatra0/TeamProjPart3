import prisma from "@/prisma"

export default defineEventHandler(async event => {
	const body = await readBody(event)

	const result =  await prisma.user.create({
		data: {
			name: body.name as string,
			password: body.password as string,
		},
	})

	return result.uid
})
