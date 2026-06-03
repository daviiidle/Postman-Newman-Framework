# Asset Contract

This repository models the existing Postman/Newman way of working that the decoupling framework ingests.

## Required Folders

- `collections/`: Postman collection JSON files.
- `environments/`: Postman environment JSON files.
- `data/`: Newman iteration data.
- `newman/`: Newman runner configuration.

## Consumer

`Postman-Decoupling-Framework` checks out this repository during CI and imports the collections to generate:

- Gherkin features
- JSON test data
- WireMock stub mappings
- CI artifacts

This keeps the source test assets decoupled from the framework that consumes them.

