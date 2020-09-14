import { Filename, Io, ioSettings, LogTarget, parseCommands, saveLog } from "../../../general"
import { ScriptGroup } from "../../types"
import { analyzeBounds } from "../bounds"
import { computeBoundsImage, computeBoundsTables } from "../io"

parseCommands(ScriptGroup.BOUND as Filename, [LogTarget.BOUNDS_TABLE, LogTarget.BOUNDS_IMAGE])

ioSettings.scriptGroup = ScriptGroup.BOUND as Filename

const boundsAnalysis = analyzeBounds()

const tableOutput: Io = computeBoundsTables(boundsAnalysis)

const imageOutput: Io = computeBoundsImage(boundsAnalysis)

saveLog(tableOutput, LogTarget.BOUNDS_TABLE, { useTargetColor: false })
saveLog(imageOutput, LogTarget.BOUNDS_IMAGE, {
    useTargetColor: false,
    fileExtensionProvided: true,
    writeOnly: !process.env.TEST_MODE,
})
