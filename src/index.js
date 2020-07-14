import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
/*
using 3 different css
to avoid conflict:
to ensure tachyons (library that I started to be used first)
overrides styling (names, CSS selectors, classes) that bootstrap uses
need to put bootstrap first, then tachyons, then index.css
(last import takes over)
*/
import 'bootstrap/dist/css/bootstrap.min.css'
import 'tachyons'
import './index.css'

ReactDOM.render(<App />, document.getElementById('root'))
// PORTAL

registerServiceWorker()
