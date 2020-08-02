import { debugTargets } from "./targets"
import { DebugTarget } from "./types"

const setDebugTargets = (debugTargetsCommaSeparatedString: string = "") => {
    const targets: DebugTarget[] = debugTargetsCommaSeparatedString.split(",") as DebugTarget[]

    targets.forEach(target => {
        debugTargets[target] = true
    })

    // todo should make it so that if you just provide -d w/ nothing else then you mean debug ALL
}

export {
    setDebugTargets,
}
