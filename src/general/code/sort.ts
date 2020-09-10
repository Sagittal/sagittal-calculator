import { Integer } from "../math"
import { dig } from "./dig"
import { isCloseTo } from "./isCloseTo"
import { isNumber, isUndefined } from "./typeGuards"
import { Maybe, Sortable, SortOptions } from "./types"

const isNotClose = (a: number | string, b: number | string, precision: Maybe<Integer>) => {
    return isUndefined(precision) ?
        true :
        isNumber(a) && isNumber(b) ?
            !isCloseTo(a, b)
            : true
}

const sort = <T>(array: T[], { by, descending, precision }: SortOptions = {}): T[] => {
    if (by) {
        (array as unknown[] as Sortable[])
            .sort((element: Sortable, nextElement: Sortable) => {
                const nextSorter = dig(nextElement, by) as number | string
                const sorter = dig(element, by) as number | string
                const notClose = isNotClose(sorter, nextSorter, precision)

                return descending ?
                    nextSorter > sorter && notClose ? 1 :
                        nextSorter < sorter && notClose ? -1 : 0 :
                    sorter > nextSorter && notClose ? 1 :
                        sorter < nextSorter && notClose ? -1 : 0
            })
    } else {
        (array as unknown[] as Array<number | string>)
            .sort((element: number | string, nextElement: number | string) => {
                const notClose = isNotClose(element, nextElement, precision)

                return descending ?
                    nextElement > element && notClose ? 1 :
                        nextElement < element && notClose ? -1 : 0 :
                    element > nextElement && notClose ? 1 :
                        element < nextElement && notClose ? -1 : 0
            })
    }

    return array
}

export {
    sort,
}
