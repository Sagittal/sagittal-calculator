import { Abs, abs, Exponent, Integer, Max, Prime, shallowClone, THREE_PRIME_INDEX } from "../../../general"
import { ApotomeSlope, JiPitchAnalysis, N2D3P9 } from "../../../sagittal"
import { FindCommasSettings } from "../findCommas"

const accommodateFindCommasSettingsToJiPitch = (
    jiPitchAnalysis: JiPitchAnalysis,
    findCommasSettings: FindCommasSettings,
): FindCommasSettings => {
    const accommodatedFindCommasOptions: FindCommasSettings = shallowClone(findCommasSettings)

    const aas = abs(jiPitchAnalysis.apotomeSlope)
    if (aas > findCommasSettings.maxAas) {
        accommodatedFindCommasOptions.maxAas = aas as Max<Abs<ApotomeSlope>>
    }

    const ate = abs(jiPitchAnalysis.monzo[ THREE_PRIME_INDEX ])
    if (ate > findCommasSettings.maxAte) {
        accommodatedFindCommasOptions.maxAte = ate as Max<Abs<3 & Integer & Exponent<Prime>>>
    }

    const n2d3p9 = jiPitchAnalysis.n2d3p9
    if (n2d3p9 > findCommasSettings.maxN2D3P9) {
        accommodatedFindCommasOptions.maxN2D3P9 = n2d3p9 as Max<N2D3P9>
    }

    return accommodatedFindCommasOptions
}

export {
    accommodateFindCommasSettingsToJiPitch,
}
