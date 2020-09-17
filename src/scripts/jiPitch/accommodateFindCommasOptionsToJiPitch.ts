import { Abs, abs, Exponent, Integer, Max, Prime, shallowClone, THREE_PRIME_INDEX } from "../../general"
import { ApotomeSlope, JiPitchAnalysis, N2D3P9 } from "../../sagittal"
import { FindCommasOptions } from "./types"

const accommodateFindCommasOptionsToJiPitch = (
    jiPitchAnalysis: JiPitchAnalysis,
    findCommasOptions: FindCommasOptions,
): FindCommasOptions => {
    const accommodatedFindCommasOptions: FindCommasOptions = shallowClone(findCommasOptions)

    const aas = abs(jiPitchAnalysis.apotomeSlope)
    if (aas > findCommasOptions.maxAas) {
        accommodatedFindCommasOptions.maxAas = aas as Max<Abs<ApotomeSlope>>
    }

    const ate = abs(jiPitchAnalysis.monzo[ THREE_PRIME_INDEX ])
    if (ate > findCommasOptions.maxAte) {
        accommodatedFindCommasOptions.maxAte = ate as Max<Abs<3 & Integer & Exponent<Prime>>>
    }

    const n2d3p9 = jiPitchAnalysis.n2d3p9
    if (n2d3p9 > findCommasOptions.maxN2D3P9) {
        accommodatedFindCommasOptions.maxN2D3P9 = n2d3p9 as Max<N2D3P9>
    }

    return accommodatedFindCommasOptions
}

export {
    accommodateFindCommasOptionsToJiPitch,
}
