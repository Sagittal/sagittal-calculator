import { DebugTarget, DebugTargets } from "./types"

const debugTargets: DebugTargets = Object.keys(DebugTarget).reduce(
    (debugTargets, debugTarget) => ({ ...debugTargets, [ debugTarget ]: false }),
    {} as DebugTargets,
)

export {
    debugTargets,
}
