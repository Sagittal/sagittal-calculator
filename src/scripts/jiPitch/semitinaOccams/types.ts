import {Abs, Cents, Decimal} from "../../../general"

// Not actually _InaBrand because doesn't correspond to a JI Notation level
type Semitina = Cents & {_SemitinaBrand: boolean}

type SemitinaZone = Decimal<{integer: true}> & {_SemitinaZoneBrand: boolean}
type SemitinaBucket = Abs<SemitinaZone>

type SemitinaError = Abs & {_SemitinaErrorBrand: boolean}

export {
    Semitina,
    SemitinaZone,
    SemitinaBucket,
    SemitinaError,
}
