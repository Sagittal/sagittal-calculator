import { BoundClassEvent } from "../histories"

const isBoundClassEventContained = <T extends BoundClassEvent, U extends BoundClassEvent>(
    boundClassEvents: T[],
    targetBoundClassEvent: U,
): boolean =>
    !!boundClassEvents.find((boundClassEvent: T): boolean => {
        return boundClassEvent.name === targetBoundClassEvent.name &&
            boundClassEvent.jiNotationLevel === targetBoundClassEvent.jiNotationLevel
    })

export {
    isBoundClassEventContained,
}
