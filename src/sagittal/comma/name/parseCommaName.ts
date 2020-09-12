import { Comma, Formatted, isUndefined, Maybe, Name, parseRatio, Ratio, TwoThreeFreeClass } from "../../../general"
import { SIZE_CATEGORIES } from "./sizeCategories"
import { SizeCategoryName } from "./types"

// TODO: NAME FOR THE TYPE OF RATIO THAT IS 2,3-FREE BUT NOT NECESSARILY SUPER THAT IS IN COMMA NAMES
//  this ratio does not stipulate being super, which is maybe an argument for it not being directed after all...
//  i.e. that if the comma name parsed into its 2,3-free class, that might be nice. 
//  do we know whether it's possible for in a size category to have both a e.g. 1/5 and a 5/1, though? if so, this 
//  wouldn't work, or in other words, this could not get away with being a 2,3-free class, and so shouldn't try to be
//  - note, however, that when you return the 2's and 3's to this to make it comma-sized, of the size of its name,
//  it WILL be super! subtle, but important point. you can observe this difference in ordering in
//  commaName.ts and twoThreeFreeClass.ts
//  - this directed 2,3-free ratio which is NOT a 2,3-free class but which is one half of comma names...
//  does it need a name, as a thing? a (Directed)CommaNameRatio?
const parseCommaName = (
    commaName: Name<Comma>
): { twoThreeFreeRatio: Ratio<{ rough: 5 }>, sizeCategoryName: SizeCategoryName } => {
    const twoThreeFreeClassPartOfCommaName = commaName.replace(/[a-zA-Z+\-]/g, "") as Formatted<TwoThreeFreeClass>
    const sizeCategoryPartOfCommaName = commaName.replace(twoThreeFreeClassPartOfCommaName, "").replace(/-/, "")

    const twoThreeFreeRatio = 
        parseRatio(twoThreeFreeClassPartOfCommaName as Formatted as Formatted<Ratio<{ rough: 5 }>>)

    let maybeSizeCategoryName: Maybe<SizeCategoryName> = undefined

    for (const sizeCategory of SIZE_CATEGORIES) {
        if (
            sizeCategoryPartOfCommaName === sizeCategory.name ||
            sizeCategoryPartOfCommaName === sizeCategory.abbreviation
        ) {
            maybeSizeCategoryName = sizeCategory.name
        }
    }

    if (isUndefined(maybeSizeCategoryName)) {
        throw new Error(`No size category found for comma name ${commaName}.`)
    }

    return { twoThreeFreeRatio, sizeCategoryName: maybeSizeCategoryName }
}

export {
    parseCommaName,
}
