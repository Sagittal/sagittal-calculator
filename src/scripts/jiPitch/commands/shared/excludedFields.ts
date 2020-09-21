import { Io } from "../../../../general"
import { JI_PITCH_SCRIPT_GROUP_FIELDS } from "../../constants"
import { FindCommasField, JiPitchScriptGroupField } from "../../types"

const parseExcludedFields = (excludedFieldsIo: Io): JiPitchScriptGroupField[] => {
    const excludedFields = excludedFieldsIo.split(",") as Array<JiPitchScriptGroupField>

    excludedFields.forEach((excludedField: JiPitchScriptGroupField): void => {
        if (!JI_PITCH_SCRIPT_GROUP_FIELDS.includes(excludedField as FindCommasField)) {
            throw new Error(`Tried to exclude field ${excludedField} but it is not a member of the list of possible fields to exclude: ${JI_PITCH_SCRIPT_GROUP_FIELDS}`)
        }
    })

    return excludedFields as JiPitchScriptGroupField[]
}

export {
    parseExcludedFields,
}
