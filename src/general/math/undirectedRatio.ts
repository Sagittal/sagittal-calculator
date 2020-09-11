import { Denominator, Direction, Numerator, NumericTypeParameters, Ratio } from "../math"

const computeUndirectedRatio = <T extends NumericTypeParameters>(
    ratio: Ratio<T>
): Ratio<T & { direction: Direction.UNDIRECTED }> => {
    const [numerator, denominator]: [Numerator, Denominator] = ratio

    return numerator > denominator ?
        ratio as Ratio<T & { direction: Direction.UNDIRECTED }> :
        [
            denominator as number as Numerator, 
            numerator as number as Denominator
        ] as Ratio<T & { direction: Direction.UNDIRECTED }>
}

export {
    computeUndirectedRatio,
}
