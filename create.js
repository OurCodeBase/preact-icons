import fs from 'fs'
import path from 'path'
import { parse } from 'svg-parser'

// user configuration.
const faFolder = './fontawesome'
const iconPacks = ['brands', 'solid', 'regular']

// global variables.
const faPath = path.resolve(faFolder, 'svgs')
const iconSkeleton = fs.readFileSync('./skeleton.icon.txt').toString()
const readmeSkeleton = fs.readFileSync('./skeleton.readme.txt').toString()
const packageSkeleton = fs.readFileSync('./skeleton.package.txt').toString()

function toPascalCase(string = "") {
  return string.split('-')
  .map(value => value.charAt(0).toUpperCase() + value.slice(1))
  .join('')
}

function exportIcons(folder) {
  const files = fs.readdirSync(folder)
  const iconsSrc = `./${path.basename(folder)}/src`
  const indexFile = `${iconsSrc}/index.js`
  const definFile = `./${path.basename(folder)}/types/e.d.ts`
  var indexCode = ""
  var definCode = "export interface FaDefinition { name: string, d: string, viewBox: string }\n"
  files.forEach(file => {
    const filename = file.slice(0, -4)
    if (/\d/.test(filename)) { return }
    var iconCode = fs.readFileSync(path.resolve(folder, file)).toString()
    var iconAtts = parse(iconCode)
    var iconBinds = iconSkeleton.replace("{{name}}", filename)
    iconBinds = iconBinds.replace("{{d}}", iconAtts.children[0].children[0].properties.d)
    iconBinds = iconBinds.replace("{{viewBox}}", iconAtts.children[0].properties.viewBox)
    fs.writeFileSync(`${iconsSrc}/${filename}.js`, iconBinds)
    indexCode = indexCode + `export { default as fa${toPascalCase(filename)} } from './${filename}.js';\n`
    definCode = definCode + `export const fa${toPascalCase(filename)}: FaDefinition\n`
  })
  fs.writeFileSync(indexFile, indexCode)
  fs.writeFileSync(definFile, definCode)
}

function create() {
  // svgs like brands, solid and regular.
  iconPacks.forEach(pack => {
    // re-configure all folders.
    fs.mkdirSync(`./${pack}`)
    fs.mkdirSync(`./${pack}/src`)
    fs.mkdirSync(`./${pack}/types`)
    // write readme and package files of icons.
    fs.writeFileSync(`./${pack}/README.md`, readmeSkeleton.replaceAll("{{name}}", pack))
    fs.writeFileSync(`./${pack}/package.json`, packageSkeleton.replaceAll("{{name}}", pack))
    // copy vite-config and npmignore files of icons.
    fs.cpSync('./vite.config.js', `./${pack}/vite.config.js`)
    fs.cpSync('./skeleton.npmignore.txt', `./${pack}/.npmignore`)
    // full filepaths like ./fontawesome/svgs/solid
    const faPack = path.resolve(faPath, pack)
    exportIcons(faPack)
    console.log('Exporting', pack, '...')
  })
}

create()
