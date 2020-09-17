import { Apotome, Cents, Ed } from "../../../general"
import { APOTOME_CENTS } from "../../constants"
import { JI_NOTATION_LEVEL_EDAS } from "./levelEdas"
import { JI_NOTATION_LEVELS } from "./levels"
import { Highina, JiNotationLevel, Medina, Mina, Tina, Ultrina } from "./types"

const TINA: Tina = 1 / 809 * APOTOME_CENTS as Tina            // 0.14052534741
const MINA: Mina = 1 / 233 * APOTOME_CENTS as Mina            // 0.48791848093
const ULTRINA: Ultrina = 1 / 58 * APOTOME_CENTS as Ultrina    // 1.96008631134
const HIGHINA: Highina = 1 / 47 * APOTOME_CENTS as Highina    // 2.41882991613
const MEDINA: Medina = 1 / 21 * APOTOME_CENTS as Medina       // 5.41357171705

const INA_SIZES: Record<JiNotationLevel, Cents> = JI_NOTATION_LEVEL_EDAS.reduce(
    (
        jiNotationLevelEdaStepSizes: Record<JiNotationLevel, Cents>,
        jiNotationLevelEda: Ed<Apotome>,
        index: number,
    ): Record<JiNotationLevel, Cents> =>
        ({
            ...jiNotationLevelEdaStepSizes,
            [ JI_NOTATION_LEVELS[ index ] ]: APOTOME_CENTS / jiNotationLevelEda,
        }),
    {} as Record<JiNotationLevel, Cents>,
) // 5.41357171705, 2.41882991613, 1.96008631134, 0.48791848093, 0.14052534741

export {
    TINA,
    MINA,
    ULTRINA,
    HIGHINA,
    MEDINA,
    INA_SIZES,
}
