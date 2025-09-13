import PrimeVue from 'primevue/config'

import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Menubar from 'primevue/menubar'
import Steps from 'primevue/steps'
import DataView from 'primevue/dataview'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue)

  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('Card', Card)
  nuxtApp.vueApp.component('InputText', InputText)
  nuxtApp.vueApp.component('Textarea', Textarea)
  nuxtApp.vueApp.component('Menubar', Menubar)
  nuxtApp.vueApp.component('Steps', Steps)
  nuxtApp.vueApp.component('DataView', DataView)
})
