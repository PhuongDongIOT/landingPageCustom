const checkIsEmtyArray = (value: any) => {
    if (value && Array.isArray(value) && value.length > 0) return true
    return false
}

export {
    checkIsEmtyArray
}