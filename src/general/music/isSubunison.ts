import { computeCentsFromMonzo } from "./computeCentsFromMonzo"
import { Monzo } from "./types"

const isSubunison = (monzo: Monzo): boolean => {
    return computeCentsFromMonzo(monzo) < 0
}

export {
    isSubunison,
}
