## Word Quest (A wordle clone)

This project helped me solidify my understanding of Vue3 and its Composition API.

My goal was to replicate the core gameplay while adding a few features to enhance the experience.

List of five letter words gotten from [stanford](https://www-cs-faculty.stanford.edu/~knuth/sgb-words.txt)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Setup

1. Clone this repository

```sh
git clone https://github.com/efezinoidisi/word-quest.git
cd word-quest
```

2. Install project dependencies

```sh
npm install
```

3. Compile and Hot-Reload for Development

```sh
npm run dev
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```
