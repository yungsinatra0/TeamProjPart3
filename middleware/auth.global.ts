const publicRoutes = ["/login", "/register"] // Pages accessible to the public

export default defineNuxtRouteMiddleware(async (to, from) => {
	const { data: user } = await getCurrentUser()
	const isAuth = user.value !== null // Check if user is authenticated

	const isPublic = (route: typeof to) =>
		publicRoutes.includes(route.path ?? "") // Check if page user tries to access is public

	if (!isPublic(to) && !isAuth)
		return navigateTo("/login") // If user is not authenticated and tries to access a private page, redirect to login page
})
