import { Cents, Id, Name, NumericProperties, Scamon } from "../../../general"
import { SizeCategoryBound } from "../../ji"

enum BoundType {
    INA_MIDPOINT = "inaMidpoint",
    COMMA_MEAN = "commaMean",
    SIZE_CATEGORY_BOUND = "sizeCategoryBound",
}

type Tina = Cents & { _InaBrand: "Tina" }
type Mina = Cents & { _InaBrand: "Mina" }
type Ultrina = Cents & { _InaBrand: "Ultrina" }
type Highina = Cents & { _InaBrand: "Highina" }
type Medina = Cents & { _InaBrand: "Medina" }

type Ina = Cents & { _InaBrand: "Tina" | "Mina" | "Ultrina" | "Highina" | "Medina" }

enum JiNotationLevel {
    MEDIUM = "medium",          // Corresponds closely with Athenian flacco subset
    HIGH = "high",              // Corresponds closely with Promethean flacco subset
    ULTRA = "ultra",            // Corresponds closely with Herculean flacco subset
    EXTREME = "extreme",        // Corresponds closely with Olympian flacco subset
    INSANE = "insane",          // Corresponds closely with Magrathean flacco subset
}

type CommaMean<T extends NumericProperties = {}> = {
    name: Name<CommaMean>,
    pitch: Scamon<T & { rational: false }>,
}

type InaMidpoint<T extends NumericProperties = {}> = {
    name: Name<InaMidpoint>,
    pitch: Scamon<T & { rational: false }>,
}

type BoundClass<T extends NumericProperties = {}> = InaMidpoint<T> | CommaMean<T> | SizeCategoryBound<T>

type JiNotationBoundClass<T extends NumericProperties = {}> = BoundClass<T> & {
    id: Id<JiNotationBoundClass>,
    jiNotationLevels: JiNotationLevel[],
    boundType: BoundType,
}

export {
    Tina,
    Mina,
    Ultrina,
    Highina,
    Medina,
    JiNotationLevel,
    JiNotationBoundClass,
    Ina,
    BoundType,
    CommaMean,
    InaMidpoint,
    BoundClass,
}
