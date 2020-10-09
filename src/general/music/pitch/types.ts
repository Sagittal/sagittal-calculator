import { NumericProperties } from "../../math"
import { NonJiPitch } from "../irrational"
import { JiPitch } from "../rational"

type Pitch<T extends NumericProperties = {}> = JiPitch<T> | NonJiPitch<T>

type Interval<T extends NumericProperties = {}> = Pitch<T> & { _IntervalBrand: boolean }

export {
    Pitch,
    Interval,
}
