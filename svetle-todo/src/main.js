import App from './App.svelte'
import { v4 as uuidv4 } from 'uuid'

const app = new App({
  target: document.getElementById('app'),
})

export default app
