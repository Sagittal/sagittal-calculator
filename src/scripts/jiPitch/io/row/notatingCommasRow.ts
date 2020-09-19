import { BLANK, Id, ioSettings, Maybe, Row } from "../../../../general"
import { CommaAnalysis, formatSymbolClass, SymbolClass } from "../../../../sagittal"
import { computeJiPitchRow } from "./jiPitchRow"

const computeNotatingCommasRow = (
    commaAnalysis: CommaAnalysis,
    maybeSymbolClassId: Maybe<Id<SymbolClass>>,
): Row<{ of: CommaAnalysis }> => {
    const { name } = commaAnalysis
    const formattedSymbolClass = maybeSymbolClassId ? formatSymbolClass(maybeSymbolClassId, ioSettings) : BLANK

    return [
        formattedSymbolClass,
        name,
        ...computeJiPitchRow(commaAnalysis),
    ] as Row<{ of: CommaAnalysis }>
}

export {
    computeNotatingCommasRow,
}
