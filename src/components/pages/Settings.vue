<template>
  <v-container fluid grid-list-xl>
    <h1 class="display-2">Auto Settings</h1>
    <v-layout row justify-center>
      <v-flex xs12>
        <v-card class="brown darken-1 elevation-18">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Rigi</h3>
            </div>
          </v-card-title>
          <v-subheader>Motion Settings</v-subheader>
          <v-layout justify-center>
            <v-flex xs5>
              <div>
                Speed [rpm]
              </div>
              <v-text-field
              v-model="rigiSpeed"
              type="number">
              </v-text-field>
            </v-flex>
            <v-flex xs5>
              <div>
                Acceleration [rad/s&#178;]
              </div>
              <v-text-field
              v-model="rigiAccel"
              type="number">
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs5>
              <div>
                Steps
              </div>
              <v-text-field
              v-model="rigiSteps"
              type="number">
              </v-text-field>
            </v-flex>
            <v-flex xs5>
              <div>
                Timeout [ms]
              </div>
              <v-text-field
              v-model="rigiTimeout"
              type="number">
              </v-text-field>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs12>
        <v-card class="brown darken-1 elevation-18">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Pilatus</h3>
            </div>
          </v-card-title>
          <v-subheader>Motion Settings</v-subheader>
          <v-layout justify-center>
            <v-flex xs5>
              <div>
                Speed [rpm]
              </div>
              <v-text-field
              v-model="pilatusSpeed"
              type="number">
              </v-text-field>
            </v-flex>
            <v-flex xs5>
              <div>
                Acceleration [rad/s&#178;]
              </div>
              <v-text-field
              v-model="pilatusAccel"
              type="number">
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs5>
              <div>
                Steps
              </div>
              <v-text-field
              v-model="pilatusSteps"
              type="number">
              </v-text-field>
            </v-flex>
            <v-flex xs5>
              <div>
                Timeout [ms]
              </div>
              <v-text-field
              v-model="pilatusTimeout"
              type="number">
              </v-text-field>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs12>
        <v-card class="brown darken-1 elevation-18">
          <v-card-title primary-title>
          </v-card-title>
          <v-layout justify-center>
            <v-flex xs10 offset-xs4>
               <v-subheader>Confirm</v-subheader>
              <v-btn
              color="teal"
              @click="clearForm">
                clear
              </v-btn>
              <v-btn
              color="teal"
              @click="setDefault">
                default
              </v-btn>
              <v-btn
              color="teal"
              @click="setSettings">
                set
              </v-btn>
              <v-btn
              color="teal"
              @click="loadLastSettings">
                Load
              </v-btn>
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
      rigiSpeed: 7,
      rigiAccel: 10,
      pilatusSpeed: 10,
      pilatusAccel: 10,
      rigiTimeout: 10000,
      pilatusTimeout: 5000,
      pilatusSteps: 9500,
      rigiSteps: 7100
    }
  },
  methods: {
    clearForm () {
      this.rigiSpeed = null
      this.rigiAccel = null
      this.pilatusSpeed = null
      this.pilatusAccel = null
      this.rigiTimeout = null
      this.pilatusTimeout = null
      this.pilatusSteps = null
      this.rigiSteps = null
    },
    setDefault () {
      this.rigiSpeed = 7
      this.rigiAccel = 10
      this.pilatusSpeed = 10
      this.pilatusAccel = 10
      this.rigiTimeout = 10000
      this.pilatusTimeout = 5000
      this.pilatusSteps = 9500
      this.rigiSteps = 7100
    },
    setSettings () {
      console.log('sent :', this.rigiSpeed)
      this.$socket.emit('setAutoSettings', {

        config: {
          rigiSpeed: this.rigiSpeed,
          rigiAccel: this.rigiAccel,
          pilatusSpeed: this.pilatusSpeed,
          pilatusAccel: this.pilatusAccel,
          rigiTimeout: this.rigiTimeout,
          pilatusTimeout: this.pilatusTimeout,
          pilatusSteps: this.pilatusSteps,
          rigiSteps: this.rigiSteps
        }
      })
    },
    loadLastSettings () {
      this.$socket.emit('getLastAutoSettings')
    }
  },
  sockets: {
    getLastAutoSettings_res: function (data) {
      console.log('received response: ', data.config)
      this.rigiSpeed = data.config.rigiSpeed
      this.rigiAccel = data.config.rigiAccel
      this.pilatusSpeed = data.config.pilatusSpeed
      this.pilatusAccel = data.config.pilatusAccel
      this.rigiTimeout = data.config.rigiTimeout
      this.pilatusTimeout = data.config.pilatusTimeout
      this.pilatusSteps = data.config.pilatusSteps
      this.rigiSteps = data.config.rigiSteps
      this.$store.dispatch('changeSettingsAc', data.config)
    }
  }
}
</script>

