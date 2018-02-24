<template>
  <v-container fluid grid-list-xl>
    <v-layout row justify-center>
      <v-flex xs10>
        <v-card class="brown darken-1 elevation-18">
          <v-layout justify-center>
            <v-flex offset-xs1 xs6>
              <v-layout column wrap justify-center>
                <v-subheader>Underfloor Light</v-subheader>
                <v-btn
                color="teal darken-2"
                large
                fab
                @click="underfloorLight">
                  <v-icon>lightbulb_outline</v-icon>
                </v-btn>
                <v-subheader>Top Light</v-subheader>
                <v-btn
                large
                fab
                color="teal darken-2"
                @click="topLight">
                  <v-icon>lightbulb_outline</v-icon>
                </v-btn>
              </v-layout>
            </v-flex>
            <v-flex xs6 class="mb-3">
              <v-layout column wrap justify-center>
                <v-subheader>Theme Light</v-subheader>
                <v-btn
                color="teal darken-2"
                large
                fab
                @click="themeLight">
                  <v-icon>lightbulb_outline</v-icon>
                </v-btn>
                <v-subheader>smoke</v-subheader>
                <v-btn
                color="teal darken-2"
                large
                :disabled="diableSmoke"
                @click="smoke"
                fab>
                  <v-icon>cloud_queue</v-icon>
                </v-btn>
              </v-layout>
            </v-flex>
            <v-flex xs6 class="mb-3">
              <v-layout column wrap justify-center>
                <v-subheader>Strobe Light</v-subheader>
                <v-btn
                color="teal darken-2"
                large
                fab
                @click="strobeLight">
                  <v-icon>lightbulb_outline</v-icon>
                </v-btn>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      diableSmoke: false
    }
  },
  methods: {
    underfloorLight () {
      this.$socket.emit('trigUnderfloorLight')
    },
    topLight () {
      this.$socket.emit('trigTopLight')
    },
    themeLight () {
      this.$socket.emit('trigThemeLight')
    },
    strobeLight () {
      this.$socket.emit('trigStrobeLight')
    },
    smoke () {
      this.$socket.emit('trigSmoke')
      this.diableSmoke = true
    }

  },
  sockets: {
    trigUnderfloorLight_res () {

    },
    trigTopLight_res () {

    },
    trigThemeLight_res () {

    },
    trigStrobeLight_res () {

    },
    trigSmoke_res () {
      this.diableSmoke = false
    },
    trigSmokeBlock () {
      this.diableSmoke = true
    }
  }
}
</script>

