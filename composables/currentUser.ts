export default function() {
    const uid = useCookie("uid")
    return useFetch(`/api/user/${uid.value}`)
}
