# Green-Got design system

Documentation : [https://green-got.github.io/web-design-system](https://green-got.github.io/web-design-system)
npm package : [https://www.npmjs.com/package/@green-got/web-design-system](https://www.npmjs.com/package/@green-got/web-design-system)

## Getting started

Run `pnpm i @green-got/web-design-system`. (Please use pnpm to avoid having multiple lock files.)

```TypeScript
import { Button } from '@green-got/web-design-system';

[...]
    <Button />
[...]
```

## Contribute

To commit, run `pnpm commit` to commit staged files and follow the instructions.

To deploy a new version of the documentation, run `pnpm build-docs` and follow the instructions.

To publish to npm, update the version of the package and push on main. Follow semver to update your versions : [https://semver.org/](https://semver.org/).
