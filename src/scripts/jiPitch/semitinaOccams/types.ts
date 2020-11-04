import {Abs, Cents, Comma, Count, Decimal} from "../../../general"

// Not actually _InaBrand because doesn't correspond to a JI Notation level
type Semitina = Cents & {_SemitinaBrand: boolean}

type SemitinaZone = Decimal<{integer: true}> & {_SemitinaZoneBrand: boolean}

type TinaBucket = Decimal<{integer: true}> & {_TinaBucketBrand: boolean}

type Occam = Count<Comma> & {_OccamBrand: boolean}

type SemitinaError = Abs & {_SemitinaErrorBrand: boolean}

export {
    Semitina,
    SemitinaZone,
    TinaBucket,
    SemitinaError,
    Occam,
}
