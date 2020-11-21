import {Column, Index, isArray, isUndefined, Justification, JustificationOption, Maybe} from "../../../../general"

const computeOrderedJustification = (
    justification: JustificationOption,
    columnIndices: Array<Index<Column>>
): JustificationOption => {
    return isUndefined(justification) ?
        justification :
        isArray(justification) ?
            justification.map((_: Maybe<Justification>, index: number): Maybe<Justification> => {
                return (justification as Array<Maybe<Justification>>)[columnIndices[index]] as Maybe<Justification>
            }) :
            justification
}

export {
    computeOrderedJustification,
}
