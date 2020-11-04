import {Abs, Decimal, Exponent, Max, Prime} from "../../../../general"
import {ApotomeSlope, computeAas, computeAte, JiPitchAnalysis, N2D3P9} from "../../../../sagittal"
import {computeFindCommasSettings, FindCommasSettings} from "../../findCommas"

const parseNotatingCommasSettings = ({pitch, two3FreeClassAnalysis}: JiPitchAnalysis): FindCommasSettings => {
    const findCommasSettings = computeFindCommasSettings()

    const aas = computeAas(pitch)
    if (aas > findCommasSettings.maxAas) {
        findCommasSettings.maxAas = aas as Max<Abs<ApotomeSlope>>
    }

    const ate = computeAte(pitch)
    if (ate > findCommasSettings.maxAte) {
        findCommasSettings.maxAte = ate as Max<Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>>
    }

    const n2d3p9 = two3FreeClassAnalysis.n2d3p9
    if (n2d3p9 > findCommasSettings.maxN2D3P9) {
        findCommasSettings.maxN2D3P9 = n2d3p9 as Max<N2D3P9>
    }

    return findCommasSettings
}

export {
    parseNotatingCommasSettings,
}
