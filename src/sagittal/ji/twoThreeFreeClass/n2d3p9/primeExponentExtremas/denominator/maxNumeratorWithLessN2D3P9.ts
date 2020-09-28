import {
    computeIntegerFromIntegerMonzo,
    Direction,
    Integer,
    IntegerMonzo,
    IntegerNumerator,
    Max,
    RationalMonzo,
    sort,
    TwoThreeFreeClass,
} from "../../../../../../general"
import { computeN2D3P9 } from "../../n2d3p9"
import { N2D3P9 } from "../../types"

const computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9 = (
    numeratorMonzosToCheck: Array<IntegerMonzo<{ direction: Direction.SUPER, rough: 5 }>>,
    maxN2D3P9: Max<N2D3P9>,
): Max<IntegerNumerator> => {
    const filteredNumeratorMonzosToCheck =
        numeratorMonzosToCheck.filter((numeratorMonzoToCheck: RationalMonzo): boolean => {
            return computeN2D3P9({ monzo: numeratorMonzoToCheck } as TwoThreeFreeClass) < maxN2D3P9
        })

    const numeratorsToCheck: IntegerNumerator[] = filteredNumeratorMonzosToCheck
        .map(computeIntegerFromIntegerMonzo) as Integer[] as IntegerNumerator[]
    sort(numeratorsToCheck, { descending: true })

    return numeratorsToCheck[ 0 ] as Max<IntegerNumerator>
}

export {
    computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9,
}
