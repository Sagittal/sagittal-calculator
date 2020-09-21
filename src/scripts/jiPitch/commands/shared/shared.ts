import { program } from "commander"
import { CommandFlag, Filename, ioSettings, parseCommands } from "../../../../general"
import { ScriptGroup } from "../../../types"
import { jiPitchScriptGroupSettings } from "../../globals"

const applySharedPitchCommandSetup = (): void => {
    ioSettings.scriptGroup = ScriptGroup.JI_PITCH as Filename

    program
        .option(`-${CommandFlag.SORT_BY}, --sort-by <sortBy>`, "sort by")
        .option(`-${CommandFlag.UNDIRECTED_COMMA_NAME}, --undirected`, "undirected comma name")
        .option(`-${CommandFlag.FACTORED_COMMA_NAME}, --factored`, "factored comma name")
        .option(`-${CommandFlag.UNABBREVIATED_COMMA_NAME}, --unabbreviated`, "unabbreviated comma name")

    parseCommands(ScriptGroup.JI_PITCH as Filename)

    if (program.sortBy) jiPitchScriptGroupSettings.sortKey = program.sortBy

    jiPitchScriptGroupSettings.commaNameOptions = {
        directed: !program.undirected,
        factored: !!program.factored,
        abbreviated: !program.unabbreviated,
    }
}

export {
    applySharedPitchCommandSetup,
}
