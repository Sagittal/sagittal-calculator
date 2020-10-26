import {Formatted} from "../../../../general"
import {formatSagittal, Glyph, Sagittal} from "../../../accidental"
import {getRepresentativeSagittal} from "./representativeSagittal"
import {CommaClassId} from "./types"

const formatCommaClass = (commaClassId: CommaClassId, options: {align?: boolean} = {}): Formatted<Glyph> => {
    const representativeSagittal: Sagittal = getRepresentativeSagittal(commaClassId)

    return formatSagittal(representativeSagittal, options)
}

export {
    formatCommaClass,
}
