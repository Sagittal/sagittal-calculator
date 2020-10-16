# sagittal-calculator
an online calculator for the Sagittal notation system

## development

You will need to install Node on your system, then clone down the repo and run `npm i`.

To see a list of available scripts, run `npm run`.

If you see a script you're interested in, learn its options with `npm run [script name] -- --help`.

### Additional helpful setup

Add to your `.git/hooks/pre-commit`:

```
#!/bin/sh

set -e

tsc
npm run lint
```

Run Jasmine tests written in TypeScript with Webstorm by adding the following to `Node options` 
in the Jasmine run configuration template: `-r ts-node/register/transpile-only`.

To set a new context for the run configuration, set a hotkey for `Run context configuration`.
To re-run the existing configuration, set a hotkey for `Run`.

The **DejaVu Sans Mono** font is recommended because it actually monospaces key characters such as "⟩" and subscript numbers.
Then also set your fallback font to **Bravura** so the unicode characters for Sagittal symbols such as "" will display. 
You may need to uncheck "Only show monospaced fonts" to get Bravura to appear in the list.
