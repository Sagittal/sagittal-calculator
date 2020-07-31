import { Name } from "../types"
import { APOTOME } from "./constants"
import { Cents, Monzo, Position } from "./types"

const SIZE_CATEGORY_BOUNDS: Position[] = [
    {
        name: "u|n" as Name<Position>,
        cents: 0 as Cents,
        monzo: [] as Monzo,
    },
    {
        name: "n|s" as Name<Position>,
        cents: 1.80752293276652 as Cents,     // Half Pythagorean schisma
        monzo: [-42, 26.5] as Monzo,
    },
    {
        name: "s|k" as Name<Position>,
        cents: 4.49991346125848 as Cents,     // Half complex Pythagorean kleisma
        monzo: [158.5, -100] as Monzo,
    },
    {
        name: "k|C" as Name<Position>,
        cents: 11.7300051923244 as Cents,    // Half Pythagorean comma
        monzo: [-9.5, 6] as Monzo,
    },
    {
        name: "C|S" as Name<Position>,
        cents: 33.3824926442071 as Cents,    // Half Pythagorean large diesis
        monzo: [13.5, -8.5] as Monzo,
    },
    {
        name: "S|M" as Name<Position>,
        cents: 45.1124978365313 as Cents,    // Half limma
        monzo: [4, -2.5] as Monzo,
    },
    {
        name: "M|L" as Name<Position>,
        cents: 56.8425030288559 as Cents,    // Half apotome
        monzo: [-5.5, 3.5] as Monzo,
    },
    {
        name: "L|SS" as Name<Position>,
        cents: 68.5725082211804 as Cents,    // Half (apotome + Pythagorean comma)
        monzo: [-15, 9.5] as Monzo,
    },
    {
        name: "SS|MS" as Name<Position>,
        cents: 80.3025134135051 as Cents,   // Half 31-3-comma
        monzo: [-24.5, 15.5] as Monzo,
    },
    {
        name: "MS|LS" as Name<Position>,
        cents: 101.955000865387 as Cents,  // Half Pythagorean whole tone
        monzo: [-1.5, 1] as Monzo,
    },
    {
        name: "LS|A_AS_COEFFICIENT" as Name<Position>,
        cents: 111.877483124945 as Cents,
        monzo: [31, -19.5] as Monzo,
    },
    {
        name: "A_AS_COEFFICIENT|s+A_AS_COEFFICIENT" as Name<Position>,
        cents: 115.492528990478 as Cents,
        monzo: [-53, 33.5] as Monzo,
    },
    {
        name: "s+A_AS_COEFFICIENT|k+A_AS_COEFFICIENT" as Name<Position>,
        cents: APOTOME + 4.49991346125848 as Cents,
        monzo: [147.5, -93] as Monzo,
    },
    {
        name: "k+A_AS_COEFFICIENT|C+A_AS_COEFFICIENT" as Name<Position>,
        cents: APOTOME + 11.7300051923244 as Cents,
        monzo: [-20.5, 13] as Monzo,
    },
    {
        name: "C+A_AS_COEFFICIENT|S+A_AS_COEFFICIENT" as Name<Position>,
        cents: APOTOME + 33.3824926442071 as Cents,
        monzo: [2.5, -1.5] as Monzo,
    },
    {
        name: "S+A_AS_COEFFICIENT|M+A_AS_COEFFICIENT" as Name<Position>,
        cents: APOTOME + 45.1124978365313 as Cents,
        monzo: [-7, -4.5] as Monzo,
    },
    {
        name: "M+A_AS_COEFFICIENT|L+A_AS_COEFFICIENT" as Name<Position>,
        cents: APOTOME + 56.8425030288559 as Cents,
        monzo: [-16.5, 10.5] as Monzo,
    },
    {
        name: "L+A_AS_COEFFICIENT|SS+A_AS_COEFFICIENT" as Name<Position>,
        cents: APOTOME + 68.5725082211804 as Cents,
        monzo: [-26, 16.5] as Monzo,
    },
    {
        name: "SS+A_AS_COEFFICIENT|MS+A_AS_COEFFICIENT" as Name<Position>,
        cents: APOTOME + 80.3025134135051 as Cents,
        monzo: [-35.5, 22.5] as Monzo,
    },
    {
        name: "MS+A_AS_COEFFICIENT|LS+A_AS_COEFFICIENT" as Name<Position>,
        cents: APOTOME + 101.955000865387 as Cents,
        monzo: [-12.5, 8] as Monzo,
    },
    {
        name: "LS+A_AS_COEFFICIENT|A_AS_COEFFICIENT+A_AS_COEFFICIENT" as Name<Position>,
        cents: APOTOME + 111.877483124945 as Cents,
        monzo: [20, -12.5] as Monzo,
    },
]

export {
    SIZE_CATEGORY_BOUNDS,
}
