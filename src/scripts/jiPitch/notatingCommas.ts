import { Comma, Id, JiPitch } from "../../general"
import { addMaybeSymbolClassId, analyzeComma, CommaAnalysis, computeNotatingCommas, SymbolClass } from "../../sagittal"
import { jiPitchScriptGroupSettings } from "./globals"
import { FindCommasOptions } from "./types"

const computeMaybeNotatingCommasWithMaybeSagittalSymbolClassesTable = (
    jiPitch: JiPitch,
    findCommasOptions: Partial<FindCommasOptions> = {},
): Array<CommaAnalysis & { symbolClassId?: Id<SymbolClass> }> => {
    const notatingCommas: Comma[] =
        computeNotatingCommas(jiPitch, { ...jiPitchScriptGroupSettings, ...findCommasOptions })
    const notatingCommasWithMaybeSagittalSymbolClassIds =
        notatingCommas.map(addMaybeSymbolClassId)

    return notatingCommasWithMaybeSagittalSymbolClassIds.map((comma: Comma): CommaAnalysis => {
        return analyzeComma(comma, jiPitchScriptGroupSettings.commaNameOptions)
    })
}

export {
    computeMaybeNotatingCommasWithMaybeSagittalSymbolClassesTable,
}
