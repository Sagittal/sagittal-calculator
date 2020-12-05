import {Formatted, Maybe, SPACE} from "@sagittal/general"
import {EMPTY_ACCIDENTAL, formatAccidental, Sagittal} from "../accidental"
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
        const representativeSagittal: Maybe<Sagittal> = getRepresentativeSagittal(commaClassId)
        formattedCommaClass.push(formatAccidental(representativeSagittal || EMPTY_ACCIDENTAL, {align}))
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
