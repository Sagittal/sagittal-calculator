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
            "max absolute apotome slope",
            parseFloat,
        )
        .option(
            `-${CommandFlag.ABSOLUTE_THREE}, --max-absolute-three-exponent <maxAbsoluteThreeExponent>`,
            "max absolute 3 exponent",
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

    parseCommands(PITCH_SCRIPT_GROUP)

    if (program.minCents) pitchScriptGroupSettings.minCents = program.minCents
    if (program.maxCents) pitchScriptGroupSettings.maxCents = program.maxCents
    if (program.maxAbsoluteApotomeSlope) {
        pitchScriptGroupSettings.maxAbsoluteApotomeSlope = program.maxAbsoluteApotomeSlope
    }
    if (program.maxAbsoluteThreeExponent) {
        pitchScriptGroupSettings.maxAbsoluteThreeExponent = program.maxAbsoluteThreeExponent
    }
    if (program.maxN2d3p9) pitchScriptGroupSettings.maxN2D3P9 = program.maxN2d3p9
    if (program.sortBy) pitchScriptGroupSettings.sortKey = program.sortBy
}

export {
    applySharedPitchCommandSetup,
}
