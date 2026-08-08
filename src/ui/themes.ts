/**
 * Canonical theme pools.
 *
 * Only themes enabled in `tailwind.config.js` belong here — daisyUI emits no CSS
 * for anything else, so an unlisted name would render as a silent no-op.
 *
 * The light/dark split is taken from each theme's own `color-scheme` field in
 * `daisyui/src/theming/themes.js`, not from the name. Note `aqua` is a *dark*
 * theme, which is easy to get wrong.
 *
 * KEEP IN SYNC: index.html carries a duplicate of these two arrays in its
 * render-blocking inline script. That script has to resolve the theme before
 * first paint, so it cannot import from this module.
 */

export const lightThemes = [
  "light",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "retro",
  "valentine",
  "garden",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "cmyk",
  "autumn",
  "acid",
  "lemonade",
  "winter",
];

export const darkThemes = [
  "dark",
  "synthwave",
  "halloween",
  "forest",
  "aqua",
  "black",
  "luxury",
  "dracula",
  "business",
  "night",
  "coffee",
];

export const DEFAULT_LIGHT = "winter";
export const DEFAULT_DARK = "dark";

export const SCHEME_KEY = "theme-scheme";
export const RANDOM_KEY = "theme-random";

export type Scheme = "light" | "dark" | "system";

export const prefersDark = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

/** Collapses "system" down to the concrete light/dark the device is asking for. */
export const resolveScheme = (scheme: Scheme): "light" | "dark" =>
  scheme === "system" ? (prefersDark() ? "dark" : "light") : scheme;

export const baseTheme = (isDark: boolean) =>
  isDark ? DEFAULT_DARK : DEFAULT_LIGHT;

/** Rolls within a single polarity so random never fights the light/dark choice. */
export const pickRandom = (isDark: boolean) => {
  const pool = isDark ? darkThemes : lightThemes;
  return pool[Math.floor(Math.random() * pool.length)];
};

export const readScheme = (): Scheme => {
  const stored = localStorage.getItem(SCHEME_KEY);
  return stored === "light" || stored === "dark" || stored === "system"
    ? stored
    : "system";
};

export const readRandom = () => localStorage.getItem(RANDOM_KEY) === "on";
