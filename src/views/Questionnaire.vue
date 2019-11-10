<template>
  <div v-if="fin == false">
    <QuestionnaireComponent msg="Questionnaire" :j=i />
    <input type="submit" v-on:click="avant" value="Question précédente" />
    <input type="submit" v-on:click="apres" value="Question suivante" />
      <p> question n°{{i}}/3</p>
  </div>
  <div v-else>
    <input type="submit" v-on:click="Recommencer()" value="Recommencez" />
    <ResultComponent />
  </div>
</template>
<script>
import QuestionnaireComponent from '@/components/QuestionnaireComponent.vue'
import ResultComponent from '@/components/ResultComponent.vue'
export default {
  name: 'Questionnaire',
  data () {
    return {
      i: 0,
      fin: false
    }
  },
  components: {
    QuestionnaireComponent,
    ResultComponent
  },
  methods: {
    avant: function () {
      if (this.i !== 0) {
        console.log('avant')
        this.i = this.i - 1
      } else {
        console.log('avant bloqué')
      }
    },
    apres: function () {
      if (this.i !== 2) {
        console.log('après')
        this.i = this.i + 1
      } else {
        console.log('fin des questions')
        this.fin = true
      }
    },
    recommencer: function () {
      this.fin = false
      this.i = 0
    }
  }
}
</script>
