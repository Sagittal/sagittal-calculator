import { dig } from "./dig"
import { Sortable, SortOptions } from "./types"

const sort = <T>(array: T[], { by, descending }: SortOptions = {}): T[] => {
    if (by) {
        (array as unknown as Sortable[]).sort((element: Sortable, nextElement: Sortable) => {
            return descending ?
                dig(nextElement, by) as number | string > (dig(element, by) as number | string) ? 1 : -1 :
                dig(element, by) as number | string > (dig(nextElement, by) as number | string) ? 1 : -1
        })
    } else {
        (array as unknown as Array<number | string>).sort((element: number | string, nextElement: number | string) => {
            return descending ?
                nextElement > element ? 1 : -1 :
                element > nextElement ? 1 : -1
        })
    }

    return array
}

export {
    sort,
}
