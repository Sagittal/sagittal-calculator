import {Formatted} from "../../general"
import {formatSagittal, Glyph, NullSagittal, Sagittal} from "../accidental"
import {getRepresentativeSagittal} from "./representativeSagittal"
import {CommaClassId} from "./types"

const formatCommaClass = (commaClassId: CommaClassId, options: {align?: boolean} = {}): Formatted<Glyph> => {
    // TODO: IMPROVE NULL SAGITTAL SITUATION
    //  We might want a friendlier situation than calling things "sagittal" whether or not they are Sagittal or
    //  NullSagittal | Sagittal
    const representativeSagittal: NullSagittal | Sagittal = getRepresentativeSagittal(commaClassId)

    return formatSagittal(representativeSagittal, options)
}

export {
    formatCommaClass,
}
