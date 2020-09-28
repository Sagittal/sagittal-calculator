import {
    computeIntegerDecimalFromIntegerMonzo,
    computeNumFromMonzo,
    Direction,
    IntegerDecimal,
    IntegerMonzo,
    IntegerNumerator,
    Max,
    RationalMonzo,
    sort,
    Two3FreeClass,
} from "../../../../../../general"
import { computeN2D3P9 } from "../../n2d3p9"
import { N2D3P9 } from "../../types"

const computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9 = (
    numeratorMonzosToCheck: Array<IntegerMonzo<{ direction: Direction.SUPER, rough: 5 }>>,
    maxN2D3P9: Max<N2D3P9>,
): Max<IntegerNumerator> => {
    const filteredNumeratorMonzosToCheck =
        numeratorMonzosToCheck.filter((numeratorMonzoToCheck: IntegerMonzo): boolean => {
            return computeN2D3P9(
                computeNumFromMonzo(numeratorMonzoToCheck as RationalMonzo) as Two3FreeClass,
            ) < maxN2D3P9
        })

    const integerNumeratorsToCheck: IntegerNumerator[] = filteredNumeratorMonzosToCheck
        .map(computeIntegerDecimalFromIntegerMonzo) as IntegerDecimal[] as IntegerNumerator[]
    sort(integerNumeratorsToCheck, { descending: true })

    return integerNumeratorsToCheck[ 0 ] as Max<IntegerNumerator>
}

export {
    computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9,
}
