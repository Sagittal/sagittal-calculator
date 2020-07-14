import { round } from "../../../general"

const PRESENTATIONAL_ACCURACY = 3

const presentNumber = (number: number) =>
    round(number, PRESENTATIONAL_ACCURACY)
        .toPrecision(5)
        .replace(/\.(\d\d\d)0*$/, ".$1")

export {
    presentNumber,
}
