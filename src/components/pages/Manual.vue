<!-- indside here are the Manual section, where to define what nested page is to display, it provides the tabbar -->
<template>
  <div>
    <v-container fluid gird-list-xs>
    </v-container>
    <router-view class="Manual" name="a"></router-view>
    <div class="headline text-xs-center pa-5"></div>
    <v-bottom-nav
      fixed
      :value="true"
      color="primary"
      >
      <v-btn
      flat
      color="white"
      value="recent"
      v-for="item in TabbarItems"
      :key="item.title"
      router
      :to="item.path"
      >
        <span>{{ item.title }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
export default {
  name: 'manual',
  data () {
    return {
      e1: true,
      ActiveTabbar: false,
      TabbarItems: [
        { title: 'Settings', icon: 'settings_ethernet', path: '/manual/settings' },
        { title: 'Movement', icon: 'directions_transit', path: '/manual/movement' },
        { title: 'Light', icon: 'dashboard', path: '/manual/light' }
      ]
    }
  },
  computed: {
  }
}
</script>

<style lang="stylus" scoped>

</style>
