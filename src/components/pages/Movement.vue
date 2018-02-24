<template>
  <v-container fluid grid-list-xl text-xs-center align-center>
    <v-layout row wrap justify-center>
      <v-flex xs12 class="elevation-15">
        <v-card class="blue">
          <v-card-title class="headline" primary-title>
            Rigi
          </v-card-title>
          <v-layout row wrap>
          <v-flex xs4>
            <v-btn
            @click="setStepsRigiUp"
            color="deep-purple darken-4">
              Up
            </v-btn>
            <v-btn
            @click="setStepsRigiDown"
            color="deep-purple darken-4">
              Down
            </v-btn>
          </v-flex>
          <v-flex xs4>
            <v-btn
            @click="stop"
            color="error">
              Stop
            </v-btn>
            <v-btn
            light
            @click="resetStop"
            color="lime">
              Reset
            </v-btn>
          </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs4>
              <v-text-field
              v-model="rigiAccel"
              label="Accel/Decel [rad/s^2]"
              type="number">
              </v-text-field>
            </v-flex>
            <v-flex xs4>
              <v-text-field
              v-model="rigiSpeed"
              label="Top Speed [rpm]"
              type="number">
              </v-text-field>
            </v-flex>
            <v-flex xs4>
              <v-text-field
              xs4
              v-model="rigiSteps"
              label="Number of Steps"
              type="number">
              </v-text-field>
            </v-flex>
          </v-layout>
        </v-card>

        <v-card class="blue">
          <v-card-title class="headline" primary-title>
            Pilatus
          </v-card-title>
          <v-layout row wrap>
          <v-flex xs4>
            <v-btn
            @click="setStepsPilatusUp"
            color="deep-purple darken-4">
              Up
            </v-btn>
            <v-btn
            @click="setStepsPilatusDown"
            color="deep-purple darken-4">
              Down
            </v-btn>
          </v-flex>
          <v-flex xs4>
            <v-btn
            @click="stop"
            color="error">
              Stop
            </v-btn>
            <v-btn
            light
            @click="resetStop"
            color="lime">
              Reset
            </v-btn>
          </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs4>
              <v-text-field
              v-model="pilatusAccel"
              label="Accel/Decel [rad/s^2]"
              type="number">
              </v-text-field>
            </v-flex>
            <v-flex xs4>
              <v-text-field
              v-model="pilatusSpeed"
              label="Top Speed [rpm]"
              type="number">
              </v-text-field>
            </v-flex>
            <v-flex xs4>
              <v-text-field
              xs4
              v-model="pilatusSteps"
              label="Number of Steps"
              type="number">
              </v-text-field>
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
      rigiSteps: 100,
      rigiAccel: 1000,
      rigiSpeed: 80,
      pilatusSteps: 100,
      pilatusAccel: 1000,
      pilatusSpeed: 80
    }
  },
  methods: {
    setStepsRigiUp () {
      this.$socket.emit('driveStepsRigiUp', {
        steps: this.rigiSteps,
        accel: this.rigiAccel,
        speed: this.rigiSpeed
      })
      console.log('sent forward: ' + this.steps)
    },
    setStepsRigiDown () {
      this.$socket.emit('driveStepsRigiDown', {
        steps: this.rigiSteps,
        accel: this.rigiAccel,
        speed: this.rigiSpeed
      })
      console.log('sent backward: ' + this.steps)
    },
    setStepsPilatusUp () {
      this.$socket.emit('driveStepsPilatusUp', {
        steps: this.pilatusSteps,
        accel: this.pilatusAccel,
        speed: this.pilatusSpeed
      })
      console.log('sent forward: ' + this.steps)
    },
    setStepsPilatusDown () {
      this.$socket.emit('driveStepsPilatusDown', {
        steps: this.pilatusSteps,
        accel: this.pilatusAccel,
        speed: this.pilatusSpeed
      })
      console.log('sent backward: ' + this.steps)
    },
    stop () {
      this.$socket.emit('E-stop')
      console.log('E-Stop')
    },
    resetStop () {
      this.$socket.emit('resetStop')
      console.log('Reset')
    },
    moveToStep () {
      this.$socket.emit('moveToStep', {
        toStep: this.toStep
      })
    }
  },
  sockets: {
    connect: function () {
      console.log('connected to backend')
    }
  }
}
</script>
