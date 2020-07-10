const computeDeepDistinct = array => {
    return Array.from(new Set(array.map(JSON.stringify))).map((element: any) => JSON.parse(element))
}

export {
    computeDeepDistinct,
}
