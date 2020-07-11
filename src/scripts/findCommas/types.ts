import { Cents, Prime } from "../../utilities/types"
import { ApotomeSlope } from "../../notations/ji/types"
import { Monzo, PrimeExponent } from "../../utilities/comma/types"

interface ComputeCommasOptions extends ComputeCommasFromFiveSlicedMonzoOptions {
    maximumFiveRoughSopfr: number,
    maximumFiveRoughCopfr: number,
    maximumPrimeLimit: Prime,
    fiveSlicedMonzo?: Monzo,
    sortKey: string,
}

interface ComputeCommasFromFiveSlicedMonzoOptions {
    lowerBound?: Cents,
    upperBound?: Cents,
    maximumAbsoluteThreeExponent?: PrimeExponent,
    maximumApotomeSlope?: ApotomeSlope,
}

export {
    ComputeCommasOptions,
    ComputeCommasFromFiveSlicedMonzoOptions,
}
