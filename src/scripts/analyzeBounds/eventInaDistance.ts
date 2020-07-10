import {computeInaDistance} from "../../notations/ji/inaDistance"

const computeEventInaDistance = (event, index, history) => {
    return computeInaDistance(
        Math.abs(
            index === 0 ?
                0 :
                history[index - 1].position - event.position,
        ),
        event.level,
    )
}

export {
    computeEventInaDistance,
}
