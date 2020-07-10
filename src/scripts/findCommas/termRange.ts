import {computePlusOrMinusRange} from "../../utilities/plusOrMinusRange"

const computeTermRange = (prime, {maximumFiveRoughSopfr = Infinity, maximumFiveRoughCopfr = Infinity} = {}) => {
    if (maximumFiveRoughSopfr === Infinity && maximumFiveRoughCopfr === Infinity) {
        throw new Error("The range must be limited somehow.")
    }

    const maximumPrimeCount = Math.floor(maximumFiveRoughSopfr / prime)

    return computePlusOrMinusRange(Math.min(maximumPrimeCount, maximumFiveRoughCopfr))
}

export {
    computeTermRange,
}
