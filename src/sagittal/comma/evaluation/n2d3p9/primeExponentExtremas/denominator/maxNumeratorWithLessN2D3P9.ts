import {
    computeIntegerFromMonzo,
    Direction, Integer,
    Max,
    Monzo,
    Numerator,
    sort,
    TwoThreeFreeClass,
} from "../../../../../../general"
import { computeN2D3P9 } from "../../n2d3p9"
import { N2D3P9 } from "../../types"

const computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9 = (
    numeratorMonzosToCheck: Array<Monzo<{ integer: true, direction: Direction.SUPER, rough: 5 }>>,
    maxN2D3P9: Max<N2D3P9>,
): Max<Numerator> => {
    const filteredNumeratorMonzosToCheck = numeratorMonzosToCheck.filter((numeratorMonzoToCheck: Monzo): boolean => {
        return computeN2D3P9({ monzo: numeratorMonzoToCheck } as TwoThreeFreeClass) < maxN2D3P9
    })

    const numeratorsToCheck: Numerator[] = filteredNumeratorMonzosToCheck
        .map(computeIntegerFromMonzo) as Integer[] as Numerator[]
    sort(numeratorsToCheck, { descending: true })

    return numeratorsToCheck[ 0 ] as Max<Numerator>
}

export {
    computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9,
}
