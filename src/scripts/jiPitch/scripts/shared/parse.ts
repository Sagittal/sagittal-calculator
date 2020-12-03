import {COMMA, Exclusive, Io, isString, parseBoolean, split} from "../../../../general"
import {JI_PITCH_SCRIPT_GROUP_FIELDS} from "../../constants"
import {JiPitchesOrFindCommasField, JiPitchScriptGroupField} from "../../types"

const parseFields = (fieldsIo: Io): JiPitchScriptGroupField[] => {
    const fields = split(fieldsIo, COMMA)

    fields.forEach((field: Io): void => {
        if (!JI_PITCH_SCRIPT_GROUP_FIELDS.includes(field as JiPitchesOrFindCommasField)) {
            throw new Error(`Tried to parse field ${field} but it is not a member of the list of possible fields: ${JI_PITCH_SCRIPT_GROUP_FIELDS}`)
        }
    })

    return fields as JiPitchScriptGroupField[]
}

const parseExclusive = (exclusiveText: boolean | Io): Exclusive => {
    if (isString(exclusiveText)) {
        return exclusiveText.split(COMMA).map(parseBoolean) as Exclusive
    }

    return exclusiveText
}

export {
    parseFields,
    parseExclusive,
}
