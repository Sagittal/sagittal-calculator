import { Id, isUndefined } from "../../../general"
import { FLACCOS } from "./flaccos"
import { Flacco } from "./types"

const getFlacco = (flaccoId: Id<Flacco>): Flacco => {
    const maybeFlacco = FLACCOS.find((flacco: Flacco): boolean => flacco.id === flaccoId)

    if (isUndefined(maybeFlacco)) {
        throw new Error(`Could not find flacco with id ${flaccoId}`)
    }

    return maybeFlacco
}

export {
    getFlacco,
}
