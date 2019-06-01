const assert = require('assert')

const toValidate = ['title']

const validate = (fileName, attrs) => {
  toValidate.forEach(attrName => {
    try {
      assert.ok(attrs[attrName])
    } catch (err) {
      throw new Error(`\`${attrName}\` is not found at ${fileName}`)
    }
  })
}

const template = ({ title, body }) =>
  `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>${title}</title>
</head>
<body>
${body}
</body>
</html>
`.trim()

module.exports = {
  template,
  validate,
}
