import { APOTOME } from "./intervals"
import { EventName, SnappablePosition } from "../scripts/analyzeBounds/types"
import { Cents } from "../utilities/types"
import { Monzo } from "../utilities/comma/types"

const SIZE_CATEGORY_BOUNDS: SnappablePosition[] = [
    {
        name: "n|s" as EventName,
        position: 1.80752293276652 as Cents,     // half Pythagorean schisma
        monzo: [-42, 26.5] as Monzo,
    },
    {
        name: "s|k" as EventName,
        position: 4.49991346125848 as Cents,     // half complex Pythagorean kleisma
        monzo: [158.5, -100] as Monzo,
    },
    {
        name: "k|C" as EventName,
        position: 11.73000519232440 as Cents,    // half Pythagorean comma
        monzo: [-9.5, 6] as Monzo,
    },
    {
        name: "C|S" as EventName,
        position: 33.38249264420710 as Cents,    // half Pythagorean large diesis
        monzo: [13.5, -8.5] as Monzo,
    },
    {
        name: "S|M" as EventName,
        position: 45.11249783653130 as Cents,    // half limma
        monzo: [4, -2.5] as Monzo,
    },
    {
        name: "M|L" as EventName,
        position: 56.84250302885590 as Cents,    // half apotome
        monzo: [-5.5, 3.5] as Monzo,
    },
    {
        name: "L|SS" as EventName,
        position: 68.57250822118040 as Cents,    // half (apotome + Pythagorean comma)
        monzo: [-15, 9.5] as Monzo,
    },
    {
        name: "SS|MS" as EventName,
        position: 80.302513413505100 as Cents,   // half 31-3-comma
        monzo: [-24.5, 15.5] as Monzo,
    },
    {
        name: "MS|LS" as EventName,
        position: 101.955000865387000 as Cents,  // half Pythagorean whole tone
        monzo: [-1.5, 1] as Monzo,
    },
    {
        name: "LS|A" as EventName,
        position: 111.877483124945000 as Cents,
        monzo: [31, -19.5] as Monzo,
    },
    {
        name: "A|s+A" as EventName,
        position: 115.492528990478000 as Cents,
        monzo: [-53, 33.5] as Monzo,
    },
    {
        name: "s+A|k+A" as EventName,
        position: APOTOME + 4.49991346125848 as Cents,
        monzo: [147.5, -93] as Monzo,
    },
    {
        name: "k+A|C+A" as EventName,
        position: APOTOME + 11.73000519232440 as Cents,
        monzo: [-20.5, 13] as Monzo,
    },
    {
        name: "C+A|S+A" as EventName,
        position: APOTOME + 33.38249264420710 as Cents,
        monzo: [2.5, -1.5] as Monzo,
    },
    {
        name: "S+A|M+A" as EventName,
        position: APOTOME + 45.11249783653130 as Cents,
        monzo: [-7, -4.5] as Monzo,
    },
    {
        name: "M+A|L+A" as EventName,
        position: APOTOME + 56.84250302885590 as Cents,
        monzo: [-16.5, 10.5] as Monzo,
    },
    {
        name: "L+A|SS+A" as EventName,
        position: APOTOME + 68.57250822118040 as Cents,
        monzo: [-26, 16.5] as Monzo,
    },
    {
        name: "SS+A|MS+A" as EventName,
        position: APOTOME + 80.302513413505100 as Cents,
        monzo: [-35.5, 22.5] as Monzo,
    },
    {
        name: "MS+A|LS+A" as EventName,
        position: APOTOME + 101.955000865387000 as Cents,
        monzo: [-12.5, 8] as Monzo,
    },
    {
        name: "LS+A|A+A" as EventName,
        position: APOTOME + 111.877483124945000 as Cents,
        monzo: [20, -12.5] as Monzo,
    },
]

export {
    SIZE_CATEGORY_BOUNDS,
}
