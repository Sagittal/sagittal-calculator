import { Cents, Prime } from "../../utilities/types"
import { ApotomeSlope } from "../../notations/ji/types"
import { FiveRoughCopfr, FiveRoughSopfr, Monzo, PrimeExponent } from "../../utilities/comma/types"

interface ComputeCommasOptions extends ComputeCommasFromFiveSlicedMonzoOptions {
    maximumFiveRoughSopfr: FiveRoughSopfr,
    maximumFiveRoughCopfr: FiveRoughCopfr,
    maximumPrimeLimit: Prime,
    fiveSlicedMonzo?: Monzo<5>,
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
