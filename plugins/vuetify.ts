import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const Theme = {
    dark: false,
    colors: {
        background: '#FBFCFE',
        primary: '#53823a',
        secondary: '#2C2D2E',
        'body-color': '#1C1C1C',
        'secondary-gray': '#666',
        error: '#000000',
        info: '#000000',
        success: '#000000',
        warning: '#000000',
        'green': '#90C84B',
    }
}

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        theme: {
            defaultTheme: 'Theme',
            themes: {
                Theme,
            }
        },
        ssr: false
    })

    app.vueApp.use(vuetify)
})