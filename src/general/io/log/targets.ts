import { LogTarget, LogTargets } from "./types"

const logTargets: LogTargets = Object.keys(LogTarget).reduce(
    (logTargets, logTarget) => ({ ...logTargets, [ logTarget ]: false }),
    {} as LogTargets,
)

export {
    logTargets,
}
