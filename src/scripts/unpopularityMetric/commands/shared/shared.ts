import { program } from "commander"
import { unpopularityMetricSettings } from "../../globals"
import { clearDebugLogFiles, debugSettings, DebugTarget, setDebugTargets } from "../../debug"
import * as colors from "colors"

const applySharedUnpopularityMetricCommandSetup = (defaultDebugTarget?: DebugTarget) => {
    program
        .option("-d, --debug-targets [debugTargets]", "debug targets")
        .option("-c, --no-color", "no color")
        .option("-w, --no-write", "no write")
        .option("-z, --z <z>", "z", parseFloat)
        .option("-o, --only-top <onlyTop>", "only top", parseInt)
        .option("-m, --maximum-unit <maximumUnit>", "maximum unit", parseFloat)

    program.parse(process.argv)

    setDebugTargets(program.debugTargets || defaultDebugTarget)

    if (!program.color) {
        colors.disable()
    }

    debugSettings.noWrite = !program.write
    if (!debugSettings.noWrite) {
        clearDebugLogFiles()
    }

    if (program.z) unpopularityMetricSettings.z = program.z
    if (program.onlyTop) unpopularityMetricSettings.onlyTop = program.onlyTop
    if (program.maximumUnit) unpopularityMetricSettings.maximumUnit = program.maximumUnit
}

export {
    applySharedUnpopularityMetricCommandSetup,
}

