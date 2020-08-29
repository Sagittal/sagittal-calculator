import { Maybe } from "../../code"
import { ioSettings } from "../settings"
import { LogTarget, LogTargets } from "./types"

const setLogTargets = (logTargetsCommaSeparatedString: Maybe<string | boolean> = "") => {
    ioSettings.logTargets = Object.keys(LogTarget).reduce(
        (logTargets, logTarget) => ({ ...logTargets, [ logTarget ]: false }),
        {} as LogTargets,
    )

    if (logTargetsCommaSeparatedString === true) {
        ioSettings.logTargets[ LogTarget.ALL ] = true
        return
    }

    const targets: LogTarget[] = (logTargetsCommaSeparatedString as string).split(",") as LogTarget[]

    targets.forEach(target => {
        ioSettings.logTargets[ target ] = true
    })
}

export {
    setLogTargets,
}
