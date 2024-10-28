### Hexlet tests and linter status:

[![Actions Status](https://github.com/Kos1la/backend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Kos1la/backend-project-46/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/108244df960d0abe7e8a/test_coverage)](https://codeclimate.com/github/Kos1la/backend-project-46/test_coverage)
[![hexlet-check](https://github.com/Kos1la/backend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Kos1la/backend-project-46/actions/workflows/hexlet-check.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/108244df960d0abe7e8a/maintainability)](https://codeclimate.com/github/Kos1la/backend-project-46/maintainability)

Знакомство с программой "Вычислитель отличий" :
"Вычислитель отличий" принимает на вход два файла одинакового формата: JSON, YAML(YML) и после имплементации возвращает разницу в одном из трех стилей:

'stylish' — когда сравнение будет производиться построчно и все отличия первого файла от второго будут промаркированы "+" или "-".  
'plain' — текстовое описание атрибутов в формате что и куда добавилось/изменилось/удалилось.  
'json' — перевод разницы между файлами в формат JSON.
Запуск программы:
В общем виде схема запуска выглядит следующим образом:

gendiff filepath1 filepath2
где:

gendiff — быстрая команда для сравнения файла
filepath1 — путь к первому файлу, который вы хотите сравнить.
filepath2 — путь ко второму файлу, с которым проводится сравнение.

Файлы для сравнения для удобства помещены в папку фикстур и в коде данный момент не зашит, поэтому необходимо при запуске указывать папку, в которой лежит файл:

./**fixtures**/file1.json
С учетом уточнения файловых путей наша команда для запуска "Вычислитель отличий" должна выглядеть так:

gendiff ./**fixtures**/file1.json ./**fixtures**/file2.json
Стиль:
По умолчанию стиль вывода - 'stylish', поэтому два варианта вызова, указанных ниже - эквивалентны.

gendiff ./**fixtures**/file1.json ./**fixtures**/file2.json
gendiff --format stylish ./**fixtures**/file1.json ./**fixtures**/file2.json
Вывод в формате 'plain':

gendiff --format 'plain' ./**fixtures**/file1.json ./**fixtures**/file2.json
Вывод в формате 'json':

gendiff --format 'json' ./**fixtures**/file1.json ./**fixtures**/file2.json

[![asciicast](https://asciinema.org/a/3XeXIotmroB7gmGu3aOV2Zk8M.svg)](https://asciinema.org/a/3XeXIotmroB7gmGu3aOV2Zk8M)
