# sagittal-calculator
an online calculator for the Sagittal notation system

## development

Add to your `.git/hooks/pre-commit`:

```
#!/bin/sh

set -e

tsc
npm run lint
```

Run Jasmine tests written in Typescript with Webstorm by adding the following to `Node options` 
in the Jasmine run configuration template: `-r ts-node/register/transpile-only`.

To set a new context for the run configuration, set a hotkey for `Run context configuration`.
To re-run the existing configuration, set a hotkey for `Run`.
