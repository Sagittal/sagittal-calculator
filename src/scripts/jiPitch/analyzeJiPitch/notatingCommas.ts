import { Comma, Id, JiPitch } from "../../../general"
import {
    addMaybeSymbolClassId,
    analyzeComma,
    CommaAnalysis,
    computeNotatingCommas,
    SymbolClass,
} from "../../../sagittal"
import { FindCommasSettings } from "../findCommas"
import { jiPitchScriptGroupSettings } from "../globals"

const computeMaybeNotatingCommasWithMaybeSagittalSymbolClassesTable = (
    jiPitch: JiPitch,
    findCommasSettings: Partial<FindCommasSettings> = {},
): Array<CommaAnalysis & { symbolClassId?: Id<SymbolClass> }> => {
    const notatingCommas: Comma[] =
        computeNotatingCommas(jiPitch, { ...jiPitchScriptGroupSettings, ...findCommasSettings })
    const notatingCommasWithMaybeSagittalSymbolClassIds =
        notatingCommas.map(addMaybeSymbolClassId)

    return notatingCommasWithMaybeSagittalSymbolClassIds.map((comma: Comma): CommaAnalysis => {
        return analyzeComma(comma, jiPitchScriptGroupSettings.commaNameOptions)
    })
}

export {
    computeMaybeNotatingCommasWithMaybeSagittalSymbolClassesTable,
}
