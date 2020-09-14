import { program } from "commander"
import { CommandFlag, Filename, ioSettings, parseCommands } from "../../../../general"
import { ScriptGroup } from "../../../types"
import { jiPitchScriptGroupSettings } from "../../globals"

const applySharedPitchCommandSetup = (): void => {
    program
        .option(
            `-${CommandFlag.MIN_CENTS}, --min-cents <minCents>`,
            "min cents",
            parseFloat,
        )
        .option(
            `-${CommandFlag.MAX_CENTS}, --max-cents <maxCents>`,
            "max cents",
            parseFloat,
        )
        .option(
            `-${CommandFlag.APOTOME_SLOPE}, --max-abs-apotome-slope <maxAbsApotomeSlope>`,
            "max abs apotome slope (AAS)",
            parseFloat,
        )
        .option(
            `-${CommandFlag.ABS_3}, --max-abs-3-exponent <maxAbs3Exponent>`,
            "max abs 3 exponent (ATE)",
            parseInt,
        )
        .option(
            `-${CommandFlag.N2D3P9}, --max-n2d3p9 <maxN2d3p9>`,
            "max n2d3p9",
            parseFloat,
        )
        .option(
            `-${CommandFlag.SORT_BY}, --sort-by <sortBy>`,
            "sort by",
        )
        .option(`-${CommandFlag.UNDIRECTED_COMMA_NAME}, --undirected`, "undirected comma name")
        .option(`-${CommandFlag.FACTORED_COMMA_NAME}, --factored`, "factored comma name")
        .option(`-${CommandFlag.UNABBREVIATED_COMMA_NAME}, --unabbreviated`, "unabbreviated comma name")

    parseCommands(ScriptGroup.JI_PITCH as Filename)

    if (program.minCents) jiPitchScriptGroupSettings.minCents = program.minCents
    if (program.maxCents) jiPitchScriptGroupSettings.maxCents = program.maxCents
    if (program.maxAbsApotomeSlope) jiPitchScriptGroupSettings.maxAbsApotomeSlope = program.maxAbsApotomeSlope
    if (program.maxAbs3Exponent) jiPitchScriptGroupSettings.maxAbs3Exponent = program.maxAbs3Exponent
    if (program.maxN2d3p9) jiPitchScriptGroupSettings.maxN2D3P9 = program.maxN2d3p9
    if (program.sortBy) jiPitchScriptGroupSettings.sortKey = program.sortBy

    jiPitchScriptGroupSettings.commaNameOptions = {
        directed: !program.undirected,
        factored: !!program.factored,
        abbreviated: !program.unabbreviated,
    }

    ioSettings.scriptGroup = ScriptGroup.JI_PITCH as Filename
}

export {
    applySharedPitchCommandSetup,
}
