import v4 from 'uuid/v4'
import layouts from './layouts.json'

const TIMEOUT = 500

const delay = timeout =>
  new Promise(resolve => setTimeout(resolve, timeout || TIMEOUT))

export const fetchLayouts = () => delay().then(() => layouts)

export const addPlayer = ({ name, number, icon }) => {
  return delay().then(() => {
    const player = {
      id: v4(),
      name,
      icon,
      number
    }

    return player
  })
}
