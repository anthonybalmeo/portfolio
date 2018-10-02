import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import { App } from './components/App'
import registerServiceWorker from './registerServiceWorker'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

UIkit.use(Icons)
// UIkit.notification('Hello world.')

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
