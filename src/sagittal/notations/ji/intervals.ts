import {APOTOME, Apotome, Cents, computeCentsFromPitch, Ed, reciprocal} from "../../../general"
import {EXTREME_EDA, HIGH_EDA, INSANE_EDA, JI_NOTATION_LEVEL_EDAS, MEDIUM_EDA, ULTRA_EDA} from "./levelEdas"
import {JI_NOTATION_LEVELS} from "./levels"
import {Highina, JiNotationLevelId, Medina, Mina, Tina, Ultrina} from "./types"

const TINA: Tina = reciprocal(INSANE_EDA) * computeCentsFromPitch(APOTOME) as Tina              // 0.14052534741¢
const MINA: Mina = reciprocal(EXTREME_EDA) * computeCentsFromPitch(APOTOME) as Mina             // 0.48791848093¢
const ULTRINA: Ultrina = reciprocal(ULTRA_EDA) * computeCentsFromPitch(APOTOME) as Ultrina      // 1.96008631134¢
const HIGHINA: Highina = reciprocal(HIGH_EDA) * computeCentsFromPitch(APOTOME) as Highina       // 2.41882991613¢
const MEDINA: Medina = reciprocal(MEDIUM_EDA) * computeCentsFromPitch(APOTOME) as Medina        // 5.41357171705¢

const INA_SIZES: Record<JiNotationLevelId, Cents> = JI_NOTATION_LEVEL_EDAS.reduce(
    (
        jiNotationLevelEdaStepSizes: Record<JiNotationLevelId, Cents>,
        jiNotationLevelEda: Ed<Apotome>,
        index: number,
    ): Record<JiNotationLevelId, Cents> =>
        ({
            ...jiNotationLevelEdaStepSizes,
            [JI_NOTATION_LEVELS[index]]: computeCentsFromPitch((APOTOME)) / jiNotationLevelEda,
        }),
    {} as Record<JiNotationLevelId, Cents>,
)

export {
    TINA,
    MINA,
    ULTRINA,
    HIGHINA,
    MEDINA,
    INA_SIZES,
}
