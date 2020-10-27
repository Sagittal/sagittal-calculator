import {Cents, CommaMean, Name, NumericProperties, Scamon} from "../../../general"
import {SizeCategoryBound} from "../../ji"
import {BoundClass, BoundClassId} from "../../notation"

enum BoundType {
    INA_MIDPOINT = "inaMidpoint",
    COMMA_MEAN = "commaMean",
    SIZE_CATEGORY_BOUND = "sizeCategoryBound",
}

type Tina = Cents & {_InaBrand: "Tina"}
type Mina = Cents & {_InaBrand: "Mina"}
type Ultrina = Cents & {_InaBrand: "Ultrina"}
type Highina = Cents & {_InaBrand: "Highina"}
type Medina = Cents & {_InaBrand: "Medina"}

type Ina = Cents & {_InaBrand: "Tina" | "Mina" | "Ultrina" | "Highina" | "Medina"}

enum JiNotationLevel {
    MEDIUM = "medium",          // Corresponds closely with Athenian symbol subset
    HIGH = "high",              // Corresponds closely with Promethean symbol subset
    ULTRA = "ultra",            // Corresponds closely with Herculean symbol subset
    EXTREME = "extreme",        // Corresponds closely with Olympian symbol subset
    INSANE = "insane",          // Corresponds closely with Magrathean symbol subset
}

type InaMidpoint<T extends NumericProperties = {}> = {
    name: Name<InaMidpoint>,
    pitch: Scamon<T & {rational: false}>,
}

type JiNotationBound<T extends NumericProperties = {}> = InaMidpoint<T> | CommaMean<T> | SizeCategoryBound<T>

// TODO: JI NOTATION BOUND CLASS TYPE IS ... CONFUSING AND THEREFORE BAD. PLEASE IMPROVE SOMEHOW.
type JiNotationBoundClass<T extends NumericProperties = {}> =
    JiNotationBound<T> &
    BoundClass<T> &
    {
        jiNotationLevels: JiNotationLevel[],
        boundType: BoundType,
    }

type JiNotationBoundClassEntry = [BoundClassId, JiNotationBoundClass]

export {
    Tina,
    Mina,
    Ultrina,
    Highina,
    Medina,
    JiNotationLevel,
    JiNotationBound,
    JiNotationBoundClass,
    Ina,
    BoundType,
    InaMidpoint,
    JiNotationBoundClassEntry,
}
