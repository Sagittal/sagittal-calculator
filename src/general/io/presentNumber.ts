import { round } from "../math"
import { PRESENTATIONAL_PRECISION } from "./constants"

const presentNumber = (number: number) =>
    round(number, PRESENTATIONAL_PRECISION)
        .toPrecision(5)
        .replace(/\.(\d\d\d)0*$/, ".$1")

export {
    presentNumber,
}
