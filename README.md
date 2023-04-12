
# Phone-Book-Graphql [![Known Vulnerabilities](https://snyk.io/test/github/fredmoreira/phone-book-graphql/badge.svg)](https://snyk.io/test/github/fredmoreira/phone-book-graphql)
A simple API GraphQL for experiencing testing frameworks
 
## Github Actions [![Build | Lint | Test](https://github.com/fredmoreira/phone-book-graphql/workflows/Build%20%7C%20Lint%20%7C%20Test/badge.svg)](https://github.com/fredmoreira/phone-book-graphql/actions?query=workflow%3A%22Build+%7C+Lint+%7C+Test%22)

## Requirements

* MongoDB
* Node & Npm


## Install && Run

It follows one step by step showing how to get the API running.

### Clone repository

```bash
git clone https://github.com/fredmoreira/phone-book-graphql.git
```

### Install 

```bash
npm i
```

**If you don't have the MongoDB database installed on your local machine, remember to run it via command line or another way before running the command below.**

```bash
npm start
```

## Runing integration tests

```bash
npm test
```

### Lint

```bash
npm run code:lint
```
### Code check

```bash
npm run code:check
```

### Prettier

```bash
npm run code:prettier
```
### Check vulnerabilities in dependencies

```bash
npm run snyk-protect
```

The *precommit* is done by *git hooks* by package [husky](https://github.com/typicode/husky).

Therefore, whenever a *commit* is done, the following script will be executed:

```bash
npm run code:lint && npm run code:prettier
```

Any improvement will always be welcome.  🚀 😄
