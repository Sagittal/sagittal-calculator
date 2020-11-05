import {program} from "commander"
import {CommandFlag, Filename, Io, Scamon, setupCommandAndIo} from "../../../../general"
import {ScriptGroup} from "../../../types"
import {jiPitchScriptGroupSettings} from "../../globals"
import {parsePitch} from "../../io"
import {JiPitchScriptGroupField} from "../../types"
import {parseExcludedFields} from "./excludedFields"

const applySharedJiPitchCommandSetup = (): void => {
    program
        .option(
            `-${CommandFlag.LOWER_BOUND}, --lower-bound <lowerBound>`,
            "lower bound",
            (pitchIo: string): Scamon => parsePitch(pitchIo as Io))
        .option(
            `-${CommandFlag.UPPER_BOUND}, --upper-bound <upperBound>`,
            "upper bound",
            (pitchIo: string): Scamon => parsePitch(pitchIo as Io),
        )
        .option(`-${CommandFlag.MAX_AAS}, --max-aas <maxAas>`, "max AAS", parseFloat)
        .option(`-${CommandFlag.MAX_ATE}, --max-ate <maxAte>`, "max ATE", parseInt)
        .option(`-${CommandFlag.PRIME_LIMIT}, --max-prime-limit <maxPrimeLimit>`, "max prime limit", parseInt)
        .option(
            `-${CommandFlag.MAX_2_3_FREE_SOPFR}, --max-2-3-free-sopfr <max23FreeSopfr>`,
            "max 2,3-free sopfr",
            parseInt)
        .option(
            `-${CommandFlag.MAX_2_3_FREE_COPFR}, --max-2-3-free-copfr <max23FreeCopfr>`,
            "max 2,3-free copfr",
            parseInt,
        )
        .option(`-${CommandFlag.MAX_N2D3P9}, --max-n2d3p9 <maxN2d3p9>`, "max n2d3p9", parseFloat)
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
