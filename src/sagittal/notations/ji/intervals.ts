import { Apotome, Cents, computeCentsFromPitch, Ed } from "../../../general"
import { APOTOME } from "../../constants"
import { JI_NOTATION_LEVEL_EDAS } from "./levelEdas"
import { JI_NOTATION_LEVELS } from "./levels"
import { Highina, JiNotationLevel, Medina, Mina, Tina, Ultrina } from "./types"

const TINA: Tina = 1 / 809 * computeCentsFromPitch(APOTOME) as Tina            // 0.14052534741¢
const MINA: Mina = 1 / 233 * computeCentsFromPitch(APOTOME) as Mina            // 0.48791848093¢
const ULTRINA: Ultrina = 1 / 58 * computeCentsFromPitch(APOTOME) as Ultrina    // 1.96008631134¢
const HIGHINA: Highina = 1 / 47 * computeCentsFromPitch(APOTOME) as Highina    // 2.41882991613¢
const MEDINA: Medina = 1 / 21 * computeCentsFromPitch(APOTOME) as Medina       // 5.41357171705¢

const INA_SIZES: Record<JiNotationLevel, Cents> = JI_NOTATION_LEVEL_EDAS.reduce(
    (
        jiNotationLevelEdaStepSizes: Record<JiNotationLevel, Cents>,
        jiNotationLevelEda: Ed<Apotome>,
        index: number,
    ): Record<JiNotationLevel, Cents> =>
        ({
            ...jiNotationLevelEdaStepSizes,
            [ JI_NOTATION_LEVELS[ index ] ]: computeCentsFromPitch((APOTOME)) / jiNotationLevelEda,
        }),
    {} as Record<JiNotationLevel, Cents>,
) // 5.41357171705¢, 2.41882991613¢, 1.96008631134¢, 0.48791848093¢, 0.14052534741¢

export {
    TINA,
    MINA,
    ULTRINA,
    HIGHINA,
    MEDINA,
    INA_SIZES,
}
