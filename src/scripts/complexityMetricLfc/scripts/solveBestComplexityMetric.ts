import {program} from "commander"
import {Filename, ioSettings, isUndefined, LogTarget, saveLog, ScriptFlag, setupScriptAndIo, time} from "../../../general"
import {ScriptGroup} from "../../types"
import {complexityMetricLfcScriptGroupSettings} from "../globals"
import {COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS} from "../metrics"
import {logComplexityParameterSetsForComplexityMetricFamilyWhichMinimizeItsScore} from "../minimize"
import {ComplexityMetric, ComplexityMetricFamilyId, ComplexityParameterId} from "../types"

program
    .option(`-${ScriptFlag.SOS_MODE}, --sos-mode`, "sum-of-squares mode (minimize the sum of squared distances between the actual comma's complexity and the best comma's complexity, rather than boolean mode which simply gives a 1 when the actual comma is not the best comma and a 0 when it is")
    .option(`-${ScriptFlag.EXTREME_CAPTURE_ZONES}, --extreme-capture-zones`, "use commas in each comma's capture zone for the Extreme precision level notation, rather than the default behavior of the comma's secondary comma zone")
    .option(`-${ScriptFlag.COMPLEXITY_SEARCH_ED}, --complexity-search-ed <complexitySearchEd>`, "number of equal divisions for each parameter's search scope")

setupScriptAndIo(ScriptGroup.COMPLEXITY_METRIC_LFC as Filename, [LogTarget.ALL])

if (!isUndefined(program.extremeCaptureZones)) {
    complexityMetricLfcScriptGroupSettings.extremeCaptureZones = program.extremeCaptureZones
}
if (!isUndefined(program.sosMode)) {
    complexityMetricLfcScriptGroupSettings.sosMode = program.sosMode
}
if (!isUndefined(program.complexitySearchEd)) {
    complexityMetricLfcScriptGroupSettings.complexitySearchEd = program.complexitySearchEd
}

const complexityMetricFamiliesWithParametersEntries = Object.entries(
    COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS,
) as Array<[ComplexityMetricFamilyId, {metric: ComplexityMetric, parameters: ComplexityParameterId[]}]>

complexityMetricFamiliesWithParametersEntries
    .forEach(logComplexityParameterSetsForComplexityMetricFamilyWhichMinimizeItsScore)

if (ioSettings.time) {
    saveLog(
        `\nFINDING COMPLEXITY PARAMETER SETS FOR COMPLEXITY METRIC FAMILIES MINIMIZING EACH OF THEIR SCORES TOOK ${time()}`,
        LogTarget.FINAL,
    )
}
