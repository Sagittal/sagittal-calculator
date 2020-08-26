import { Denominator, Numerator, Ratio, UndirectedRatio } from "../math"

const computeUndirectedRatio = (ratio: Ratio): UndirectedRatio => {
    const [numerator, denominator]: [Numerator, Denominator] = ratio

    return numerator > denominator ?
        ratio as UndirectedRatio :
        [denominator as number as Numerator, numerator as number as Denominator] as UndirectedRatio
}

export {
    computeUndirectedRatio,
}
