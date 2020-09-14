import {
    Abs,
    abs,
    Exponent,
    formatInteger,
    formatNumber,
    Integer,
    Io,
    LogTarget,
    Max,
    Prime,
    saveLog,
    THREE_PRIME_INDEX,
} from "../../general"
import { ApotomeSlope, JiPitchAnalysis, N2D3P9 } from "../../sagittal"
import { jiPitchScriptGroupSettings } from "./globals"

const accommodateJiPitchInSettings = (
    jiPitchAnalysis: JiPitchAnalysis,
    { suppress }: { suppress?: boolean } = {},
): void => {
    if (suppress) {
        return
    }

    // const cents = computeCentsFromPitch(jiPitchAnalysis)
    // if (cents > jiPitchScriptGroupSettings.maxCents) {
    // tslint:disable-next-line max-line-length
    //     saveLog(`Adjusting max cents for notating commas from ${formatNumber(jiPitchScriptGroupSettings.maxCents)} to ${formatNumber(cents)} to accommodate the given pitch.` as Io, LogTarget.ALL)
    //     jiPitchScriptGroupSettings.maxCents = cents as Max<Cents>
    // }
    // if (cents < jiPitchScriptGroupSettings.minCents) {
    // tslint:disable-next-line max-line-length
    //     saveLog(`Adjusting min cents for notating commas from ${formatNumber(jiPitchScriptGroupSettings.minCents)} to ${formatNumber(cents)} to accommodate the given pitch.` as Io, LogTarget.ALL)
    //     jiPitchScriptGroupSettings.minCents = cents as Min<Cents>
    // }

    const aas = abs(jiPitchAnalysis.apotomeSlope)
    if (aas > jiPitchScriptGroupSettings.maxAas) {
        saveLog(`Adjusting max AAS for notating commas from ${formatNumber(jiPitchScriptGroupSettings.maxAas)} to ${formatNumber(aas)} to accommodate the given pitch.` as Io, LogTarget.ALL)
        jiPitchScriptGroupSettings.maxAas = aas as Max<Abs<ApotomeSlope>>
    }

    const ate = abs(jiPitchAnalysis.monzo[ THREE_PRIME_INDEX ])
    if (ate > jiPitchScriptGroupSettings.maxAte) {
        saveLog(`Adjusting max ATE for notating commas from ${formatInteger(jiPitchScriptGroupSettings.maxAte)} to ${formatInteger(ate)} to accommodate the given pitch.` as Io, LogTarget.ALL)
        jiPitchScriptGroupSettings.maxAte = ate as Max<Abs<3 & Integer & Exponent<Prime>>>
    }

    const n2d3p9 = jiPitchAnalysis.n2d3p9
    if (n2d3p9 > jiPitchScriptGroupSettings.maxN2D3P9) {
        saveLog(`Adjusting max N2D3P9 for notating commas from ${formatNumber(jiPitchScriptGroupSettings.maxN2D3P9)} to ${formatNumber(n2d3p9)} to accommodate the given pitch.` as Io, LogTarget.ALL)
        jiPitchScriptGroupSettings.maxN2D3P9 = n2d3p9 as Max<N2D3P9>
    }
}

export {
    accommodateJiPitchInSettings,
}
