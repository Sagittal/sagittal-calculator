import { Denominator, Numerator, Ratio, UndirectedRatio } from "../math"

const computeUndirectedRatio = (ratio: Ratio): UndirectedRatio => {
    const [numerator, denominator]: [Numerator, Denominator] = ratio

    return numerator > denominator ?
        ratio as UndirectedRatio :
        [denominator as unknown as Numerator, numerator as unknown as Denominator] as UndirectedRatio
}

export {
    computeUndirectedRatio,
}
