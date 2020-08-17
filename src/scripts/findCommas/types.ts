import { ApotomeSlope, Cents, Copfr, Exponent, Monzo, N2D3P9, Prime, Sopfr } from "../../general"

interface ComputeCommasOptions extends ComputeCommasFromFiveSlicedMonzoOptions, MaximumOptions {
    fiveSlicedMonzo?: Monzo<5>,
    sortKey: string,
}

type ComputeCommasFromFiveSlicedMonzoOptions = Partial<{
    lowerBound: Cents,
    maximumAbsoluteThreeExponent: Exponent<Prime>,
    maximumApotomeSlope: ApotomeSlope,
    upperBound: Cents,
    maximumN2D3P9: N2D3P9,
}>

type ComputeFiveSlicedMonzosToCheckOptions = Partial<MaximumOptions>

interface MaximumOptions {
    maximumFiveRoughCopfr: Copfr<5>,
    maximumFiveRoughSopfr: Sopfr<5>,
    maximumPrimeLimit: Prime,
}

export {
    ComputeCommasOptions,
    ComputeCommasFromFiveSlicedMonzoOptions,
    ComputeFiveSlicedMonzosToCheckOptions,
}
