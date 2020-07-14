const computeDeepDistinct = (array: unknown[]) =>
    Array.from(new Set(array.map(element => JSON.stringify(element)))).map((element: string) => JSON.parse(element))

export {
    computeDeepDistinct,
}
