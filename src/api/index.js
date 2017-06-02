import layouts from './layouts.json'

const TIMEOUT = 500

const delay = timeout =>
  new Promise(resolve => setTimeout(resolve, timeout || TIMEOUT))

export const fetchLayouts = () => delay().then(() => layouts)
