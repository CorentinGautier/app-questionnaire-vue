<template>
  <div v-if="fin == false">
    <QuestionnaireComponent msg="Questionnaire" :j=i />
    <input type="submit" v-on:click="avant" value="Question précédente" />
    <input type="submit" v-on:click="apres" value="Question suivante" />
      <p>question n°{{i}}</p>
  </div>
  <div v-else>
    <h1>Affichage des scores</h1>
    <input type="submit" v-on:click="recommencer" value="Recommencez" />
  </div>
</template>
<script>
import QuestionnaireComponent from '@/components/QuestionnaireComponent.vue'
export default {
  name: 'Questionnaire',
  data () {
    return {
      i: 1,
      fin: false
    }
  },
  components: {
    QuestionnaireComponent
  },
  methods: {
    avant: function () {
      if (this.i !== 1) {
        console.log('avant')
        this.i = this.i - 1
      } else {
        console.log('avant bloqué')
      }
    },
    apres: function () {
      if (this.i !== 3) {
        console.log('après')
        this.i = this.i + 1
      } else {
        console.log('fin des questions')
        this.fin = true
      }
    },
    recommencer: function () {
      this.fin = false
      this.i = 1
    }
  }
}
</script>
