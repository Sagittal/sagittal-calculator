import { computePlusOrMinusRange } from "../../utilities/plusOrMinusRange"
import { Prime } from "../../utilities/types"

const computeTermRange = (prime: Prime, { maximumFiveRoughSopfr = Infinity, maximumFiveRoughCopfr = Infinity } = {}): number[] => {
    if (maximumFiveRoughSopfr === Infinity && maximumFiveRoughCopfr === Infinity) {
        throw new Error("The range must be limited somehow.")
    }

    const maximumPrimeCount: number = Math.floor(maximumFiveRoughSopfr / prime)

    return computePlusOrMinusRange(Math.min(maximumPrimeCount, maximumFiveRoughCopfr))
}

export {
    computeTermRange,
}
