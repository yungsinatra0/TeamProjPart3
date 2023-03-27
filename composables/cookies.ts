import { User } from ".prisma/client";

export function createCookie(user: User) {
    const age = 60 * 60 * 24 // 24 hours
    document.cookie = `uid=${user.uid}; path=/; Max-Age=${age}` // Add expiration maybe (default until when browser is closed)?
}

export function deleteCookie() {
    document.cookie = `uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    navigateTo('/login')
}