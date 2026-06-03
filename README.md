# Postman-Newman-Framework

Source Postman/Newman API testing assets for the Placement domain.

This repository represents the current team-owned way of working: Postman collections, Newman environments, iteration data, and CI scripts. It is intentionally separate from `Postman-Decoupling-Framework`, which consumes this repository and generates framework-friendly outputs.

## Structure

```text
Postman-Newman-Framework/
  collections/
  environments/
  data/
  newman/
  scripts/
  docs/
```

## Commands

Install dependencies:

```bash
npm install
```

List available assets:

```bash
npm run inspect
```

Run the Newman suite:

```bash
npm run newman:ci
```

Run against local environment settings:

```bash
npm run newman:local
```

## Integration

`Postman-Decoupling-Framework` should check out this repository during its scheduled CI run and execute:

```bash
dotnet run --project src/PDF.Cli -- inspect --source external/Postman-Newman-Framework
dotnet run --project src/PDF.Cli -- import --source external/Postman-Newman-Framework --output output/generated
```

