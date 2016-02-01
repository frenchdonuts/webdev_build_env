// Import CSS
import '../sass/master.scss'

// Import React and JS
import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './App'
import ReactDOM from 'react-dom'

// Goes away once React hits v1.0
injectTapEventPlugin()

// Render!
ReactDOM.render(<App />, document.getElementById('main'))
