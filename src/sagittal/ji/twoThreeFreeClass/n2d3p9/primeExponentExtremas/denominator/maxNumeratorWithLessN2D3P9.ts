import {
    computeIntegerFromIntegerMonzo,
    Direction,
    Integer,
    Max,
    RationalMonzo,
    RationalNumerator,
    sort,
    TwoThreeFreeClass,
} from "../../../../../../general"
import { computeN2D3P9 } from "../../n2d3p9"
import { N2D3P9 } from "../../types"

const computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9 = (
    numeratorMonzosToCheck:
        Array<RationalMonzo<{ irrational: false, integer: true, direction: Direction.SUPER, rough: 5 }>>,
    maxN2D3P9: Max<N2D3P9>,
): Max<RationalNumerator> => {
    const filteredNumeratorMonzosToCheck =
        numeratorMonzosToCheck.filter((numeratorMonzoToCheck: RationalMonzo): boolean => {
            return computeN2D3P9({ monzo: numeratorMonzoToCheck } as TwoThreeFreeClass) < maxN2D3P9
        })

    const numeratorsToCheck: RationalNumerator[] = filteredNumeratorMonzosToCheck
        .map(computeIntegerFromIntegerMonzo) as Integer[] as RationalNumerator[]
    sort(numeratorsToCheck, { descending: true })

    return numeratorsToCheck[ 0 ] as Max<RationalNumerator>
}

export {
    computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9,
}
