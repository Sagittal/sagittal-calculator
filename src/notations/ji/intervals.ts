import { LEVELS } from "./levels"
import { LEVEL_EDAS } from "./levelEdas"
import { APOTOME } from "../intervals"
import { Cents, EnumHash } from "../../utilities/types"
import { Level } from "./types"

const TINA: Cents = 1 / 809 * APOTOME as Cents      // 0.14052534741
const MINA: Cents = 1 / 233 * APOTOME as Cents      // 0.48791848093
const ULTRINA: Cents = 1 / 58 * APOTOME as Cents    // 1.96008631134
const HIGHINA: Cents = 1 / 47 * APOTOME as Cents    // 2.41882991613
const MEDINA: Cents = 1 / 21 * APOTOME as Cents     // 5.41357171705

const MAXIMUM_POSITION: Cents = Math.log2(
    Math.pow(3, 9.5)
    /
    Math.pow(2, 15),
) * 1200 as Cents                                   // 68.5725082211804

const INA_SIZES: EnumHash<Level, Cents> = LEVEL_EDAS.reduce(
    (levelEdaStepSizes, levelEda, index) => {
        return {
            ...levelEdaStepSizes,
            [ LEVELS[ index ] ]: APOTOME / levelEda,
        }
    },
    {} as EnumHash<Level, Cents>,
) // 5.41357171705, 2.41882991613, 1.96008631134, 0.48791848093, 0.14052534741

export {
    TINA,
    MINA,
    ULTRINA,
    HIGHINA,
    MEDINA,
    MAXIMUM_POSITION,
    INA_SIZES,
}
