import { Comma, Id, Io, ioSettings, LogTarget, saveLog, stringify } from "../../../general"
import {
    analyzeComma,
    CommaAnalysis,
    computeCommaName,
    computeSecondaryCommaZone,
    formatSymbolClass,
    getPrimaryComma,
    JI_NOTATION,
    SymbolClass,
} from "../../../sagittal"
import { computeCommas, parseFindCommasSettings } from "../findCommas"
import { jiPitchScriptGroupSettings } from "../globals"
import { applySharedPitchCommandSetup } from "./shared"

// TODO: http://forum.sagittal.org/viewtopic.php?p=2432#p2432
//  http://forum.sagittal.org/viewtopic.php?p=2419#p2419

applySharedPitchCommandSetup()

const findCommasSettings = parseFindCommasSettings()

JI_NOTATION.forEach((symbolClassId: Id<SymbolClass>): void => {
    const primaryComma = getPrimaryComma(symbolClassId)
    const commaName = computeCommaName(primaryComma)

    saveLog(`\n\n${formatSymbolClass(symbolClassId, ioSettings)} ${commaName}\n\n` as Io, LogTarget.ALL)

    const secondaryCommaZone = computeSecondaryCommaZone(symbolClassId)
    const minCents = secondaryCommaZone[ 0 ]
    const maxCents = secondaryCommaZone[ 1 ]

    const commas = computeCommas({ ...jiPitchScriptGroupSettings, ...findCommasSettings, minCents, maxCents })

    const commaAnalyses = commas.map((comma: Comma): CommaAnalysis => analyzeComma(comma))

    saveLog(stringify(commaAnalyses, { multiline: true }) as Io, LogTarget.ALL)
})
