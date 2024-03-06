const count = require('text-count');

function exa() {
  const text = "E X A"
  return {
    text,
    length: count.charCount(text)
  }
}


module.exports = Exa
