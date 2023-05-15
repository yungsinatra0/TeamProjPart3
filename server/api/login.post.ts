import prisma from "@/prisma"

export default defineEventHandler(async event => {
	const body = await readBody(event)
	
	const user = await prisma.user.findUnique({
		where: { name: body.name as string },  // Find user by their email address.
	})

	if (user === null) return {response: 404, body: "User not found"}
	if (user!.password !== body.password as string) return {response: 401, body: "Incorrect password"}

	const { password, ...userData } = user // Exclude the 'password' field from the returned data

    return {response: 200, body: userData} // Returns the user's data as an object (without the password).
})
