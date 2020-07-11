const computeDeepDistinct = (array: unknown[]) => {
    return Array.from(new Set(array.map(element => JSON.stringify(element)))).map((element: any) => JSON.parse(element))
}

export {
    computeDeepDistinct,
}
