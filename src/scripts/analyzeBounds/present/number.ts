import {round} from "../../../utilities/round"

const PRESENTATIONAL_ACCURACY = 3

const presentNumber = position =>
    round(position, PRESENTATIONAL_ACCURACY)
        .toPrecision(5)
        .replace(/\.(\d\d\d)0*$/, ".$1")

export {
    presentNumber,
}
