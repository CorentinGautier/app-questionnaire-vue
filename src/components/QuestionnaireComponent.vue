<template>
  <!-- v-cloak hides any un-compiled data bindings until the Vue instance is ready. -->
  <div id="app" class="container" v-cloak>
    <h1 class="mb-4">Questionnaire </h1>
<p> {{questions[i]["question"]}}


      <div v-for="option in questions[i].options" :key="option">
     <input type="checkBox" value="">{{option}}</div>
     <br>
      </div>
      <!-- <input type="checkBox" value=""> {{ question[item][choix1] }}
      //  <input type="checkBox" value=""> {{ question[item][choix2] }}
      //  <input type="checkBox" value=""> {{ question[item][choix3] }} -->
  </div>
</template>
<script>
import questions from '../assets/questions.json'
console.log(questions.questions[0])

export default {
  data () {
    return {
      questions: questions.questions
    }
  },
  computed: {
    quiz () {
      return questions.questions.map(question => {
        return question
      })
    }
  },
  props: {
    i: Number
  }
}
</script>
