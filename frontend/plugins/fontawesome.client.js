import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { faUpwork } from '@fortawesome/free-brands-svg-icons'

library.add(fasStar, farStar, faUpwork)

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
