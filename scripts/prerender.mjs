import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import Prerenderer from '@prerenderer/prerenderer'
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '..', 'dist')

const prerenderer = new Prerenderer({
  staticDir: distDir,
  renderer: new PuppeteerRenderer({
    headless: true,
    renderAfterTime: 2000,
    timeout: 30000,
  }),
})

/**
 * Sections animated with framer-motion `whileInView` are snapshotted in their
 * hidden variant, because the renderer never scrolls. That buries the Experience
 * and Skills copy behind `opacity: 0` in the served HTML. Strip those inline
 * styles from the output only — React re-applies them on hydration, so the
 * scroll-reveal animation is unchanged for real visitors.
 */
const unhide = (html) => html.replace(/style="opacity: ?0;[^"]*"/g, '')

try {
  await prerenderer.initialize()
  const rendered = await prerenderer.renderRoutes(['/'])
  if (rendered.length === 0) {
    throw new Error('renderRoutes returned no routes')
  }
  for (const r of rendered) {
    const outPath = path.join(distDir, r.route === '/' ? 'index.html' : path.join(r.route, 'index.html'))
    fs.mkdirSync(path.dirname(outPath), { recursive: true })
    fs.writeFileSync(outPath, unhide(r.html.trim()))
    console.log(`prerendered ${r.route} -> ${path.relative(distDir, outPath)}`)
  }
} catch (err) {
  // Never let a failed prerender pass as a successful build: without this the
  // deploy ships the un-prerendered index.html and nothing reports a problem.
  console.error('\nPrerender failed — refusing to leave a non-prerendered build.')
  console.error(err?.stack ?? err)
  process.exitCode = 1
} finally {
  await prerenderer.destroy()
}
