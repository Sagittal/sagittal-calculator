import { debugTargets } from "./targets"
import { DebugTarget } from "./types"

const setDebugTargets = (debugTargetsCommaSeparatedString: string | boolean = "") => {
    if (debugTargetsCommaSeparatedString === true) {
        debugTargets[ DebugTarget.ALL ] = true
        return
    }

    const targets: DebugTarget[] = (debugTargetsCommaSeparatedString as string).split(",") as DebugTarget[]

    targets.forEach(target => {
        debugTargets[ target ] = true
    })

}

export {
    setDebugTargets,
}
