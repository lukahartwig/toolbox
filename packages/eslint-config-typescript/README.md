# ESLint Config

Personal eslint configuration I use in all my projects. It is meant to be used
with `react`, `prettier`, `typescript` and `jest`.

## Usage

Create a `.eslintrc.js` and extend this configuration.

```js
module.exports = {
  extends: '@lukahartwig/eslint-config-typescript',
};
```

Add the following scripts to the `package.json`.

```json
{
  "lint": "eslint --ext js,jsx,ts,tsx --fix ."
}
```
