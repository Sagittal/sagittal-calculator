import {Abs, Cents} from "../../../general"

// Not actually _InaBrand because doesn't correspond to a JI Notation level
type Semitina = Cents & {_SemitinaBrand: boolean}

type SemitinaError = Abs & {_SemitinaErrorBrand: boolean}

export {
    Semitina,
    SemitinaError,
}
