import { computeIntegerFromMonzo, Max, Monzo, Numerator, sort } from "../../../../../../general"
import { computeN2D3P9 } from "../../n2d3p9"
import { N2D3P9 } from "../../types"

const computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9 = (numeratorMonzosToCheck: Monzo[], maxN2D3P9: Max<N2D3P9>) => {
    const filteredNumeratorMonzosToCheck = numeratorMonzosToCheck.filter(numeratorMonzoToCheck => {
        return computeN2D3P9(numeratorMonzoToCheck) < maxN2D3P9
    })

    const numeratorsToCheck: Numerator[] = filteredNumeratorMonzosToCheck.map(computeIntegerFromMonzo) as Numerator[]
    sort(numeratorsToCheck, { descending: true })

    return numeratorsToCheck[ 0 ] as Max<Numerator>
}

export {
    computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9,
}
