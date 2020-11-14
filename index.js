module.exports = function loader(source) {
  return source.replace(/^---(.*?)---/gmis, '')
}
