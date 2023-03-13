import prisma from "@/prisma"

export default defineEventHandler(async event => {
	const body = await readBody(event)
	
	const user = await prisma.user.findUnique({
		where: { name: body.name as string },  // Find user by their email address.
	})

	if (user === null) return null
	if (user!.password !== body.password as string) return null

    return user // Returns the user's data as an object.
})
