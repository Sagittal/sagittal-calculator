import {abs, Cents} from "../../../general"
import {SEMITINA} from "./constants"
import {Semitina, SemitinaError} from "./types"

const computeSemitinaError = (cents: Cents, semitinaZone: Semitina): SemitinaError => {
    const semitinas = cents / SEMITINA

    return abs(semitinas - semitinaZone) as SemitinaError
}

export {
    computeSemitinaError,
}
