### Hexlet tests and linter status:

[![Actions Status](https://github.com/Kos1la/backend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Kos1la/backend-project-46/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/108244df960d0abe7e8a/test_coverage)](https://codeclimate.com/github/Kos1la/backend-project-46/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/108244df960d0abe7e8a/maintainability)](https://codeclimate.com/github/Kos1la/backend-project-46/maintainability)

[![asciicast](https://asciinema.org/a/3XeXIotmroB7gmGu3aOV2Zk8M.svg)](https://asciinema.org/a/3XeXIotmroB7gmGu3aOV2Zk8M)

# Difference Calculator

**Difference Calculator** — is a tool for comparing JSON and YAML files. It supports three output formats:

- **stylish** — line-by-line with + or - markers
- **plain** — text description of changes
- **json** — JSON format of differences

## Usage

To run:

```bash
gendiff <filepath1> <filepath2>
```

Example using files in the fixtures folder:

```bash
gendiff ./fixtures/file1.json ./fixtures/file2.json
```

By default, the output is in stylish format. Specify format examples:

```bash
gendiff --format plain ./fixtures/file1.json ./fixtures/file2.json
gendiff --format json ./fixtures/file1.json ./fixtures/file2.json
```
