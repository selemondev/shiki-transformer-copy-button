 <p align="center">
<img align="center" src="https://raw.githubusercontent.com/selemondev/shiki-transformer-copy-button/master/assets/logo/shiki-logo.svg" />
<h1 align="center">
Shiki Copy Button Transformer ✨
</h1>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@selemondev/shiki-transformer-copy-button">
    <img alt="npm-version-src" src="https://img.shields.io/npm/v/@selemondev/shiki-transformer-copy-button/latest.svg?style=flat&colorA=020420&colorB=00DC82" />
  </a>
  <a href="https://npmjs.com/package/@selemondev/shiki-transformer-copy-button">
    <img alt="npm-downloads-src" src="https://img.shields.io/npm/dm/@selemondev/shiki-transformer-copy-button.svg?style=flat&colorA=020420&colorB=00DC82" />
  </a>
</p>

> [!NOTE]
>This project draws inspiration from two amazing projects: [shiki-transformer-copy-button](https://github.com/joshnuss/shiki-transformer-copy-button) and [rehype-pretty-code](https://github.com/rehype-pretty/rehype-pretty-code). Its goal is to combine the strengths of both while introducing additional features to support more advanced use cases.

Shiki Copy Button Transformer is a Shiki based transformer that adds a copy button. It is highly customizable and supports dark mode.

## Installation

```bash
npm install @selemondev/shiki-transformer-copy-button
```

## Usage

Import the `transformerCopyButton` transformer as shown below:

```ts
import { transformerCopyButton } from '@selemondev/shiki-transformer-copy-button'

const installationCode = `npm install @selemondev/shiki-transformer-copy-button"`

const html = await codeToHtml(installationCode, {
  lang: 'bash',
  theme: 'vitesse-light',
  transformers: [
    transformerCopyButton({
      duration: 3000,
      display: 'ready',
      successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
      copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`,
    })
  ]
})
```

## Features

1. Dark mode support 🌑

2. Highly customisable 🎨

3. Duration 🕑

4. Display mode 👀

## Props

| name          |     type      |           default         |       description             |
|:-------------:|:-------------:|:-------------------------:|   :-----------------:         |
|  duration   | `Number`      |         `3000`                | The time it takes for the copy icon to revert to its default state after the copy button is triggered. |
|  display   | `ready` | `hover`      |         `ready`           | If the display is set to `hover`, the copy button will be visible when the user interacts with the code block component. If set to `ready`, the copy button will always be visible!  |
|  cssVariables   | `string`      |       [Check them out here](./src/lib/buttonStyles.ts)         | To customise the copy button  |
|  copyIcon   | `string`      |         `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`                | The default copy svg icon |
|  successIcon   | `string`      |      `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`                | The default success svg icon that is display after the copy button is triggered.  |

## Credits go to these amazing projects

- [shiki-transformer-copy-button](https://github.com/joshnuss/shiki-transformer-copy-button) by Josh Nuss.

- [rehype-pretty-code](https://github.com/rehype-pretty/rehype-pretty-code) by rehype-pretty.
