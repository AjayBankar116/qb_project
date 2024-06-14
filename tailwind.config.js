/** @type {import('tailwindcss').Config} */

import {nextui} from "@nextui-org/react";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        Tertiary: 'var( --Tertiary)',
        // overlay: 'var(--overlay)',
        elevated: 'var(--elevated)',
        green_dark: 'var(--green_dark)',
        interactive_accent: 'var(--interactive_accent)',
        content_link: 'var(--content_link)',
        base_light: 'var(--base_light)',
        btn: {
          background: 'var(--btn-background)',
          'background-hover': 'var(--btn-background-hover)',
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]

};
