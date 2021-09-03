
import { DEFAULT_FETCH_DELAY } from '/@/config/app.config'

export const fetchDelay = (delay = DEFAULT_FETCH_DELAY) => {
  const start = new Date().getTime()
  return (action) => {
    const end = new Date().getTime()
    const time = end - start
    const timeout = delay - time
    const isDelay = timeout > 0
    isDelay ? window.setTimeout(action, timeout) : action()
  }
}
 