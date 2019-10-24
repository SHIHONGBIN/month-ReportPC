import dva from 'dva';
import './index.css';
import './assets/css/animate.css'

import 'react-dom'
// import 'es6-shim'
// import '@babel/preset-env'
// import 'core-js'
import 'babel-polyfill'
// window.Promise = Promise

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/indexpage').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
