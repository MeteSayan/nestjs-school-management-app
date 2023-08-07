<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

Basic Nestjs School Management APP With GraphQL + MongoDB + TypeORM

## Installation

```bash
npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## GraphQL

### Url

```bash
http://localhost:3000/graphql
```

### Query Examples

```bash
# For the get only lesson name and startDate 
query{
  lesson{
    name
    startDate
  }
}
```
