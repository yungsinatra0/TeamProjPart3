import prisma from "@/prisma"

export default defineEventHandler(async event => {
	const body = await readBody(event)
	const user = await prisma.user.findUnique({
		where: { email: body.email as string },  // Find user by their email address.
        select : {}
	})

	// return await prisma.user.findUnique({
	// 	where: { uid: user!.uid }
	// })

    return user || null // Returns the user's data as an object.
})
