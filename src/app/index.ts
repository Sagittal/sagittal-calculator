import Vex from "vexflow"

const VF = Vex.Flow

// This may be of assistance: https://github.com/0xfe/vexflow/wiki/The-VexFlow-Tutorial

const div = document.createElement("div")
document.body.appendChild(div)
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG)

// Configure the rendering context.
renderer.resize(500, 500)
const context = renderer.getContext()
context.setFont("Arial", 10).setBackgroundFillStyle("#eed")

// Create a stave of width 400 at position 10, 40 on the canvas.
const stave = new VF.Stave(10, 40, 400)

// Add a clef and time signature.
stave.addClef("treble").addTimeSignature("4/4")

// Connect it to the rendering context and draw!
stave.setContext(context).draw()

const notes = [
    // A quarter-note C.
    new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q"}),
    // .addAccidental(0, new VF.Accidental("accSagittal5CommaUp"))
    // .addAccidental(0, new VF.Accidental("accSagittalGrave")),

    // A quarter-note D.
    new VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "q"}),

    // A quarter-note rest. Note that the key (b/4) specifies the vertical position of the rest.
    new VF.StaveNote({clef: "treble", keys: ["b/4"], duration: "qr"}),

    // A C-Major chord.
    new VF.StaveNote({clef: "treble", keys: ["c/4", "e/4", "g/4"], duration: "q"}),
]

// Create a voice in 4/4 and add the notes from above
const voice = new VF.Voice({num_beats: 4, beat_value: 4})
voice.addTickables(notes)

// Format and justify the notes to 400 pixels.
const formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400)
voice.draw(context, stave)
