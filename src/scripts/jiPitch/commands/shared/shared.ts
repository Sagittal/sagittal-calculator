import {program} from "commander"
import {CommandFlag, Filename, Io, setupCommandAndIo} from "../../../../general"
import {ScriptGroup} from "../../../types"
import {jiPitchScriptGroupSettings} from "../../globals"
import {JiPitchScriptGroupField} from "../../types"
import {parseExcludedFields} from "./excludedFields"

const applySharedJiPitchCommandSetup = (): void => {
    program
        .option(`-${CommandFlag.SORT_BY}, --sort-by <sortBy>`, "sort by")
        .option(`-${CommandFlag.UNDIRECTED_COMMA_NAME}, --undirected`, "undirected comma name")
        .option(`-${CommandFlag.FACTORED_COMMA_NAME}, --factored`, "factored comma name")
        .option(`-${CommandFlag.UNABBREVIATED_COMMA_NAME}, --unabbreviated`, "unabbreviated comma name")
        .option(
            `-${CommandFlag.EXCLUDED_FIELDS}, --excluded-fields <excludedFields>`,
            "exclude fields",
            (excludeFieldsIo: string): JiPitchScriptGroupField[] => parseExcludedFields(excludeFieldsIo as Io),
        )

    setupCommandAndIo(ScriptGroup.JI_PITCH as Filename)

    if (program.sortBy) jiPitchScriptGroupSettings.sortKey = program.sortBy
    if (program.excludedFields) jiPitchScriptGroupSettings.excludedFields = program.excludedFields

    jiPitchScriptGroupSettings.commaNameOptions = {
        directed: !program.undirected,
        factored: !!program.factored,
        abbreviated: !program.unabbreviated,
    }
}

export {
    applySharedJiPitchCommandSetup,
}
