# Current Package Version

Gives the version of the package that you are in

```bash
$ current-package-version
1.0.0
```

Useful for stuff like auto-tagging git commits.

```
git tag v`current-package-version` -am "cool release note, bro"
```


Can also be used programmatically.

```
const { currentPackageVersion } = require('@invisible/current-package-version')

console.log(currentPackageVersion())
```
