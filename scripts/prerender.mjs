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

try {
  await prerenderer.initialize()
  const rendered = await prerenderer.renderRoutes(['/'])
  for (const r of rendered) {
    const outPath = path.join(distDir, r.route === '/' ? 'index.html' : path.join(r.route, 'index.html'))
    fs.mkdirSync(path.dirname(outPath), { recursive: true })
    fs.writeFileSync(outPath, r.html.trim())
    console.log(`prerendered ${r.route} -> ${path.relative(distDir, outPath)}`)
  }
} finally {
  await prerenderer.destroy()
}
