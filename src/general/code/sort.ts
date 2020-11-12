import {stringify} from "../io"
import {DEFAULT_PRECISION} from "./constants"
import {dig} from "./dig"
import {isCloseTo} from "./isCloseTo"
import {isNumber, isUndefined} from "./typeGuards"
import {Precision, Sortable, SortOptions} from "./types"

const isNotClose = (a: number | string, b: number | string, precision: Precision = DEFAULT_PRECISION): boolean => {
    return isNumber(a) && isNumber(b) ?
        !isCloseTo(a, b, precision)
        : true
}

const sort = <T>(array: T[], {by, descending, precision}: SortOptions = {}): T[] => {
    if (array.length === 0) return array

    if (!isUndefined(by)) {
        try {
            dig(array[0] as unknown as Sortable, by, {strict: true})
        } catch (e) {
            throw new Error(`"Attempted to sort array by ${stringify(by)}, however the elements do not have this property. Example element: ${stringify(array[0])}`)
        }

        (array as unknown[] as Sortable[])
            .sort((element: Sortable, nextElement: Sortable): number => {
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
            .sort((element: number | string, nextElement: number | string): number => {
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
