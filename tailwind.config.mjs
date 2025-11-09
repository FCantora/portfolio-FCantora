/**
 * @format
 * @type {import('tailwindcss').Config}
 */
import flowbitePlugin from "flowbite/plugin";

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  safelist: [
    // Toggled by header script
    "opacity-0",
    "opacity-100",
    "pointer-events-none",
    "pointer-events-auto",
  ],
  plugins: [flowbitePlugin],
};
