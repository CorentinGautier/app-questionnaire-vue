<template>
<div>
    <div v-if = '!displayScore'>
     <h1 class="mb-4 container">{{msg}}</h1>
     <b-card :header="test[cgi].question" header-tag="header">
      <b-list-group v-if='responseOK' >
        <b-list-group-item disabled v-for="(option,cgindex) in test[cgi].options" :key="option.intitule" @click="action(cgindex)">
           <b-list-group-item name="question" v-model="option.reponse_user" :value="true">
             {{option.intitule}}
            </b-list-group-item>
        </b-list-group-item>
      </b-list-group>
      <b-list-group v-if='!responseOK' >
        <b-list-group-item  v-for="(option,cgindex) in test[cgi].options" :key="option.intitule" @click="action(cgindex)">
          <b-list-group-item name="question" v-model="option.reponse_user" :value="true">
            {{option.intitule}}
          </b-list-group-item>
        </b-list-group-item>
      </b-list-group>
      </b-card>
      <b-alert show>Votre score est : {{ score }} / {{ tailleQuestionnaire }}</b-alert>
      <br/>
    <b-button type="submit" v-on:click="recommencer" variant="outline-primary">Recommencer</b-button>
    </div>
 <br/>
 <div v-if = 'displayScore'>
  <h1>Bravo, vous avez fini ! </h1>
    <b-button type="submit" v-on:click="recommencer" variant="outline-primary">Recommencer</b-button>
    <br/>
 <b-alert show variant="success">Votre score est : {{ score }} / {{ tailleQuestionnaire }}</b-alert>
 <b-alert show variant="danger">Votre nombre d'erreur est de : {{ nbErreur }}</b-alert>
 </div>
</div>
</template>
<script>
import test from '../assets/questionnaire.json'
export default {
  data () {
    return {
      test: test.test,
      tailleQuestionnaire: test['nbQuestions'],
      score: 0,
      resp: String,
      displayScore: false,
      passage: 0,
      messages: [],
      nbErreur: 0
    }
  },
  name: 'QuestionnaireComponent',
  props: {
    msg: String,
    cgi: Number,
    responseOK: Boolean
  },
  methods: {
    action: function (cgindex) {
      if (this.passage === this.cgi) {
        // cherche le libellé de la réponse
        if (test.test[this.cgi].options[cgindex].valide === true) {
          this.resp = test.test[this.cgi].options[cgindex].intitule
          this.score = this.score + 1
          this.responseOK = true
        }
      } else {
        this.passage = this.cgi
        this.responseOK = false
        this.nbErreur = this.nbErreur + 1
      }
      if (this.score === test['nbQuestions']) {
        this.displayScore = true
      }
      console.log(this.passage)
      console.log(this.cgi)
      console.log(this.score)
      console.log(this.nbErreur)
    },
    recommencer: function () {
      this.cgfin = false
      this.cgi = 0
      this.responseOK = false
      this.score = 0
      this.displayScore = false
    }
  }
}
</script>
