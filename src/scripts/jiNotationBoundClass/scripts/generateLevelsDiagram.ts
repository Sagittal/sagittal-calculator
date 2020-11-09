import {Filename, Io, LogTarget, saveLog, setupScriptAndIo} from "../../../general"
import {ScriptGroup} from "../../types"
import {computeLevelsDiagram} from "../io"

setupScriptAndIo(ScriptGroup.JI_NOTATION_BOUND_CLASS as Filename, [LogTarget.FINAL])

const imageOutput: Io = computeLevelsDiagram()

saveLog(imageOutput, LogTarget.FINAL, {
    useTargetColor: false,
    filenameOverride: "jiNotationBoundClass/levelsDiagram.svg" as Filename,
    writeOnly: !process.env.TEST_MODE,
})
