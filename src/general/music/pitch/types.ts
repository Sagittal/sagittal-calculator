import { NumericProperties } from "../../math"
import { JiPitch } from "../ji"
import { NonJiPitch } from "../nonJi"

type Pitch<T extends NumericProperties = {}> = JiPitch<T> | NonJiPitch<T>

export {
    Pitch,
}
