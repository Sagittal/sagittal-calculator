import {program} from "commander"
import {Filename, Io, Scamon, ScriptFlag, setupScriptAndIo} from "../../../../general"
import {FactoringMode} from "../../../../sagittal"
import {ScriptGroup} from "../../../types"
import {jiPitchScriptGroupSettings} from "../../globals"
import {parsePitch} from "../../io"
import {JiPitchScriptGroupField} from "../../types"
import {parseFields} from "./fields"

const applySharedJiPitchScriptSetup = (): void => {
    program
        .option(
            `-${ScriptFlag.LOWER_BOUND}, --lower-bound <lowerBound>`,
            "lower bound",
            (pitchIo: string): Scamon => parsePitch(pitchIo as Io))
        .option(
            `-${ScriptFlag.UPPER_BOUND}, --upper-bound <upperBound>`,
            "upper bound",
            (pitchIo: string): Scamon => parsePitch(pitchIo as Io),
        )
        .option(`-${ScriptFlag.INCLUSIVE}, --inclusive`, "inclusive bounds")
        .option(`-${ScriptFlag.MAX_AAS}, --max-aas <maxAas>`, "max AAS", parseFloat)
        .option(`-${ScriptFlag.MAX_ATE}, --max-ate <maxAte>`, "max ATE", parseInt)
        .option(`-${ScriptFlag.PRIME_LIMIT}, --max-prime-limit <maxPrimeLimit>`, "max prime limit", parseInt)
        .option(
            `-${ScriptFlag.MAX_2_3_FREE_SOPFR}, --max-2-3-free-sopfr <max23FreeSopfr>`,
            "max 2,3-free sopfr",
            parseInt)
        .option(
            `-${ScriptFlag.MAX_2_3_FREE_COPFR}, --max-2-3-free-copfr <max23FreeCopfr>`,
            "max 2,3-free copfr",
            parseInt,
        )
        .option(`-${ScriptFlag.MAX_N2D3P9}, --max-n2d3p9 <maxN2d3p9>`, "max n2d3p9", parseFloat)
        // TODO: GETTING COMPLEX 3-LIMIT COMMA REFERENCE: PARSE SORT BY (MULTIPLE)
        //  Add a handler here for `parseSortBy`, to handle comma-separated list of multiple sorts
        .option(`-${ScriptFlag.SORT_BY}, --sort-by <sortBy>`, "sort by")
        .option(`-${ScriptFlag.UNDIRECTED_COMMA_NAME}, --undirected`, "undirected comma name")
        .option(`-${ScriptFlag.FACTORING_MODE}, --factoring-mode <factoringMode>`, "factoring mode (always, never, or threshold)")
        .option(`-${ScriptFlag.UNABBREVIATED_COMMA_NAME}, --unabbreviated`, "unabbreviated comma name")
        .option(
            `-${ScriptFlag.EXCLUDED_FIELDS}, --excluded-fields <excludedFields>`,
            "exclude fields",
            (excludedFieldsIo: string): JiPitchScriptGroupField[] => parseFields(excludedFieldsIo as Io),
        )
        .option(
            `-${ScriptFlag.ORDERED_FIELDS}, --ordered-fields <orderedFields>`,
            "specify exact ordered set of fields",
            (orderedFieldsIo: string): JiPitchScriptGroupField[] => parseFields(orderedFieldsIo as Io),
        )

    setupScriptAndIo(ScriptGroup.JI_PITCH as Filename)

    if (program.sortBy) jiPitchScriptGroupSettings.sortKey = program.sortBy
    if (program.excludedFields) jiPitchScriptGroupSettings.excludedFields = program.excludedFields
    if (program.orderedFields) {
        // TODO: GETTING COMPLEX 3-LIMIT COMMA REFERENCE: DO NOT EXCLUDE FIELDS WHEN ORDERING
        //  You should make sure this is covered by a test (other to-do w/ same name has it started)
        jiPitchScriptGroupSettings.excludedFields = []
        jiPitchScriptGroupSettings.orderedFields = program.orderedFields
    }

    jiPitchScriptGroupSettings.commaNameOptions = {
        directed: !program.undirected,
        factoringMode: program.factoringMode || FactoringMode.THRESHOLD,
        abbreviated: !program.unabbreviated,
    }
}

export {
    applySharedJiPitchScriptSetup,
}
