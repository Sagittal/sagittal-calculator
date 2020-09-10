import { program } from "commander"
import { CommandFlag, parseCommands } from "../../../../general"
import { PITCH_SCRIPT_GROUP } from "../../constants"
import { pitchScriptGroupSettings } from "../../globals"

const applySharedPitchCommandSetup = () => {
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
            `-${CommandFlag.APOTOME_SLOPE}, --max-absolute-apotome-slope <maxAbsoluteApotomeSlope>`,
            "max absolute apotome slope (AAS)",
            parseFloat,
        )
        .option(
            `-${CommandFlag.ABSOLUTE_THREE}, --max-absolute-3-exponent <maxAbsolute3Exponent>`,
            "max absolute 3 exponent (ATE)",
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

    parseCommands(PITCH_SCRIPT_GROUP)

    if (program.minCents) pitchScriptGroupSettings.minCents = program.minCents
    if (program.maxCents) pitchScriptGroupSettings.maxCents = program.maxCents
    if (program.maxAbsoluteApotomeSlope) {
        pitchScriptGroupSettings.maxAbsoluteApotomeSlope = program.maxAbsoluteApotomeSlope
    }
    if (program.maxAbsolute3Exponent) {
        pitchScriptGroupSettings.maxAbsolute3Exponent = program.maxAbsolute3Exponent
    }
    if (program.maxN2d3p9) pitchScriptGroupSettings.maxN2D3P9 = program.maxN2d3p9
    if (program.sortBy) pitchScriptGroupSettings.sortKey = program.sortBy

    pitchScriptGroupSettings.commaNameOptions = {
        directed: !program.undirected,
        factored: !!program.factored,
        abbreviated: !program.unabbreviated,
    }
}

export {
    applySharedPitchCommandSetup,
}
