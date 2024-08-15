### Hexlet tests and linter status:
[![Actions Status](https://github.com/aleksmakhanoff/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/aleksmakhanoff/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/12d2b99b06c45017c76f/maintainability)](https://codeclimate.com/github/aleksmakhanoff/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/12d2b99b06c45017c76f/test_coverage)](https://codeclimate.com/github/aleksmakhanoff/frontend-project-46/test_coverage)

h1 ***Вычислитель отличий***

**Описание проекта:**

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.

**Возможности утилиты:**

- Поддержка разных входных форматов: yaml, json
- Генерация отчета в виде plain, stylish и json

**Минимальные требования:**

- Node.js версия v20.12.1 (используемая при работе над проектом);

**Инструкция по установке и запуску:**

- Клонировать репозиторий с проектом, с помощью команды: git clone;
- Перейти в директорию с проектом, с помощью команды: cd <нужная директория>;
- Установить зависимости проекта, с помощью команды: npm ci (или make install);
- Установить пакет локально, с помощью команды: npm link;
- Запускать программу сравнений с помощью терминала через команду: gendiff;

Вывод справочной информации:

[![asciicast](https://asciinema.org/a/672237.svg)](https://asciinema.org/a/672237)

Пример работы формата stylish:

[![asciicast](https://asciinema.org/a/672238.svg)](https://asciinema.org/a/672238)

Пример работы формата plain:

[![asciicast](https://asciinema.org/a/672239.svg)](https://asciinema.org/a/672239)

Пример работы формата json:

[![asciicast](https://asciinema.org/a/672240.svg)](https://asciinema.org/a/672240)