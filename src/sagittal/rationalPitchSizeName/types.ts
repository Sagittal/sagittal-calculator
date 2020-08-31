import { Io, Name } from "../../general"

interface SizeCategoryOptions {
    abbreviated?: boolean,
}

interface SizeCategory {
    name: Name<SizeCategory>,
    abbreviation: Io,
}

export {
    SizeCategory,
    SizeCategoryOptions,
}
