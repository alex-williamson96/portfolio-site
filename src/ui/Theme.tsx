import { useEffect, useRef, useState } from "react";
import {
  Scheme,
  SCHEME_KEY,
  RANDOM_KEY,
  DEFAULT_DARK,
  resolveScheme,
  baseTheme,
  pickRandom,
  readScheme,
  readRandom,
} from "./themes";

const SunIcon = () => (
  <svg role="img" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="18" height="18" viewBox="0 0 25 25" className="fill-current"><path d="M12 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001zm-7.001 22c-6.617 0-12-5.383-12-12s5.383-12 12-12c1.894 0 3.63.497 5.37 1.179-2.948.504-9.37 3.266-9.37 10.821 0 7.454 5.917 10.208 9.37 10.821-1.5.846-3.476 1.179-5.37 1.179z"></path></svg>
);

const MoonIcon = () => (
  <svg role="img" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="18" height="18" viewBox="0 0 25 25" className="fill-current"><path d="M21.192 6.221l-2.881 2.881c-.411-.528-.885-1.002-1.414-1.414l2.881-2.881 1.414 1.414zm-8.192-.152v-4.069h-2v4.069c.328-.041.66-.069 1-.069s.672.028 1 .069zm6.931 6.931c.041.328.069.66.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-1.931 1c0 .342-.035.674-.09 1h-11.82c-.055-.326-.09-.658-.09-1 0-3.314 2.686-6 6-6s6 2.686 6 6zm-2.142-1c-.448-1.721-2.001-3-3.858-3-1.858 0-3.41 1.279-3.857 3h7.715zm-8.754-5.312l-2.881-2.881-1.415 1.414 2.881 2.881c.411-.529.885-1.003 1.415-1.414zm-7.104 5.312v2h4.069c-.041-.328-.069-.66-.069-1s.028-.672.069-1h-4.069zm22 6h-20v-2h20v2zm-3 3h-14v-2h14v2z"></path></svg>
);

const SystemIcon = () => (
  <svg role="img" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
);

const DiceIcon = () => (
  <svg role="img" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="8.5" cy="8.5" r="1.3" fill="currentColor" /><circle cx="15.5" cy="15.5" r="1.3" fill="currentColor" /><circle cx="12" cy="12" r="1.3" fill="currentColor" /></svg>
);

const RerollIcon = () => (
  <svg role="img" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-3.5-7.1" /><path d="M21 3v6h-6" /></svg>
);

const CheckIcon = () => (
  <svg role="img" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-auto text-primary"><path d="M20 6L9 17l-5-5" /></svg>
);

const schemeOptions: { value: Scheme; label: string; icon: () => JSX.Element }[] = [
  { value: "light", label: "Light", icon: SunIcon },
  { value: "dark", label: "Dark", icon: MoonIcon },
  { value: "system", label: "System", icon: SystemIcon },
];

const Theme = () => {
  const [scheme, setScheme] = useState<Scheme>(readScheme);
  const [random, setRandom] = useState<boolean>(readRandom);
  // Seeded from whatever the inline script in index.html already painted, so we
  // never roll a second time on mount and flash a different theme at the user.
  const [theme, setTheme] = useState<string>(
    () => document.documentElement.getAttribute("data-theme") ?? DEFAULT_DARK
  );
  const isInitialRun = useRef(true);

  // Persist settings, and recompute the theme only for actual user changes.
  useEffect(() => {
    localStorage.setItem(SCHEME_KEY, scheme);
    localStorage.setItem(RANDOM_KEY, random ? "on" : "off");
    if (isInitialRun.current) {
      isInitialRun.current = false;
      return;
    }
    const isDark = resolveScheme(scheme) === "dark";
    setTheme(random ? pickRandom(isDark) : baseTheme(isDark));
  }, [scheme, random]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // While on System, follow the OS live rather than only at load.
  useEffect(() => {
    if (scheme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) =>
      setTheme(random ? pickRandom(e.matches) : baseTheme(e.matches));
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [scheme, random]);

  const reroll = () => setTheme(pickRandom(resolveScheme(scheme) === "dark"));

  const TriggerIcon = random
    ? DiceIcon
    : resolveScheme(scheme) === "dark"
      ? MoonIcon
      : SunIcon;

  return (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        role="button"
        aria-label="Theme settings"
        className="btn btn-ghost p-4 hover:bg-neutral hover:rounded-xl"
      >
        <TriggerIcon />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu menu-sm z-[1] mt-2 w-56 rounded-box border border-base-content/10 bg-base-200 p-2 shadow-lg"
      >
        <li className="menu-title text-xs">Theme · {theme}</li>
        {schemeOptions.map(({ value, label, icon: Icon }) => (
          <li key={value}>
            <button
              onClick={() => setScheme(value)}
              aria-current={scheme === value}
              className={scheme === value ? "active" : ""}
            >
              <Icon />
              {label}
              {scheme === value && <CheckIcon />}
            </button>
          </li>
        ))}

        <div className="divider my-1" />

        <li>
          <button
            onClick={() => setRandom(r => !r)}
            aria-pressed={random}
            className={random ? "active" : ""}
          >
            <DiceIcon />
            Random
            {random && <CheckIcon />}
          </button>
        </li>
        {random && (
          <li>
            <button onClick={reroll}>
              <RerollIcon />
              Re-roll
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Theme;
