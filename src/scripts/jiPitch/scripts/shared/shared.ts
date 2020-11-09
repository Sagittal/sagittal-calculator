import {program} from "commander"
import {Filename, Io, Scamon, ScriptFlag, setupScriptAndIo} from "../../../../general"
import {FactoringMode} from "../../../../sagittal"
import {ScriptGroup} from "../../../types"
import {jiPitchScriptGroupSettings} from "../../globals"
import {parsePitch} from "../../io"
import {JiPitchScriptGroupField} from "../../types"
import {parseExcludedFields} from "./excludedFields"

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
        .option(`-${ScriptFlag.SORT_BY}, --sort-by <sortBy>`, "sort by")
        .option(`-${ScriptFlag.UNDIRECTED_COMMA_NAME}, --undirected`, "undirected comma name")
        // TODO: also build in the ability to recognize and substitute (parse and format) words such as Pythagorean,
        //  Classic, septimal, etc. for numbers 3-, 5-, 7- etc. where appropriate?
        //  But not as the default name on output, only as an option.
        .option(`-${ScriptFlag.FACTORING_MODE}, --factoring-mode <factoringMode>`, "factoring mode (always, never, or threshold)")
        // TODO: Build in the edo naming approach (and maybe the & style too)
        //  Touched upon [url=http://forum.sagittal.org/viewtopic.php?p=1721#p1721
        .option(`-${ScriptFlag.UNABBREVIATED_COMMA_NAME}, --unabbreviated`, "unabbreviated comma name")
        .option(
            `-${ScriptFlag.EXCLUDED_FIELDS}, --excluded-fields <excludedFields>`,
            "exclude fields",
            (excludeFieldsIo: string): JiPitchScriptGroupField[] => parseExcludedFields(excludeFieldsIo as Io),
        )

    setupScriptAndIo(ScriptGroup.JI_PITCH as Filename)

    if (program.sortBy) jiPitchScriptGroupSettings.sortKey = program.sortBy
    if (program.excludedFields) jiPitchScriptGroupSettings.excludedFields = program.excludedFields

    jiPitchScriptGroupSettings.commaNameOptions = {
        directed: !program.undirected,
        factoringMode: program.factoringMode || FactoringMode.THRESHOLD,
        abbreviated: !program.unabbreviated,
    }
}

export {
    applySharedJiPitchScriptSetup,
}