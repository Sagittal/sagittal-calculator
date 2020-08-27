import { APOTOME, Cents } from "../../general"
import { LEVEL_EDAS } from "./levelEdas"
import { LEVELS } from "./levels"
import { Highina, Level, Medina, Mina, Tina, Ultrina } from "./types"

const TINA: Tina = 1 / 809 * APOTOME as Tina            // 0.14052534741
const MINA: Mina = 1 / 233 * APOTOME as Mina            // 0.48791848093
const ULTRINA: Ultrina = 1 / 58 * APOTOME as Ultrina    // 1.96008631134
const HIGHINA: Highina = 1 / 47 * APOTOME as Highina    // 2.41882991613
const MEDINA: Medina = 1 / 21 * APOTOME as Medina       // 5.41357171705

const INA_SIZES: Record<Level, Cents> = LEVEL_EDAS.reduce(
    (levelEdaStepSizes, levelEda, index) =>
        ({
            ...levelEdaStepSizes,
            [ LEVELS[ index ] ]: APOTOME / levelEda,
        }),
    {} as Record<Level, Cents>,
) // 5.41357171705, 2.41882991613, 1.96008631134, 0.48791848093, 0.14052534741

export {
    TINA,
    MINA,
    ULTRINA,
    HIGHINA,
    MEDINA,
    INA_SIZES,
}
