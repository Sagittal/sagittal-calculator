import {Abs, Max} from "../../../../general"
import {ApotomeSlope, Ate, JiPitchAnalysis, N2D3P9} from "../../../../sagittal"
import {computeFindCommasSettings, FindCommasSettings} from "../../findCommas"

const parseNotatingCommasSettings = ({ate, aas, two3FreeClassAnalysis}: JiPitchAnalysis): FindCommasSettings => {
    const findCommasSettings = computeFindCommasSettings()

    if (aas > findCommasSettings.maxAas) {
        findCommasSettings.maxAas = aas as Max<Abs<ApotomeSlope>>
    }
    // TODO: COMMA NAMES: though probably you should better handle it than NaN when it happens that [-50508 31867⟩
    //  Leads to 2^ => 0 and 3^ => Infinity which leads to scamon to decimal conversion being 0*Infinity which is NaN...
    //  That's covered in the other recent to-do, but this should be test-covered somehow;
    //  This is what allows `npm run analyze-ji-pitch [-50508,31867]` to include all of the correct notating commas
    if (isNaN(aas)) {
        findCommasSettings.maxAas = Infinity as Max<Abs<ApotomeSlope>>
    }

    if (ate > findCommasSettings.maxAte) {
        findCommasSettings.maxAte = ate as Max<Ate>
    }

    const {n2d3p9} = two3FreeClassAnalysis
    if (n2d3p9 > findCommasSettings.maxN2D3P9) {
        findCommasSettings.maxN2D3P9 = n2d3p9 as Max<N2D3P9>
    }

    return findCommasSettings
}

export {
    parseNotatingCommasSettings,
}
