import { Cents } from "../utilities/types"

const APOTOME: Cents = Math.log2(2187 / 2048) * 1200 as Cents  // 113.68500605771192

export {
    APOTOME,
}
