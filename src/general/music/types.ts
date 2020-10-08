import { Extrema } from "../types"
import { Pitch } from "./pitch"

type Cents = number & { _CentsBrand: boolean }

//  TODO: consider merging the math and music modules
//   2,3-FREE IN MUSIC MODULE WHILE 5-ROUGH UNDERNEATH IN MATH MODULE was the original goal
//   So we've established that prime limit is the direct musical equivalent of smooth in math
//   Perhaps there is some way to fernangle it so that pitches could have free: [2,3] and then potentially you know
//   Like [3,5,7] such as is the case in the Yer tuning system, where it's a chunk in the middle, nonconsecutive
//   And ji: true could map to rational: true
//   Could now fairly easily accomplish this in the music/ module with a TypeParametersMapping from pitch to numeric
//   And I tried that... but the TypeScript compiler couldn't handle it.

type Zone<T = void> = Extrema<Pitch> & (T extends void ? {} : { _ZoneOfBrand: T })

export {
    Cents,
    Zone,
}
