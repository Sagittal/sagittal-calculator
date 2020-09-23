import { computeMonzoFromRational, computeRatioFromRational, Monzo, Ratio, RationalTypeParameters } from "../../math"
import { JiPitch } from "./types"

const computeMonzoFromJiPitch = <T extends RationalTypeParameters>(jiPitch: JiPitch<T>): Monzo<T> =>
    computeMonzoFromRational(jiPitch)


const computeRatioFromJiPitch = <T extends RationalTypeParameters>(jiPitch: JiPitch<T>): Ratio<T> =>
    computeRatioFromRational(jiPitch)

export {
    computeMonzoFromJiPitch,
    computeRatioFromJiPitch,
}
