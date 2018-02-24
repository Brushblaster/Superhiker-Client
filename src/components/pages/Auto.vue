<template>
<v-container fluid grid-list-xl>
    <!-- <h1 class="display-2">Auto Control</h1> -->
    <v-layout row justify-center>
      <v-flex xs12>
        <v-card class="cyan darken-4 elevation-12 mb-3">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Automode</h3>
            </div>
          </v-card-title>
          <v-layout row justify-end>
            <v-flex xs6 offset-xs1>
            <v-btn
            large
            light
            color="yellow"
            class="mb-3"
            @click="reset">
              Reset
            </v-btn>
            <v-btn
            large
            color="success"
            class="mb-3"
            @click="fullAutoStart">
              Start
            </v-btn>
            <v-btn
            large
            color="error"
            class="mb-3"
            @click="intermediateStop">
              Stop
            </v-btn>
            <v-btn
            large
            color="info"
            class="mb-3"
            @click="fullAutoStopOnZero">
              on 0
            </v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- <v-layout row justify-center>
      <v-flex xs12>
        <v-card class="cyan darken-4 elevation-12 mb-3">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Rigi Auto Mode</h3>
            </div>
          </v-card-title>
          <v-layout justify-end>
            <v-flex xs6 offset-xs1>
            <v-btn large color="success" class="mb-3">
              Start
            </v-btn>
            <v-btn large color="error" class="mb-3">
              Stop
            </v-btn>
            <v-btn large color="info" class="mb-3">
              on 0
            </v-btn>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs5 offset-xs1>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs12>
        <v-card class="cyan darken-4 elevation-12 mb-3">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Pilatus Auto Mode</h3>
            </div>
          </v-card-title>
          <v-layout justify-end>
            <v-flex xs6 offset-xs1>
            <v-btn large color="success" class="mb-3">
              Start
            </v-btn>
            <v-btn large color="error" class="mb-3">
              Stop
            </v-btn>
            <v-btn large color="info" class="mb-3">
              on 0
            </v-btn>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs5 offset-xs1>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout> -->
    <v-layout row justify-center>
      <v-flex xs12>
        <v-card class="cyan darken-4 elevation-12">
          <v-layout justify-center>
            <v-flex offset-xs2 xs6>
              <v-layout column wrap justify-center>
                <v-subheader>Underfloor Light</v-subheader>
                <v-btn
                color="deep-purple darken-4"
                large
                fab
                @click="underfloorLight">
                  <v-icon>lightbulb_outline</v-icon>
                </v-btn>
                <v-subheader>Top Light</v-subheader>
                <v-btn
                large
                fab
                color="deep-purple darken-4"
                @click="topLight">
                  <v-icon>lightbulb_outline</v-icon>
                </v-btn>
              </v-layout>
            </v-flex>
            <v-flex xs6 class="mb-3">
              <v-layout column wrap justify-center>
                <v-subheader>Theme Light</v-subheader>
                <v-btn
                color="deep-purple darken-4"
                large
                fab
                @click="themeLight">
                  <v-icon>lightbulb_outline</v-icon>
                </v-btn>
                <v-subheader>smoke</v-subheader>
                <v-btn
                color="deep-purple darken-4"
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
                color="deep-purple darken-4"
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
    fullAutoStart () {
      this.$socket.emit('driveAutoStart')
      console.log('firing auto')
    },
    underfloorLight () {
      this.$socket.emit('trigUnderfloorLight')
    },
    topLight () {
      this.$socket.emit('trigTopLight')
    },
    themeLight () {
      this.$socket.emit('trigThemeLight')
    },
    smoke () {
      this.$socket.emit('trigSmoke')
      this.diableSmoke = true
    },
    fullAutoStopOnZero () {
      this.$socket.emit('driveAutoStop')
    },
    strobeLight () {
      this.$socket.emit('trigStrobeLight')
    },
    intermediateStop () {
      this.$socket.emit('E-stop')
    },
    reset () {
      this.$socket.emit('resetStop')
    }
  },
  sockets: {
    trigUnderfloorLight_res () {

    },
    trigTopLight_res () {

    },
    trigThemeLight_res () {

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
