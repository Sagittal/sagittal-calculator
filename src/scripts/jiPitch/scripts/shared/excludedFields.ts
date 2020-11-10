import {COMMA, Io, split} from "../../../../general"
import {JI_PITCH_SCRIPT_GROUP_FIELDS} from "../../constants"
import {JiPitchesOrFindCommasField, JiPitchScriptGroupField} from "../../types"

const parseExcludedFields = (excludedFieldsIo: Io): JiPitchScriptGroupField[] => {
    const excludedFields = split(excludedFieldsIo, COMMA)

    excludedFields.forEach((excludedField: Io): void => {
        if (!JI_PITCH_SCRIPT_GROUP_FIELDS.includes(excludedField as JiPitchesOrFindCommasField)) {
            throw new Error(`Tried to exclude field ${excludedField} but it is not a member of the list of possible fields to exclude: ${JI_PITCH_SCRIPT_GROUP_FIELDS}`)
        }
    })

    return excludedFields as JiPitchScriptGroupField[]
}

export {
    parseExcludedFields,
}
