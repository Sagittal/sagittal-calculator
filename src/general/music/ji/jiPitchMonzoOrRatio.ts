import {
    computeMonzoFromRationalNum,
    computeRatioFromRationalNum,
    Monzo,
    Ratio,
    RationalNumTypeParameters,
} from "../../math"
import { JiPitch } from "./types"

// TODO: for all these pitch methods that become aliases for nums, should we just have one file that contains them all?
const computeMonzoFromJiPitch = <T extends RationalNumTypeParameters>(jiPitch: JiPitch<T>): Monzo<T> =>
    computeMonzoFromRationalNum(jiPitch)

const computeRatioFromJiPitch = <T extends RationalNumTypeParameters>(jiPitch: JiPitch<T>): Ratio<T> =>
    computeRatioFromRationalNum(jiPitch)

export {
    computeMonzoFromJiPitch,
    computeRatioFromJiPitch,
}
