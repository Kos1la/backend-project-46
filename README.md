### Hexlet tests and linter status:

[![Actions Status](https://github.com/Kos1la/backend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Kos1la/backend-project-46/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/108244df960d0abe7e8a/test_coverage)](https://codeclimate.com/github/Kos1la/backend-project-46/test_coverage)
[![hexlet-check](https://github.com/Kos1la/backend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Kos1la/backend-project-46/actions/workflows/hexlet-check.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/108244df960d0abe7e8a/maintainability)](https://codeclimate.com/github/Kos1la/backend-project-46/maintainability)

[![asciicast](https://asciinema.org/a/3XeXIotmroB7gmGu3aOV2Zk8M.svg)](https://asciinema.org/a/3XeXIotmroB7gmGu3aOV2Zk8M)

# Вычислитель отличий

**Вычислитель отличий** — это инструмент для сравнения файлов форматов JSON и YAML. Он поддерживает три стиля вывода разницы:

- **stylish** — построчно с маркировкой `+` или `-`
- **plain** — текстовое описание изменений
- **json** — разница в формате JSON

## Использование

Общая команда для запуска:

```bash
gendiff <filepath1> <filepath2>
```

Пример для сравнения файлов в папке fixtures:

```bash
gendiff ./fixtures/file1.json ./fixtures/file2.json
```

Опции стиля
По умолчанию вывод в стиле stylish. Примеры запуска с указанием формата:

```bash
gendiff --format plain ./fixtures/file1.json ./fixtures/file2.json
gendiff --format json ./fixtures/file1.json ./fixtures/file2.json
```
