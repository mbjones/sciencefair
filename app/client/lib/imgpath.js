const path = require('path')
const win = require('os').platform() === 'win32'

const imgdir = path.join(__dirname, '..', 'images')

const makesafe = str => win ? str.replace('\\', '\\\\') : str

module.exports = img => makesafe(path.join(imgdir, img))
