export default function loader(source) {
  return source.replace(/^---(.*?)---/gmis, '')
}
