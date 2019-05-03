import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { FormGenerator } from './FormGenerator'

ReactDOM.render(<FormGenerator />, document.getElementById('root'))
serviceWorker.register()
