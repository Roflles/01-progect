export const updateObjectInArray = (items, itemId, objPropNamem, newObjProps) => {
    return items.map(u => {
        if (u[objPropNamem] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}
