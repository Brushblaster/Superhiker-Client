<template>
  <div>
    <v-system-bar color="primary"></v-system-bar>
      <v-navigation-drawer
      fixed
      v-model="Sidebar"
      app
      light
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="item in Sidebarlinks"
          :key="item.title"
          router
          :to="item.path"
          :disabled="item.disabled"
          dark
        >
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app class="primary">
      <v-toolbar-side-icon @click.stop="Sidebar = !Sidebar"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/home" tag="span" style="cursor: pointer">Gipfelstürmer</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="login" v-show="!this.isAuthenticated">
        <v-icon v-html="this.isAuthenticated ? 'lock' : 'lock_open'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="logout" v-show="this.isAuthenticated">
        <v-icon v-html="this.isAuthenticated ? 'lock' : 'lock_open'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="options =! options">
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-dialog v-model="options" presistent max-width="350px">
      <v-card>
        <v-card-media
        src="../../../static/img/joda.jpg"
        height="250px">
        </v-card-media>
        <v-card-actions>
          <v-spacer />
          <v-btn color="blue darken-1" flat @click.stop="options =! options">Close</v-btn>
        </v-card-actions>
      </v-card>
      </v-dialog>
    </v-toolbar>
    <v-content>
      <!-- takeing in the other components, they will be wrapped around with the layout -->
      <router-view >
        <v-container fluid></v-container>
      </router-view>
    </v-content>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AuthService from '../../utils/AuthService'

const auth = new AuthService()

const { login, logout, authenticated, authNotifier } = auth

export default {
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
      if (authState.authenticated === true) {
        this.$store.dispatch('isAuthenticated', {
          auth: true
        })
      } else {
        this.$store.dispatch('isAuthenticated', {
          auth: false
        })
      }
    })

    return {
      Sidebar: false,
      options: false,
      Sidebarlinks: [
        { icon: 'home', title: 'Home', path: '/home', disabled: this.isAuthenticated },
        { icon: 'replay', title: 'Auto', path: '/auto', disabled: this.isAuthenticated },
        { icon: 'web', title: 'Manual', path: '/manual', disabled: this.isAuthenticated }
      ],
      auth,
      authenticated
    }
  },
  methods: {
    login,
    logout,
    test () {
      authNotifier.emit('authChange', { authenticated: true })
      console.log(authenticated)
    },
    test2 () {
      console.log(this.authenticated)
    }
  },
  computed: {
    ...mapGetters([
      'isAuthenticated'
    ])
  }
}

</script>

<style scoped>
</style>
