import { LogTarget, LogTargets } from "./types"

// TODO: I think this should live on the ioSettings global

const logTargets: LogTargets = Object.keys(LogTarget).reduce(
    (logTargets, logTarget) => ({ ...logTargets, [ logTarget ]: false }),
    {} as LogTargets,
)

export {
    logTargets,
}
