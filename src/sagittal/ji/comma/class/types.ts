import {Comma, Id} from "../../../../general"
import {Flacco} from "../../../accidental"

// Apotome-inversion comma class (repeats in a mirrored pattern at the half apotome)
interface CommaClass {
    pitch: Comma,
    id: Id<CommaClass>,
    representativeFlaccoId: Id<Flacco>,
}

export {
    CommaClass,
}
