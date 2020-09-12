import { Filename, ioSettings, LogTarget, parseCommands, saveLog } from "../../../general"
import { ScriptGroup } from "../../types"
import { analyzeBounds } from "../bounds"
import { computeBoundsImage, computeBoundsTables } from "../io"

parseCommands(ScriptGroup.BOUND as Filename, [LogTarget.BOUNDS_TERMINAL, LogTarget.BOUNDS_IMAGE])

ioSettings.scriptGroup = ScriptGroup.BOUND as Filename

const boundsAnalysis = analyzeBounds()

const terminalOutput = computeBoundsTables(boundsAnalysis)

const imageOutput = computeBoundsImage(boundsAnalysis)

saveLog(terminalOutput, LogTarget.BOUNDS_TERMINAL, { useTargetColor: false })
saveLog(imageOutput, LogTarget.BOUNDS_IMAGE, {
    useTargetColor: false,
    fileExtensionProvided: true,
    writeOnly: !process.env.TEST_MODE,
})
