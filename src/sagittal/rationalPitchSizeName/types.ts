import { IO, Name } from "../../general"

interface SizeCategoryOptions {
    abbreviated?: boolean,
}

interface SizeCategory {
    name: Name<SizeCategory>,
    abbreviation: IO,
}

export {
    SizeCategory,
    SizeCategoryOptions,
}
