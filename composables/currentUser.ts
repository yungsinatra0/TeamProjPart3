export function getCurrentUser() {
    const uid = useCookie("uid")
    return useFetch(`/api/user/${uid.value}`)
}
