<template>
  <v-app dark class="blue-grey darken-2">
    <layout />
    <v-footer fixed app color="blue-grey lighten-1">
      <span class="ml-4">&copy; 2017 Denis Käch</span>
      <v-spacer />
      <a class="mr-4 white--text" href="https://next.vuetifyjs.com"><span>created with awsome Vuetify</span></a>
    </v-footer>
  </v-app>
</template>

<script>
import layout from '@/components/layouts/layout'
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  components: {
    layout
  }
}
</script>
