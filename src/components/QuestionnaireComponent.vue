<template>
  <!-- v-cloak hides any un-compiled data bindings until the Vue instance is ready. -->
  <div id="app" class="container">
   <h1 class="mb-4">{{msg}} </h1>
<div  v-if="questions.length > 0">
  {{questions[j].question}}
  <!-- i=0;-->
  <div v-for="option in questions[j].options" :key="option.intitule">
  {{option.intitule}}
     <input type="checkBox" v-model="option.reponseUser">
  </div>
     <!-- <p> v-model : {{ questions[i].options[j].reponseUser }} </p>
      <p> v-model : {{ questions[i].options[j].reponseUser }} </p>
      <p> v-model : {{ questions[i].options[2].reponseUser }} </p> -->
  </div>
  </div>
</template>
<script>
import questions from '../assets/questions.json'
export default {
  data () {
    return {
      questions: questions.questions
    }
  },
  name: 'QuestionnaireComponent',
  props: {
    msg: String,
    j: Number,
    score: Number
  },
  methods: {
    check () {
      var i = 0
      var j = 0
      for (j in questions[j]) {
        for (i in questions[j].question[i]) {
          if (questions[i].options[j].reponseUser === questions[i].option[j].valide) {
            this.score++
          }
        }
      }
      console.log(this.score)
    }
  }
}
</script>
