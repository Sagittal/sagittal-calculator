import {
    computeMonzoFromRationalNum,
    computeRatioFromRationalNum,
    Monzo,
    Ratio,
    RationalNumTypeParameters,
} from "../../math"
import { JiPitch } from "./types"

const computeMonzoFromJiPitch = <T extends RationalNumTypeParameters>(jiPitch: JiPitch<T>): Monzo<T> =>
    computeMonzoFromRationalNum(jiPitch)

const computeRatioFromJiPitch = <T extends RationalNumTypeParameters>(jiPitch: JiPitch<T>): Ratio<T> =>
    computeRatioFromRationalNum(jiPitch)

export {
    computeMonzoFromJiPitch,
    computeRatioFromJiPitch,
}
