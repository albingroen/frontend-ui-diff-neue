import * as React from 'react'
import ReactDOM from 'react-dom'
import { theme as primer } from '@primer/components'
import { ThemeProvider } from 'styled-components'
import './index.css'
import { IntlProvider } from 'react-intl'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import App from './App'
import * as serviceWorker from './serviceWorker'

// a theme with custom spacing and font sizes
const theme = {
  ...primer,
  space: [0, 8, 16, 20, 32, 64],
  fontSizes: [10, 12, 16, 24, 48],
  lineHeights: {
    condensedUltra: 1,
    condensed: 1.2,
    default: 1.5
  },
  transitions: {
    default: '0.15s ease-in-out 0s'
  }
}

// Load in Stripe
const stripePromise = loadStripe('pk_test_EfNNxBuPUHbBg19BnThXTh1F00fCVpnLgF')

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <IntlProvider locale="en">
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </IntlProvider>
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
