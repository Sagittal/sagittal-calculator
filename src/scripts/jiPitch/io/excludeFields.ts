import {Io} from "@sagittal/general"
import {jiPitchScriptGroupSettings} from "../globals"
import {JiPitchScriptGroupField} from "../types"

const excludeFields = (fieldTitles: Record<string, Io>): Io[] =>
    Object.values(fieldTitles).filter((_: Io, index: number): boolean =>
        !jiPitchScriptGroupSettings.excludedFields
            .includes(Object.keys(fieldTitles)[index] as JiPitchScriptGroupField),
    )

export {
    excludeFields,
}
