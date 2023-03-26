const idGenerator = (prefix = 'id') => {
  let id = Math.floor(Math.random() * 1000)
  return `${prefix}-${id++}`
}

export default idGenerator
