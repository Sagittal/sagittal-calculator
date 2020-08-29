import * as colors from "colors"
import { program } from "commander"
import { LogTarget, maybeClearLogFiles, setLogTargets, setupToMaybeClearLogFiles } from "../../../../general"
import { LFC } from "../../constants"
import { lfcSettings } from "../../globals"

const applySharedLfcCommandSetup = (
    { defaultLogTargets }: { defaultLogTargets?: LogTarget[] } = {},
) => {
    setupToMaybeClearLogFiles()

    program
        .option("-l, --log-targets [logTargets]", "log targets")
        .option("-c, --no-color", "no color")
        .option("-w, --no-write", "no write")
        .option("-u, --no-useless", "eliminate probably useless parameters or parameter value scopes")
        .option("-z, --z <z>", "z", parseFloat)
        .option("-o, --only-top <onlyTop>", "only top", parseInt)
        .option("-m, --max-unit <maxUnit>", "max unit", parseFloat)
        .parse(process.argv)

    setLogTargets(program.logTargets || defaultLogTargets && defaultLogTargets.join(","))

    if (!program.color) {
        colors.disable()
    }

    maybeClearLogFiles(LFC)

    if (program.z) lfcSettings.z = program.z
    if (program.onlyTop) lfcSettings.onlyTop = program.onlyTop
    if (program.maxUnit) lfcSettings.maxUnit = program.maxUnit
    if (!program.useless) lfcSettings.noUseless = true
}

export {
    applySharedLfcCommandSetup,
}

