<template>
    <div>
     <h1 class="mb-4 container">{{msg}}</h1>
     <b-card :header="test[cgi].question" header-tag="header">
      <b-list-group>
      <b-list-group-item v-for="(option,cgindex) in test[cgi].options" :key="option" @click="action(cgindex)">
      <b-form-checkbox v-model="option.reponse_user" :value="true">
          {{option.intitule}}
        </b-form-checkbox>
      </b-list-group-item>
      </b-list-group>
      </b-card>
      <b-alert show>Votre score est : {{ score }} / {{ tailleQuestionnaire }}</b-alert>
      <p> v-model : {{ test[0].options[0].reponse_user }} </p>
      <p> v-model : {{ test[0].options[1].reponse_user }} </p>
      <p> v-model : {{ test[0].options[2].reponse_user }} </p>
      <p> v-model : {{ test[1].options[0].reponse_user }} </p>
      <p> v-model : {{ test[1].options[1].reponse_user }} </p>
      <p> v-model : {{ test[1].options[2].reponse_user }} </p>
      <p> v-model : {{ test[2].options[0].reponse_user }} </p>
      <p> v-model : {{ test[2].options[1].reponse_user }} </p>
      <p> v-model : {{ test[2].options[2].reponse_user }} </p>
      <br/>
    </div>
</template>
<script>
import test from '../assets/questionnaire.json'
console.log(test)
console.log(test.test[1].question)
console.log(test.test[1].options)
export default {
  data () {
    return {
      test: test.test,
      tailleQuestionnaire: test['nbQuestions'],
      score: 0,
      resp: String
    }
  },
  name: 'QuestionnaireComponent',
  props: {
    msg: String,
    cgi: Number
  },
  methods: {
    action: function (cgindex) {
      // cherche le libellé de la réponse
      for (const options in test[this.cgi].options) {
        for (const option in options[cgindex]) {
          console.log(this.option)
          if (option.valide === true) {
            this.resp = this.option.intitule
            console.log(this.resp)
          }
        }
      }
      // Test bonne réponse
      for (let intitule in test[cgindex].options.intitule) {
        if (intitule === this.resp) {
          console.log(this.resp)
          console.log(test.question[cgindex].options.valide)
          this.score++
        }
      }
    }
  }
}
</script>
