import layouts from './layouts.json'

const TIMEOUT = 100

export default {
  get: (cb, timeout) => setTimeout(() => cb(layouts), timeout || TIMEOUT)
}
