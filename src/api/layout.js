import layouts from './layouts.json'

const TIMEOUT = 1000

export default {
  get: (cb, timeout) => setTimeout(() => cb(layouts), timeout || TIMEOUT)
}
