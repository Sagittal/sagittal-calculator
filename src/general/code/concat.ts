const concat = <T extends string | unknown[]>(baseArray: T, concattedArray: T): T => {
    return baseArray.concat(concattedArray as string & unknown[]) as T
}

export {
    concat,
}
