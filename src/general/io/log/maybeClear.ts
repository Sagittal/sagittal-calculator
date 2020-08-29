import { program } from "commander"
import { Filename } from "../types"
import { clearLogFiles } from "./clear"
import { logSettings } from "./settings"

// TODO: you'll want to refactor so that you can curry/chain these setups with a callback so you can compose them
//  it will also save you from having to remember to call program.parse in every command file...
//  and you should no longer call parse() in anything else, like computeMonzoFromCommand, or shared setup for LFC
//  and perhaps you should avoid sprinkling commander around the place, and quarantine it in one io/program module

const setupToMaybeClearLogFiles = () => {
    program
        .option("-w, --no-write", "no write")
}

const maybeClearLogFiles = (scriptGroup: Filename) => {
    logSettings.noWrite = !program.write
    if (!logSettings.noWrite) {
        clearLogFiles(scriptGroup)
    }
}

export {
    setupToMaybeClearLogFiles,
    maybeClearLogFiles,
}
