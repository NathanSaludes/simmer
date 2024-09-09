## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Project Conventions

#### 🖼️ Static Images

Static image assets are located in the `/public` folder under the `/images` folder with the following file naming convention: `img_<name-of-the-image>`

#### 🔤 Imported Fonts

Font files are located in `/public/fonts/` directory with their own dedicated folders. Fonts are imported in the project using the `@font-face` directive in the `fonts.css` file in located in `/src/app/`.

The `fonts.css` file is then imported in the `globals.css` using the `@import` directive. In the `globals.css` file, each font is assigned with its css variable following the pattern `--font-<name-of-your-font>` and is made accessible in tailwind using the `tailwind.config.ts` config file.

#### 📂 \_Private Folder

The `/_private` folder is a directory in a route where you can put components that you use in a single page but is NOT necessarily shared/used across the website. This is simply used for colocating your "private" components to avoid cluttering the `page.tsx` or `layout.tsx` of a route with markup and tailwind classes.
