import {abs, Cents} from "../../../general"
import {SEMITINA} from "./constants"
import {SemitinaError, SemitinaZone} from "./types"

const computeSemitinaError = (cents: Cents, semitinaZone: SemitinaZone): SemitinaError => {
    const semitinas = cents / SEMITINA

    return abs(semitinas - semitinaZone) as SemitinaError
}

export {
    computeSemitinaError,
}
