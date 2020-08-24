import { dig } from "./dig"
import { Sortable, SortOptions } from "./types"

const sort = <T>(array: T[], { by, descending }: SortOptions = {}): T[] => {
    if (by) {
        (array as unknown as Sortable[]).sort((element: Sortable, nextElement: Sortable) => {
            const nextSorter = dig(nextElement, by) as number | string
            const sorter = dig(element, by) as number | string
            return descending ?
                nextSorter > sorter ? 1 :
                    nextSorter < sorter ? -1 : 0 :
                sorter > nextSorter ? 1 :
                    sorter < nextSorter ? -1 : 0
        })
    } else {
        (array as unknown as Array<number | string>).sort((element: number | string, nextElement: number | string) => {
            return descending ?
                nextElement > element ? 1 :
                    nextElement < element ? -1 : 0 :
                element > nextElement ? 1 :
                    element < nextElement ? -1 : 0
        })
    }

    return array
}

export {
    sort,
}
