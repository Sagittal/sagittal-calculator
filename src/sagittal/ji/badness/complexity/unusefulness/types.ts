import {Abs, Decimal, Exponent, Prime} from "@sagittal/general"

type Unusefulness = number & {_UnusefulnessBrand: boolean}

type ApotomeSlope = Unusefulness & {_ApotomeSlopeBrand: boolean}

type Ate = Unusefulness & Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>

export {
    ApotomeSlope,
    Unusefulness,
    Ate,
}
