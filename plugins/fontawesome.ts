import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLightbulb, faSun, faMoon, faBars, faAngleRight, faAngleDown, faMagnifyingGlass, faXmark, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faRedditAlien, faBluesky, faGithub, faDiscord, faWindows, faLinux, faApple } from '@fortawesome/free-brands-svg-icons'
import { defineNuxtPlugin } from 'nuxt/app'

config.autoAddCss = false

library.add(faLightbulb, faSun, faMoon, faBars, faAngleRight, faAngleDown, faMagnifyingGlass, faXmark, faArrowUpRightFromSquare);
library.add(faTwitter, faRedditAlien, faBluesky, faGithub, faDiscord, faWindows, faLinux, faApple);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('fa', FontAwesomeIcon)
})