<template>
<div>
 <br>
 <h1>Bravo, vous avez fini ! </h1>
 <br>
 <b-button type="submit" v-on:click="check"  variant="outline-primary">Calculer mon score</b-button>
 <p v-if = 'displayScore'>
 <p>Votre score est de : {{ score }}
 </p>
 </div>
</template>

<script>
import questions from '../assets/questions.json'
export default {
  data () {
    return {
      questions: questions.questions,
      displayScore: Boolean
    }
  },
  props: {
    options: Array,
    reponses: Array,
    score: Number,
    j: Number
  },
  methods: {
    check () {
      this.score = 0
      this.j = 0
      for (this.options in questions[this.j]) {
        console.log('option', this.options)
        for (this.reponses in this.options) {
          if (this.reponse.reponseUser === this.reponse.valide === true) {
            this.score++
          }
        }
        this.j = this.j + 1
      }
      this.displayScore = true
      console.log('score', this.score)
    }
  }
}
</script>
