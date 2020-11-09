import {Comma, Count, Decimal} from "../../../../general"

type BucketName = Decimal<{integer: true}> & {_TinaBucketBrand: boolean}

type Occam = Count<Comma> & {_OccamBrand: boolean}

export {
    BucketName,
    Occam,
}
