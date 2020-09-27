import { Cents, Id, Name, PotentiallyIrrationalNum } from "../../../general"
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
    MEDIUM = "medium",          // Corresponds closely with Athenian symbol subset
    HIGH = "high",              // Corresponds closely with Promethean symbol subset
    ULTRA = "ultra",            // Corresponds closely with Herculean symbol subset
    EXTREME = "extreme",        // Corresponds closely with Olympian symbol subset
    INSANE = "insane",          // Corresponds closely with Magrathean symbol subset
}

type CommaMean = PotentiallyIrrationalNum & {
    name: Name<CommaMean>,
}

type InaMidpoint = PotentiallyIrrationalNum & {
    name: Name<InaMidpoint>,
}

type Bound = InaMidpoint | CommaMean | SizeCategoryBound

type JiNotationBound = Bound & {
    id: Id<JiNotationBound>,
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
    JiNotationBound,
    Ina,
    BoundType,
    CommaMean,
    InaMidpoint,
    Bound,
}
