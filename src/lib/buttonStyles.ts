// Inspired by rehype-pretty-code (https://github.com/rehype-pretty/rehype-pretty-code).
// Modified by adding support for Shiki themes, CSS Variables and dark mode.

export function buttonStyles({
  successIcon = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
  copyIcon = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`,
  display,
  cssVariables = `:root {
      --border-color: #e2e2e3;
      --background-color: #f6f6f7;
      --hover-background-color: #ffff;
      --dark-background-color: #202127;
      --dark-border-color: #2e2e32;
      --dark-background-color-hover: #1b1b1f;
      --dark-border-color-hover: #2e2e32;
      --button-top: 12px;
      --button-right: 12px;
      --button-z-index: 3;
      --button-border-radius: 4px;
      --button-width: 30px;
      --button-height: 30px;
      --button-ready-icon-width: 20px;
      --button-ready-icon-height: 20px;
      --button-success-icon-width: 20px;
      --button-success-icon-height: 20px;
      }`,
}: {
  successIcon?: string
  copyIcon?: string
  display?: string
  cssVariables?: string
}) {
  let buttonStyle
          = `${cssVariables}
      pre:has(code) {
          position: relative;
      }
      
      pre button.shiki-transformer-button-copy {
          position: absolute;
          top: var(--button-top);
          right: var(--button-right);
          z-index: var(--button-z-index);
          border: 1px solid var(--border-color);
          border-radius: var(--button-border-radius);
          width: var(--button-width);
          height: var(--button-height);
          display: flex;
          justify-content: center;
          place-items: center;
          background-color: var(--background-color);
          cursor: pointer;
          background-repeat: no-repeat;
          transition: background .25s, opacity .25s;
          opacity: 1;
          &:hover {
              background-color: var(--hover-background-color);
          }
      
          & span {
              width: 100%;
              aspect-ratio: 1 / 1;
              background-repeat: no-repeat;
              background-position: center;
              background-size: cover;
          }
      
          & .ready {
              width: var(--button-ready-icon-width);
              background: none;
              border: none;
              height: var(--button-ready-icon-height);
              background-image: url("${copyIcon}");
          }
      
          & .success {
              display: none;
              width: var(--button-success-icon-width);
              height: var(--button-success-icon-height);
              background-image: url("${successIcon}");
          }
      
          &.shiki-transformer-button-copied {
              & .success {
                  display: block;
              }
      
              & .ready {
                  display: none;
              }
          }
      }
      @media screen and (prefers-color-scheme: dark) {
       pre button.shiki-transformer-button-copy {
          background-color: var(--dark-background-color);
          border: 1px solid var(--dark-border-color);
       }
      
        pre button.shiki-transformer-button-copy:hover {
          background-color: var(--dark-background-color);
          border: 1px solid var(--dark-border-color);
       }
      
        .shiki,
        .shiki span {
          color: var(--shiki-dark) !important;
          background-color: var(--shiki-dark-bg) !important;
          font-style: var(--shiki-dark-font-style) !important;
          font-weight: var(--shiki-dark-font-weight) !important;
          text-decoration: var(--shiki-dark-text-decoration) !important;
        }
      }
      
      .dark pre button.shiki-transformer-button-copy {
        background-color: var(--dark-background-color);
        border: 1px solid var(--dark-border-color);
      }
      
      .dark pre button.shiki-transformer-button-copy:hover {
        background-color: var(--dark-background-color-hover);
        border: 1px solid var(--dark-border-color-hover);
      }
      html.dark .shiki,
      html.dark .shiki span {
        color: var(--shiki-dark) !important;
        background-color: var(--shiki-dark-bg) !important;
        font-style: var(--shiki-dark-font-style) !important;
        font-weight: var(--shiki-dark-font-weight) !important;
        text-decoration: var(--shiki-dark-text-decoration) !important;
      }
      
      html.dark pre button.shiki-transformer-button-copy {
      & .ready {
        background-color: var(--dark-background-color) !important;
      }
        & .success {
        background-color: var(--dark-background-color) !important;
      }
      }
      
      html.dark pre button.shiki-transformer-button-copy:hover {
      & .ready {
        background-color: var(--dark-background-color-hover) !important;
      }
      
      & .success {
        background-color: var(--dark-background-color-hover) !important;
      }
      }
      `

  if (display === 'hover') {
    buttonStyle += `
      pre button.shiki-transformer-button-copy {
        opacity: 0
      }
  
      pre:hover button.shiki-transformer-button-copy {
        opacity: 1
      }
      `
  }
  else {
    buttonStyle += `
          pre button.shiki-transformer-button-copy {
            opacity: 1
          }
          `
  }
  return buttonStyle
}
