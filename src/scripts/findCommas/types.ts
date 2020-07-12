import { Cents, Prime } from "../../utilities/types"
import { ApotomeSlope } from "../../notations/ji/types"
import { Copfr, Monzo, PrimeExponent, Sopfr } from "../../utilities/comma/types"

interface ComputeCommasOptions extends ComputeCommasFromFiveSlicedMonzoOptions {
    maximumFiveRoughSopfr: Sopfr<5>,
    maximumFiveRoughCopfr: Copfr<5>,
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

interface ComputeFiveSlicedMonzosToCheckParameters {
    maximumPrimeLimit?: Prime,
    maximumFiveRoughSopfr?: Sopfr<5>,
    maximumFiveRoughCopfr?: Copfr<5>,
}

export {
    ComputeCommasOptions,
    ComputeCommasFromFiveSlicedMonzoOptions,
    ComputeFiveSlicedMonzosToCheckParameters,
}
