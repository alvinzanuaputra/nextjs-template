# NextJS Project Template

<img
  src="./public/next.svg"
  alt="NextJS Logo"
  align="right"
  height="170"
  width="170"
/>

![License](https://img.shields.io/github/license/alvinzanuaputra/nextjs-template?color=%231AD7A4)

NextJS project boilerplate that sets rules for your project.

This boilerplate defines rules for sorting imports, classnames, pre-built utilities, pre-designed components

All rules are automatically fixable. It's safe!

## ✨ Features

Here are some of the major benefits of using the template:

✅ **Enhanced Readability for Improved Project Scalability 🔥**

✅ **Aesthetically Pleasing Design with Harmonious Structure ☄️**

✅ **Built-in Support for Dark Mode and Custom Themes 🌓**

✅ **Elimination of Duplicate Tailwind Classes ⚡️**

✅ **Effortless Integration of Pre-built and Custom Components 🚀**

✅ **Accessibility Ready with ARIA Support 📖**

✅ **Custom Tooltip, Button Variants, Skeleton Loading, Icons, and Many More Features!**

## 🔨 Quick Installation

Initialize a Next.js project with [template](https://nextjs.org/docs/app/api-reference/create-next-app):

```sh
npx create-next-app@latest -e https://github.com/alvinzanuaputra/nextjs-template
```

## 💿 Manual Installation

First create a Next.js app:

```sh
npx create-next-app@latest --ts --tailwind --eslint --app --src-dir --import-alias @/*
```

Next, install all dependencies needed:

```sh
npm install --save-dev @ianvs/prettier-plugin-sort-imports @typescript-eslint/parser eslint-config-prettier eslint-plugin-react eslint-plugin-tailwindcss prettier && npm install tailwind-merge tailwindcss-animate sharp clsx class-variance-authority lucide-react next-themes @radix-ui/react-tooltip @radix-ui/react-slot @radix-ui/react-separator
```

And then, create a couple config files:

<details>
    <summary><b>tsconfig.json</b></summary>

```json

"paths": {
    "@/*": ["./src/*"],
	"@/styles/*": ["./src/styles/*"],
	"@/lib/*": ["./src/lib/*"],
	"@/components/*": ["./src/components/*"],
	"@/ui/*": ["./src/components/ui/*"],
	"@/config/*": ["./src/config/*"],
	"@/types/*": ["./src/types/*"],
	"@/hooks/*": ["./src/hooks/*"],
}

```

</details>
<br />
<details>
    <summary><b>tailwind.config.json</b></summary>

```js
const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: `var(--radius)`,
                md: `calc(var(--radius) - 2px)`,
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ["var(--font-sans)", ...fontFamily.sans],
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}
```

</details>
<br />
<details>
    <summary><b>prettier.config.json</b></summary>

```js
/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
    endOfLine: "lf",
    printWidth: 80,
    tabWidth: 4,
    trailingComma: "all",
    singleQuote: false,
    semi: false,
    // This plugin's options
    importOrder: [
        "^(react/(.*)$)|^(react$)",
        "^(next/(.*)$)|^(next$)",
        "<THIRD_PARTY_MODULES>",
        "",
        "^types$",
        "^@/types/(.*)$",
        "^@/config/(.*)$",
        "^@/lib/(.*)$",
        "^@/hooks/(.*)$",
        "^@/ui/(.*)$",
        "^@/components/(.*)$",
        "^@/styles/(.*)$",
        "^@/app/(.*)$",
        "",
        "^[./]",
    ],
    importOrderSeparation: false,
    importOrderSortSpecifiers: true,
    importOrderMergeDuplicateImports: true,
    importOrderCombineTypeAndValueImports: true,
    importOrderBuiltinModulesToTop: true,
    importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
    importOrderTypeScriptVersion: "5.0.0",
}
```

</details>
<br />
<details>
    <summary><b>.eslintrc.json</b></summary>

```json
{
    "$schema": "https://json.schemastore.org/eslintrc",
    "root": true,
    "extends": [
        "next/core-web-vitals",
        "prettier",
        "plugin:tailwindcss/recommended"
    ],
    "plugins": ["tailwindcss"],
    "rules": {
        "@next/next/no-html-link-for-pages": "off",
        "react/jsx-key": "off",
        "tailwindcss/no-custom-classname": "off",
        "tailwindcss/classnames-order": "warn"
    },
    "settings": {
        "tailwindcss": {
            "callees": ["cn"],
            "config": "tailwind.config.js"
        }
    },
    "overrides": [
        {
            "files": ["*.ts", "*.tsx"],
            "parser": "@typescript-eslint/parser"
        }
    ]
}
```

</details>
<br />
<details>
    <summary><b>package.json</b></summary>

```json

  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "preview": "next build && next start",
    "typecheck": "tsc --noEmit",
    "format:write": "prettier --write \"**/*.{ts,tsx,mdx}\" --cache",
    "format:check": "prettier --check \"**/*.{ts,tsx,mdx}\" --cache"
  },

```

</details>

<br />

Lastly, copy the components and lib folder to your project and customize the theming through the globals.css. Your file structure should look like this:

```
📁 my-app
├─ 📁 node_modules
├─ 📁 public
│  ├─ 📁 json
│  ├─ 📁 img
├─ 📁 src
│  ├─ 📁 app
│  │  ├─ 📄 favicon.ico
│  │  ├─ 📄 layout.tsx
│  │  └─ 📄 page.tsx
│  ├─ 📁 components
│  │  ├─ 📁 ui
│  │  └─ 📁 utils
│  ├─ 📁 config
│  │  └─ 📄 site.ts
│  ├─ 📁 hooks
│  ├─ 📁 lib
│  │  ├─ 📄 fonts.ts
│  │  └─ 📄 utils.ts
│  ├─ 📁 middleware
│  ├─ 📁 styles
│  │  └─ 📄 globals.css
│  └─📁 types
├─ 📄 .eslintignore
├─ 📄 .eslintrc.json
├─ 📄 .gitignore
├─ 📄 .prettierignore
├─ 📄 next.config.js
├─ 📄 package-lock.json
├─ 📄 package.json
├─ 📄 postcss.config.js
├─ 📄 prettier.config.js
├─ 📄 README.md
├─ 📄 tailwind.config.js
└─ 📄 tsconfig.json
```

## 🚀️️️️ Usage

After creating your app, go inside your project directory:

```sh
cd my-app
```

### Project Scripts (`npm`)

```c
// Starts your project on localhost:3000
npm run dev

// Create a production ready build
npm run build

// Starts your previous production build
npm run start

// Runs the linting process
npm run lint

// Fix any linting errors found
npm run lint:fix

// Build and starts your project
npm run preview

// Performs typecheck for Typescript files
npm run typecheck

// Check Typescript code (Prettier)
npm run format:check

// Format Typescript code (Prettier)
npm run format:write
```

### Customize Theme (`globals.css`)

```css
/* ... */
@layer base {
    :root {
        --background: 0 0% 100%; /* #FFFFFF */
        --foreground: 222 47% 11%; /* #0F172A */

        --muted: 214 32% 91%; /* #E2E8F0 */
        --muted-foreground: 210 40% 96%; /* #F8FAFC */

        --popover: 0 0% 100%; /* #FFFFFF */
        --popover-foreground: 222 47% 11%; /* #0F172A */

        --border: 214 32% 91%; /* #E2E8F0 */
        --input: 214 32% 91%; /* #E2E8F0 */

        --card: 0 0% 100%; /* #FFFFFF */
        --card-foreground: 222 47% 11%; /* #0F172A */

        --primary: 0 0% 100%; /* #FFFFFF */
        --primary-foreground: 222 47% 11%; /* #0F172A */

        --secondary: 222 47% 11%; /* #0F172A */
        --secondary-foreground: 0 0% 100%; /* #FFFFFF */

        --accent: 215 16% 47%; /* #64748B */
        --accent-foreground: 222 47% 11%; /* #0F172A */

        --destructive: 0 84% 60%; /* #EF4444 */
        --destructive-foreground: 0 0% 100%; /* #FFFFFF */

        --ring: 214 32% 91%; /* #E2E8F0 */

        --radius: 0.5rem;
    }

    .dark {
        --background: 222 47% 11%; /* #0F172A */
        --foreground: 0 0% 100%; /* #FFFFFF */

        --muted: 217 33% 17%; /* #1E293B */
        --muted-foreground: 215 25% 27%; /* #334155 */

        --popover: 222 47% 11%; /* #0F172A */
        --popover-foreground: 0 0% 100%; /* #FFFFFF */

        --border: 215 25% 27%; /* #334155 */
        --input: 215 25% 27%; /* #334155 */

        --card: 222 47% 11%; /* #0F172A */
        --card-foreground: 0 0% 100%; /* #FFFFFF */

        --primary: 222 47% 11%; /* #0F172A */
        --primary-foreground: 0 0% 100%; /* #FFFFFF */

        --secondary: 0 0% 100%; /* #FFFFFF */
        --secondary-foreground: 222 47% 11%; /* #0F172A */

        --accent: 215 16% 47%; /* #64748B */
        --accent-foreground: 222 47% 11%; /* #0F172A */

        --destructive: 0 84% 60%; /* #EF4444 */
        --destructive-foreground: 0 0% 100%; /* #FFFFFF */

        --ring: 215 25% 27%; /* #334155 */

        --radius: 0.5rem;
    }
}
/*...*/
```

## ⚙️ Configs

There are some rules to follow to keep the consistency throughout your project. Of course, you can customize them to your preferences

### React Component (`fc`)

```ts
import { FC } from "react"

interface componentProps {}

const component: FC<componentProps> = ({}) => {
    return <div>component</div>
}

export default component
```

### Root Metadata (`layout.tsx`)

```tsx
import { Metadata } from "next"

import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
}
```

### List of Configs

| **Name**                                                               | **Description**                                                                                      |
| :--------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| [Next.js ](https://nextjs.org/)                                        | A popular React framework for building server-rendered and static websites.                          |
| [Typescript](https://www.typescriptlang.org/)                          | A typed superset of JavaScript that enables static type checking and improved tooling.               |
| [TailwindCSS](https://tailwindcss.com/)                                | A utility-first CSS framework for rapidly building custom user interfaces.                           |
| [Shadcn UI](https://ui.shadcn.com)                                     | A UI component library with a modern design and customizable styles.                                 |
| [Radix Primitives](https://www.radix-ui.com)                           | A collection of composable UI primitives for building accessible and themeable components.           |
| [Next Theme](https://github.com/pacocoursey/next-themes)               | A theme provider for Next.js applications, allowing easy customization and theming.                  |
| [Lucide Icons](https://lucide.dev)                                     | A collection of simple and consistent open-source SVG icons for web projects.                        |
| [Sharp](https://github.com/lovell/sharp)                               | A fast and efficient image processing library for Node.js, providing resizing, cropping, and more.   |
| [Prettier](https://prettier.io/)                                       | An opinionated code formatter that helps maintain consistent code style across your project.         |
| [ESLint](https://eslint.org/)                                          | A widely-used JavaScript linter that helps identify and enforce coding standards and best practices. |
| [Import Orders](https://github.com/IanVS/prettier-plugin-sort-imports) | A tool for organizing and sorting import statements in your JavaScript or TypeScript files.          |
| [zod](https://zod.dev/) (Optional)                                     | A TypeScript-first schema validation library for building robust and type-safe applications.         |
| [Prisma](https://www.prisma.io) (Optional)                             | A modern database toolkit that simplifies database access and management for developers              |
| [Drizzle](https://drizzle.team/) (Optional)                            | Drizzle ORM is a TypeScript ORM for SQL databases designed with maximum type safety in mind.         |

## ⚠️ Troubleshooting

There might be some issues with your VSCode personal settings and Prettier configuration. Please ensure that there are no conflicting settings overriding the configuration files.

If you wish to automatically sort your class names, make sure to add a `keybind` for ESLint auto-fix (Settings -> Keybind -> Search: ESLint). If this approach does not work, you can manually sort the class names by hovering over the warning and selecting 'Quick Fix'.

Please note that there might be occasional bugs or malfunctions resulting from package updates. However, rest assured that I will make every effort to promptly address and maintain the codebase.
