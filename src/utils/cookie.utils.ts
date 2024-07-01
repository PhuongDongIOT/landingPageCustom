const getCookies = (req: Request): any => {
    const cookie = req.headers.get('cookie')
    const cookies = new Map()
    if (!cookie) {
        return cookies
    }
    const pairs = cookie.split(/;\s+/)
    for (const pair of pairs) {
        const parts = pair.trim().split('=')
        cookies.set(parts[0], parts[1])
    }
    return cookies
}

export {
    getCookies
}