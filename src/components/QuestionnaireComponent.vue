<template>
  <!-- v-cloak hides any un-compiled data bindings until the Vue instance is ready. -->
  <div id="app" class="container" v-cloak>
    <h1 class="mb-4">{{msg}} </h1>
    <p> {{questions[j]["question"]}} </p>
      <input type="checkBox" value="">{{questions[j]["options1"]}}
      <br>
      <input type="checkBox" value="">{{questions[j]["options2"]}}
      <br>
      <input type="checkBox" value="">{{questions[j]["options3"]}}
      <br>
  </div>
</template>
<script>
import questions from '../assets/questions.json'
console.log(questions.questions[0].options1)
export default {
  data () {
    return {
      questions: questions.questions
    }
  },
  props: {
    msg: String,
    j: Number
  }
}
</script>
