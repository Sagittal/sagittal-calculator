import { BoundEvent } from "../histories"

const computeIsBoundEventContained = <T extends BoundEvent, U extends BoundEvent>(
    boundEvents: T[],
    targetBoundEvent: U,
): boolean =>
    !!boundEvents.find((boundEvent: T): boolean => {
        return boundEvent.name === targetBoundEvent.name &&
            boundEvent.jiNotationLevel === targetBoundEvent.jiNotationLevel
    })

export {
    computeIsBoundEventContained,
}
