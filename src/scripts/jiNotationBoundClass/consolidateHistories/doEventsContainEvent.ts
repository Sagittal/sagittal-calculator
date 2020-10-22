import {BoundEvent} from "../histories"

const isBoundEventContained = <T extends BoundEvent, U extends BoundEvent>(
    boundEvents: T[],
    targetBoundEvent: U,
): boolean =>
    !!boundEvents.find((boundEvent: T): boolean => {
        return boundEvent.name === targetBoundEvent.name &&
            boundEvent.jiNotationLevel === targetBoundEvent.jiNotationLevel
    })

export {
    isBoundEventContained,
}
