# generator-tradie-react

Generator for scaffolding `react` apps with `tradie`.

## Installation

```bash
npm install -g yo
npm install -g generator-tradie-react
```

## Usage

```bash
yo tradie-react --type=<type>
```

Where type is one of:

##### react

Boilerplate for very simple app.

Includes `react`.

- linting
- bundling of scripts, including:
  - transpilation of `ES2015` and `JSX`
  - source maps
  - removal of dead code
  - minification
- bundling of styles, including:
  - `@import`ing style files from npm packages
  - `@import`ing style files once to avoid redundant bytes
  - copying assets and rewriting asset URLs
  - automatic addition of vendor prefixes
  - minification
- testing of scripts, including:
  - `chai`'s expect for assertions
  - shallow rendering of React components
  - jQuery like assertions on React virtual-dom trees
- [live reloading](https://www.npmjs.com/package/tradie-plugin-livereload)
- [static server](https://www.npmjs.com/package/tradie-plugin-serve)

##### react-redux

Boilerplate for a more complex app.

Includes `react-router` for routing and `redux` for managing application state.

- linting
- bundling of scripts, including:
  - transpilation of `ES2015` and `JSX`
  - source maps
  - removal of dead code
  - minification
- bundling of styles, including:
  - `@import`ing style files from npm packages
  - `@import`ing style files once to avoid redundant bytes
  - copying assets and rewriting asset URLs
  - automatic addition of vendor prefixes
  - minification
- testing of scripts, including:
  - `chai`'s expect for assertions
  - `sinon` and `sinon-chai` for assertions on spies and stubs
  - shallow rendering of React components
  - jQuery like assertions on React virtual-dom trees
- [live reloading](https://www.npmjs.com/package/tradie-plugin-livereload)
- [static server](https://www.npmjs.com/package/tradie-plugin-serve)

##### react-redux-universal

Boilerplate for a UniversalJS app.

Includes `react-router` for routing, `redux` for managing application state and `redial` for pre-fetching data.

- linting
- bundling of scripts, including:
  - transpilation of `ES2015` and `JSX`
  - source maps
  - removal of dead code
  - minification
- bundling of styles, including:
  - `@import`ing style files from npm packages
  - `@import`ing style files once to avoid redundant bytes
  - copying assets and rewriting asset URLs
  - automatic addition of vendor prefixes
  - minification
- testing of scripts, including:
  - `chai`'s expect for assertions
  - `sinon` and `sinon-chai` for assertions on spies and stubs
  - shallow rendering of React components
  - jQuery like assertions on React virtual-dom trees
- [live reloading](https://www.npmjs.com/package/tradie-plugin-livereload)
- server rendering

>