import fs from 'fs'
import path from 'path'

function toPascalCase(string = "") {
  return string.split('-')
    .map(value => value.charAt(0).toUpperCase() + value.slice(1))
    .join('')
}

function chunkCode(string = "", start = "", end = "") {
  const regex = new RegExp(`${start}.*?${end}`, 'gs')
  return string.replace(regex, '')
}

function exportIcons(folder) {
  const index = './index.js'
  const files = fs.readdirSync(folder)
  var schema = fs.readFileSync('./icon.schema.jsx').toString()
  files.forEach(file => {
    const filename = file.slice(0, -4)
    // check for filename starts with digits.
    if (/\d/.test(filename)) { return }
    // svgs code creation.
    var iconCode = fs.readFileSync(path.resolve(folder, file)).toString()
    iconCode = chunkCode(iconCode, "<!--! Font Awesome", "Inc. -->")
    var schemaCode = schema.replace("{{code}}", iconCode).replace('{{name}}', filename)
    fs.writeFileSync('./icons/' + filename + '.jsx', schemaCode)
    // index code creation.
    fs.appendFileSync(index, `export { default as ${toPascalCase(filename)} } from './icons/${filename}';\n`)
  })
}

function create() {
  const fontawesome = path.resolve('./fontawesome', 'svgs')
  // const models = ['brands', 'solid']
  const models = ['solid']
  models.forEach(model => {
    const modelpath = path.resolve(fontawesome, model)
    exportIcons(modelpath)
    console.log('Exporting', model, '...')
  })
}

create()
