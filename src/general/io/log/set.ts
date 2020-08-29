import { Maybe } from "../../code"
import { logTargets } from "./targets"
import { LogTarget } from "./types"

const setLogTargets = (logTargetsCommaSeparatedString: Maybe<string | boolean> = "") => {
    if (logTargetsCommaSeparatedString === true) {
        logTargets[ LogTarget.ALL ] = true
        return
    }

    const targets: LogTarget[] = (logTargetsCommaSeparatedString as string).split(",") as LogTarget[]

    targets.forEach(target => {
        logTargets[ target ] = true
    })
}

export {
    setLogTargets,
}
