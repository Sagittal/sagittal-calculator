import { LogTarget, parseCommands, saveLog } from "../../../general"
import { analyzeBounds } from "../bounds"
import { BOUND_SCRIPT_GROUP } from "../constants"
import { computeBoundsImage, computeBoundsTables } from "../io"

parseCommands(BOUND_SCRIPT_GROUP, [LogTarget.BOUNDS_TERMINAL, LogTarget.BOUNDS_IMAGE])

const boundsAnalysis = analyzeBounds()

const terminalOutput = computeBoundsTables(boundsAnalysis)

const imageOutput = computeBoundsImage(boundsAnalysis)

saveLog(terminalOutput, LogTarget.BOUNDS_TERMINAL, BOUND_SCRIPT_GROUP, {
    useTargetColor: false,
})
saveLog(imageOutput, LogTarget.BOUNDS_IMAGE, BOUND_SCRIPT_GROUP, {
    useTargetColor: false,
    fileExtensionProvided: true,
    writeOnly: !process.env.TEST_MODE,
})
