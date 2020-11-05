import {Abs, Cents, Comma, Count, Decimal} from "../../../general"

// Not actually _InaBrand because doesn't correspond to a JI Notation level
type Semitina = Cents & {_SemitinaBrand: boolean}

type TinaBucket = Decimal<{integer: true}> & {_TinaBucketBrand: boolean}

type Occam = Count<Comma> & {_OccamBrand: boolean}

export {
    Semitina,
    TinaBucket,
    Occam,
}
