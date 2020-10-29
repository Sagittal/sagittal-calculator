import {Formatted, SPACE} from "../../general"
import {formatSagittal, NullSagittal, Sagittal} from "../accidental"
import {computeCommaName} from "../ji"
import {getCommaClass} from "./commaClass"
import {getRepresentativeSagittal} from "./representativeSagittal"
import {CommaClass, CommaClassId} from "./types"

const formatCommaClass = (
    commaClassId: CommaClassId,
    {align, name = false, glyph = true}: {align?: boolean, name?: boolean, glyph?: boolean} = {},
): Formatted<CommaClass> => {
    const formattedCommaClass = []
    if (glyph) {
        const representativeSagittal: NullSagittal | Sagittal = getRepresentativeSagittal(commaClassId)
        formattedCommaClass.push(formatSagittal(representativeSagittal, {align}))
    }

    if (name) {
        const comma = getCommaClass(commaClassId)
        formattedCommaClass.push(computeCommaName(comma.pitch))
    }

    return formattedCommaClass.join(SPACE) as Formatted<CommaClass>
}

export {
    formatCommaClass,
}
