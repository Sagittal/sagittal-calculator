import {APOTOME, Decimal, Multiplier, multiplyScamon, Scamon} from "@sagittal/general"

const APOTOME_DOWN =
    multiplyScamon(APOTOME, -1 as Decimal<{integer: true}> & Multiplier) as Scamon<{rational: true}>
const DOUBLE_APOTOME =
    multiplyScamon(APOTOME, 2 as Decimal<{integer: true}> & Multiplier) as Scamon<{rational: true}>
const DOUBLE_APOTOME_DOWN =
    multiplyScamon(APOTOME, -2 as Decimal<{integer: true}> & Multiplier) as Scamon<{rational: true}>

export {
    APOTOME_DOWN,
    DOUBLE_APOTOME,
    DOUBLE_APOTOME_DOWN,
}
