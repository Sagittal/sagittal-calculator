import {
    APOTOME,
    Apotome,
    Cents,
    computeCentsFromPitch,
    Decimal,
    Ed,
    ONE,
    Quotient,
    scaleScamon,
    Scamon,
} from "../../../general"
import {EXTREME_EDA, HIGH_EDA, INSANE_EDA, JI_NOTATION_LEVEL_EDAS, MEDIUM_EDA, ULTRA_EDA} from "./levelEdas"
import {JI_NOTATION_LEVELS} from "./levels"
import {JiNotationLevelId} from "./types"

const TINA: Scamon<{rational: false}> = scaleScamon(
    APOTOME,
    [ONE, INSANE_EDA as Decimal<{integer: true}>] as Quotient<{rational: true}>,
)
const MINA: Scamon<{rational: false}> = scaleScamon(
    APOTOME,
    [ONE, EXTREME_EDA as Decimal<{integer: true}>] as Quotient<{rational: true}>,
)
const ULTRINA: Scamon<{rational: false}> = scaleScamon(
    APOTOME,
    [ONE, ULTRA_EDA as Decimal<{integer: true}>] as Quotient<{rational: true}>,
)
const HIGHINA: Scamon<{rational: false}> = scaleScamon(
    APOTOME,
    [ONE, HIGH_EDA as Decimal<{integer: true}>] as Quotient<{rational: true}>,
)
const MEDINA: Scamon<{rational: false}> = scaleScamon(
    APOTOME,
    [ONE, MEDIUM_EDA as Decimal<{integer: true}>] as Quotient<{rational: true}>,
)

const INA_CENTS_SIZES: Record<JiNotationLevelId, Cents> = JI_NOTATION_LEVEL_EDAS.reduce(
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

const TINA_CENTS: Cents = computeCentsFromPitch(TINA)          // 0.14052534741¢
const MINA_CENTS: Cents = computeCentsFromPitch(MINA)          // 0.48791848093¢
const ULTRINA_CENTS: Cents = computeCentsFromPitch(ULTRINA)    // 1.96008631134¢
const HIGHINA_CENTS: Cents = computeCentsFromPitch(HIGHINA)    // 2.41882991613¢
const MEDINA_CENTS: Cents = computeCentsFromPitch(MEDINA)      // 5.41357171705¢

export {
    TINA,
    MINA,
    ULTRINA,
    HIGHINA,
    MEDINA,
    INA_CENTS_SIZES,
    TINA_CENTS,
    MINA_CENTS,
    ULTRINA_CENTS,
    HIGHINA_CENTS,
    MEDINA_CENTS,
}
