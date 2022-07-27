# SimpleListApp

This project is a frontend application that shows random photo gallery, favorites photos

## Getting started

For running application install all dependencies throw `npm install` and run `npm start`.

## Architecture decisions

### Modules

Application includes following module types:

- Features (lazy-loaded for better performance)
- Core (includes main components and logic which are reused throw all application)
- Shared (includes reused components)

### State Management

Application uses NgRx architecture under the hood, including Actions, Effects, Reducers and Selectors which communicate with each other.
