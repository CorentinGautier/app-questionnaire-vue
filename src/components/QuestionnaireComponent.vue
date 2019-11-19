<template>
<div>
    <div v-if = '!cgdisplayScore'>
     <h1 class="mb-4 container">{{msg}}</h1>
     <b-card :header="test[cgi].question" header-tag="header">
      <!-- bloque les question si la réponse est bonne -->
      <b-list-group class="red" v-if='responseOK' >
        <b-list-group-item disabled v-for="(option,cgindex) in test[cgi].options" :key="option.intitule" @click="action(cgindex)">
           <b-list-group-item  active name="question" v-model="option.reponse_user" :value="true">
             {{option.intitule}}
            </b-list-group-item>
        </b-list-group-item>
      </b-list-group>
      <!--  affichage des questions -->
      <b-list-group v-if='!responseOK' >
        <b-list-group-item v-for="(option,cgindex) in test[cgi].options" :key="option.intitule" @click="action(cgindex)">
          <b-list-group-item name="question" v-model="option.reponse_user" :value="true">
            {{option.intitule}}
          </b-list-group-item>
        </b-list-group-item>
      </b-list-group>
      </b-card>
      <!-- information sur la placement et sur le nombre d'erreur du joueur -->
      <b-alert show>Votre avancement est : {{ cgavancement }} / {{ cgtailleQuestionnaire }}</b-alert>
      <b-alert show variant="danger">Votre nombre d'erreur est de : {{ cgnbErreur }}</b-alert>
      <br/>
    <b-button type="submit" v-on:click="recommencer" variant="outline-primary">Recommencer</b-button>
    </div>
 <br/>
 <!-- affiché a la fin des questions -->
 <div v-if = 'cgdisplayScore'>
  <h1>Bravo, vous avez fini ! </h1>
    <b-button type="submit" v-on:click="recommencer" variant="outline-primary">Recommencer</b-button>
    <br/>
    <br/>
 <b-alert show variant="success">Votre avancement est de : {{ cgavancement }} / {{ cgtailleQuestionnaire }}</b-alert>
 <b-alert show variant="danger">Votre nombre d'erreur est de : {{ cgnbErreur }}</b-alert>
 <b-alert show variant="info">Votre score final est : {{ cgavancement - cgnbErreur }}</b-alert>
 </div>
</div>
</template>
<script>
import test from '../assets/questionnaire.json'
export default {
  data () {
    return {
      test: test.test,
      cgtailleQuestionnaire: test['nbQuestions'],
      cgavancement: 0,
      cgdisplayScore: false,
      cgpassage: 1,
      cgnbErreur: 0
    }
  },
  name: 'QuestionnaireComponent',
  props: {
    msg: String,
    cgi: Number,
    responseOK: Boolean
  },
  created: function () {
    // function au lancement du composant
    this.cgi = this.cgi + 1
    this.passage = this.cgi
  },
  methods: {
    action: function (cgindex) {
      var valide = test.test[this.cgi].options[cgindex].valide
      // cherche si la réponse choisi est considéré comme vrai dans le json
      if (valide === true) {
        this.cgavancement = this.cgavancement + 1
        this.responseOK = true
        this.passage = this.passage + 1
      } else {
        // si la réponse choisi est fausse
        this.cgpassage = this.cgi
        this.responseOK = false
        this.cgnbErreur = this.cgnbErreur + 1
      }
      if (this.cgavancement === this.cgtailleQuestionnaire) {
        // verification si la fin du fichier est maintenant ou pas
        this.cgdisplayScore = true
      }
    },
    recommencer: function () {
      this.cgfin = false
      this.cgi = 0
      this.responseOK = false
      this.cgavancement = 0
      this.cgpassage = 0
      this.cgdisplayScore = false
      this.cgnbErreur = 0
    }
  }
}
</script>
<css>
.red{
  background:red;
}
</css>
