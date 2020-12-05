import {Cents} from "@sagittal/general"
import {HIGHINA_CENTS, MEDINA_CENTS, MINA_CENTS, TINA_CENTS, ULTRINA_CENTS} from "./intervals"
import {Highinas, Medinas, Minas, Tinas, Ultrinas} from "./types"

const computeCentsFromTinas = (tinas: Tinas): Cents =>
    tinas * TINA_CENTS as Cents

const computeCentsFromMinas = (minas: Minas): Cents =>
    minas * MINA_CENTS as Cents

const computeCentsFromUltrinas = (ultrinas: Ultrinas): Cents =>
    ultrinas * ULTRINA_CENTS as Cents

const computeCentsFromHighinas = (highinas: Highinas): Cents =>
    highinas * HIGHINA_CENTS as Cents

const computeCentsFromMedinas = (medinas: Medinas): Cents =>
    medinas * MEDINA_CENTS as Cents

export {
    computeCentsFromTinas,
    computeCentsFromMinas,
    computeCentsFromUltrinas,
    computeCentsFromHighinas,
    computeCentsFromMedinas,
}
