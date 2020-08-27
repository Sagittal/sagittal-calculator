import { floor, round } from "../math"
import { Ms } from "../types"
import { Formatted } from "./types"

const formatTime = (ms: Ms): Formatted<Ms> => {
    const milliseconds = round(ms % 1000)
    const seconds = floor((ms / 1000) % 60)
    const minutes = floor((ms / (1000 * 60)) % 60)
    const hours = floor((ms / (1000 * 60 * 60)) % 24)
    const days = floor((ms / (1000 * 60 * 60 * 24)) % 365.25)

    const parts = []

    if (days > 0) parts.push(`${days}d`)
    if (hours > 0 || days > 0) parts.push(`${hours}h`)
    if (minutes > 0 || hours > 0 || days > 0) parts.push(`${minutes}m`)
    if (seconds > 0 || minutes > 0 || hours > 0 || days > 0) parts.push(`${seconds}s`)
    if (milliseconds > 0 || seconds > 0 || minutes > 0 || hours > 0 || days > 0) parts.push(`${milliseconds}ms`)

    return parts.join(", ") as Formatted<Ms>
}

export {
    formatTime,
}
