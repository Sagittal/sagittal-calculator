import { LEVELS } from "./levels"
import { LEVEL_EDAS } from "./levelEdas"
import { APOTOME } from "../intervals"
import { Cents } from "../../utilities/types"
import { Level } from "./types"

const TINA = 1 / 809 * APOTOME                      // 0.14052534741
const MINA = 1 / 233 * APOTOME                      // 0.48791848093
const ULTRINA = 1 / 58 * APOTOME                    // 1.96008631134
const HIGHINA = 1 / 47 * APOTOME                    // 2.41882991613
const MEDINA = 1 / 21 * APOTOME                     // 5.41357171705

const MAXIMUM_POSITION: Cents = Math.log2(
    Math.pow(3, 9.5)
    /
    Math.pow(2, 15),
) * 1200 as Cents                                   // 68.5725082211804

const INA_SIZES: { [key in Level]: Cents } = LEVEL_EDAS.reduce(
    (levelEdaStepSizes, levelEda, index) => {
        return {
            ...levelEdaStepSizes,
            [ LEVELS[ index ] ]: APOTOME / levelEda,
        }
    },
    {},
) as { [key in Level]: Cents } // 5.41357171705, 2.41882991613, 1.96008631134, 0.48791848093, 0.14052534741

export {
    TINA,
    MINA,
    ULTRINA,
    HIGHINA,
    MEDINA,
    MAXIMUM_POSITION,
    INA_SIZES,
}
