import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import { HashRouter as Router } from 'react-router-dom'

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'))

serviceWorker.unregister()