require('./utils/log-error')

const assert = require('assert')
const path = require('path')

const rimraf = require('rimraf').sync
const mkdirp = require('mkdirp').sync

const marked = require('marked')
const frontMatter = require('front-matter')

const fs = require('./utils/fs')
const { template, validate } = require('./utils/template')

const assetsDir = path.resolve('../assets/posts')
const buildDir = path.resolve('../build/posts')

rimraf(buildDir)
mkdirp(buildDir)

const generatePost = async fileName => {
  const file = await fs.readFile(path.join(assetsDir, fileName), 'utf8')
  const { attributes, body } = frontMatter(file)

  validate(fileName, attributes)

  const html = template({ title: attributes.title, body: marked(body) })

  await fs.writeFile(path.join(buildDir, fileName), html)
}

const main = async () => {
  const posts = await fs.readdir(assetsDir)
  await Promise.all(posts.map(generatePost))
}

main()
