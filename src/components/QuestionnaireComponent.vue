<template>
  <!-- v-cloak hides any un-compiled data bindings until the Vue instance is ready. -->
  <div id="app" class="container" v-cloak>
    <h1 class="mb-4">{{msg}} </h1>
    <p> {{questions[j]["question"]}} </p>

  <div v-for="option in questions[j].options" :key="option">
     <input type="checkBox" v-model="checkedValue" value="">{{option}}
  </div>
     <br>
    <!-- // <input type="checkBox" name="" v-model="checkedValue" value="">{{questions[j]["options1"]}}
      <br>
      <input type="checkBox" name="" value="">{{questions[j]["options2"]}}
      <br>
      <input type="checkBox" name="" value="">{{questions[j]["options3"]}}
      <br> -->
    <p> selectionner : {{checkedValue}} </p>
  </div>
</template>
<script>
import questions from '../assets/questions.json'
export default {
  data () {
    return {
      checkedValue: [],
      questions: questions.questions
    }
  },
  props: {
    msg: String,
    j: Number
  },
  methods: {
    check () {
    }
  }
  // ,emitResult () {
  //     this.$emit('input', this.result)
  //   },
}
</script>
