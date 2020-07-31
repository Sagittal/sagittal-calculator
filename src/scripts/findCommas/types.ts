import { ApotomeSlope, Cents, Copfr, Monzo, Prime, PrimeExponent, Sopfr } from "../../general"

interface ComputeCommasOptions extends ComputeCommasFromFiveSlicedMonzoOptions {
    fiveSlicedMonzo?: Monzo<5>,
    maximumFiveRoughCopfr: Copfr<5>,
    maximumFiveRoughSopfr: Sopfr<5>,
    maximumPrimeLimit: Prime,
    sortKey: string,
}

type ComputeCommasFromFiveSlicedMonzoOptions = Partial<{
    lowerBound: Cents,
    maximumAbsoluteThreeExponent: PrimeExponent,
    maximumApotomeSlope: ApotomeSlope,
    upperBound: Cents,
}>

type ComputeFiveSlicedMonzosToCheckOptions = Partial<{
    maximumFiveRoughCopfr: Copfr<5>,
    maximumFiveRoughSopfr: Sopfr<5>,
    maximumPrimeLimit: Prime,
}>

export {
    ComputeCommasOptions,
    ComputeCommasFromFiveSlicedMonzoOptions,
    ComputeFiveSlicedMonzosToCheckOptions,
}
