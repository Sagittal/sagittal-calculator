import { round } from "../math"
import { PRESENTATIONAL_ACCURACY } from "./constants"

const presentNumber = (number: number) =>
    round(number, PRESENTATIONAL_ACCURACY)
        .toPrecision(5)
        .replace(/\.(\d\d\d)0*$/, ".$1")

export {
    presentNumber,
}
