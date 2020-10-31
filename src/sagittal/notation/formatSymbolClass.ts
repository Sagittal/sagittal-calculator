import {Formatted, SPACE} from "../../general"
import {computeSagittalFromSymbolClassId, formatAccidental} from "../accidental"
import {computeCommaName} from "../ji"
import {getCommaClass} from "./commaClass"
import {getSymbolClass} from "./symbolClass"
import {SymbolClass, SymbolClassId} from "./types"

const formatSymbolClass = (
    symbolClassId: SymbolClassId,
    {align, name = false, glyph = true}: {align?: boolean, name?: boolean, glyph?: boolean} = {},
): Formatted<SymbolClass> => {
    const formattedSymbolClass = []

    if (glyph) {
        const sagittal = computeSagittalFromSymbolClassId(symbolClassId)
        formattedSymbolClass.push(formatAccidental(sagittal, {align}))
    }

    if (name) {
        const symbolClass = getSymbolClass(symbolClassId)
        const commaClassId = symbolClass.commaClassId
        const commaClass = getCommaClass(commaClassId)
        const comma = commaClass.pitch
        const commaName = computeCommaName(comma)
        formattedSymbolClass.push(commaName)
    }

    return formattedSymbolClass.join(SPACE) as Formatted<SymbolClass>
}

export {
    formatSymbolClass,
}
