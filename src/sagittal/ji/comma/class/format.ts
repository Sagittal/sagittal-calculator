import {Formatted, Id} from "../../../../general"
import {formatSagittal, Glyph, Sagittal} from "../../../accidental"
import {getRepresentativeSagittal} from "./representativeSagittal"
import {CommaClass} from "./types"

const formatCommaClass = (commaClassId: Id<CommaClass>, options: {align?: boolean} = {}): Formatted<Glyph> => {
    const representativeSagittal: Sagittal = getRepresentativeSagittal(commaClassId)

    return formatSagittal(representativeSagittal, options)
}

export {
    formatCommaClass,
}
