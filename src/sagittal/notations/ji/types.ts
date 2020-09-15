import { Cents, Id } from "../../../general"
import { SymbolClass } from "../types"

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

interface JiNotationSymbolClassMetadata {
    // TODO: perhaps this should be stored outside of here, other way around
    //  i.e. maybe the JI notation is just a list of Sagittal ids
    introducingJiNotationLevel: JiNotationLevel,
    mina: Mina,
}

interface JiNotationSymbolClass extends SymbolClass, JiNotationSymbolClassMetadata {
}

interface JiNotationBound {
    id: Id<JiNotationBound>,
    jiNotationLevels: JiNotationLevel[],
    cents: Cents,
}

export {
    JiNotationSymbolClass,
    Tina,
    Mina,
    Ultrina,
    Highina,
    Medina,
    JiNotationLevel,
    JiNotationBound,
    Ina,
    JiNotationSymbolClassMetadata,
}
