import {Comma, Count, Decimal} from "../../../../general"

type TinaBucket = Decimal<{integer: true}> & {_TinaBucketBrand: boolean}

type Occam = Count<Comma> & {_OccamBrand: boolean}

export {
    TinaBucket,
    Occam,
}
