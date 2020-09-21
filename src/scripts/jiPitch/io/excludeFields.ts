import { Io } from "../../../general"
import { jiPitchScriptGroupSettings } from "../globals"
import { JiPitchScriptGroupField } from "../types"

const excludeFields = (columnTitles: Record<string, Io>): Io[] => {
    return Object.values(columnTitles).filter((_: Io, index: number): boolean => {
        return !jiPitchScriptGroupSettings.excludedFields
            .includes(Object.keys(columnTitles)[ index ] as JiPitchScriptGroupField)
    })
}

export {
    excludeFields,
}
