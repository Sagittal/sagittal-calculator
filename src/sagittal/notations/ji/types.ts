import { Cents, Id, PotentiallyNonJiPitch } from "../../../general"

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
    MEDIUM = "medium",          // corresponds closely with Athenian symbol subset
    HIGH = "high",              // corresponds closely with Promethean symbol subset
    ULTRA = "ultra",            // corresponds closely with Herculean symbol subset
    EXTREME = "extreme",        // corresponds closely with Olympian symbol subset
    INSANE = "insane",          // corresponds closely with Magrathean symbol subset
}

// TODO: wait.. what's the difference between this and a BoundPosition?
//  should this not just extend that? okay, if you do that, you'll force each one to have a name too.
//  which I think is cool. but you don't have to worry about that yet.
type JiNotationBound = PotentiallyNonJiPitch & {
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
}
