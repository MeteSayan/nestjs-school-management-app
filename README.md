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
# For the get all lessons only with name and startDate
query{
  lessons{
    name
    startDate
  }
}
```

```bash
# For create lesson
mutation{
  createLesson(
    createLessonInput:{
     name: "Nestjs Class"
     startDate: "2023-08-08T08:00:00Z"
     endDate: "2023-08-08T08:00:00Z"
    }
  ){
    name
    id
  }
}
```

```bash
# Get Lesson By Id
query{
  lesson (id: "4f5bee76-323e-454d-9cc8-70bd73f95095"){
    name
    startDate
  }
}
```

```bash
# For the get all students
query{
  students{
    firstName
    lastName
  }
}
```

```bash
# Get Student By Id
query{
  student (id: "52f2de32-98e6-44c5-a96c-25394e06cfd3"){
    firstName
    lastName
  }
}
```

```bash
# For create student
mutation{
  createStudent(
    createStudentInput:{
      firstName: "Mete",
      lastName: "Sayan"
    }){
    id
    firstName
    lastName
  }
}
```

```bash
# Assign students to lesson
mutation{
  assignStudentsToLesson(
    assignStudentsToLessonInput:{
      lessonId: "e12e880c-69cd-4fd2-8b1f-a6e60a0412ba",
      studentIds: [
        "8fec513c-0b65-4d97-a76b-a082e4a13683",
        "52f2de32-98e6-44c5-a96c-25394e06cfd3"
      ]
    }
  ){
    name
    startDate
    endDate
  }
}
```
