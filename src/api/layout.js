import layouts from './layouts.json'

const TIMEOUT = 500

export default {
  get: (cb, timeout) => setTimeout(() => cb(layouts), timeout || TIMEOUT)
}
