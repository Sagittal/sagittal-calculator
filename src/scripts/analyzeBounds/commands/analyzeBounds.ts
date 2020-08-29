import { Filename, LogTarget, parseCommands, saveLog } from "../../../general"
import { analyzeBounds } from "../bounds"
import { computeBoundsImage, computeBoundsTables } from "../io"

parseCommands("analyzeBounds" as Filename, [LogTarget.BOUNDS_TERMINAL, LogTarget.BOUNDS_IMAGE])

const boundsAnalysis = analyzeBounds()

const terminalOutput = computeBoundsTables(boundsAnalysis)

const imageOutput = computeBoundsImage(boundsAnalysis)

saveLog(terminalOutput, LogTarget.BOUNDS_TERMINAL, "analyzeBounds" as Filename, {
    useTargetColor: false,
})
saveLog(imageOutput, LogTarget.BOUNDS_IMAGE, "analyzeBounds" as Filename, {
    useTargetColor: false,
    fileExtensionProvided: true,
    writeOnly: true,
})
