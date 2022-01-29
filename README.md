[![Actions Status](https://github.com/yurykurylovich/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/yurykurylovich/frontend-project-lvl2/actions)
[![Github Actions](https://github.com/yurykurylovich/frontend-project-lvl2/workflows/Node.js%20CI/badge.svg)](https://github.com/yurykurylovich/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/b77d20f8ade60f93ecdc/maintainability)](https://codeclimate.com/github/yurykurylovich/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b77d20f8ade60f93ecdc/test_coverage)](https://codeclimate.com/github/yurykurylovich/frontend-project-lvl2/test_coverage)

# Difference Generator
CLI app, which compares two configuration files and shows a difference.
The utility supports the following input data formats: json, yaml/yml. The output report can be generated in one of the following formats: stylish (default), plain, json.

## Usage explanation

```
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
-V, --version        output the version number
-f, --format [type]  output format (default: "stylish")
-h, --help           display help for command
```

## Examples

### Comparison JSON files (default output)

[![asciicast](https://asciinema.org/a/hc8R4btpf5A2EsSEe34HfSWm3.svg)](https://asciinema.org/a/hc8R4btpf5A2EsSEe34HfSWm3)

### Comparison YAML files (plain output)

[![asciicast](https://asciinema.org/a/EAZvM4S5f7OxvmvIVpZubfmFf.svg)](https://asciinema.org/a/EAZvM4S5f7OxvmvIVpZubfmFf)
  
### Comparison YAML and JSON files (JSON output)

[![asciicast](https://asciinema.org/a/xqpITA0csB3Jl9oXCS1mRzID9.svg)](https://asciinema.org/a/xqpITA0csB3Jl9oXCS1mRzID9)
