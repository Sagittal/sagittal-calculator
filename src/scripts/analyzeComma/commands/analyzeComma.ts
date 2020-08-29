import "colors"
import {
    computeMonzoFromCommand,
    Filename,
    LogTarget,
    maybeClearLogFiles,
    saveLog,
    setupToMaybeClearLogFiles,
} from "../../../general"
import { analyzeComma } from "../../../sagittal"
import { formatComma } from "../io"

setupToMaybeClearLogFiles()

const monzo = computeMonzoFromCommand()

maybeClearLogFiles("analyzeComma" as Filename)

const analyzedComma = analyzeComma(monzo)

saveLog(formatComma(analyzedComma), LogTarget.ALL, "analyzeComma" as Filename)
