<template>
  <div id="app" class="container">
    <h1 class="mb-4">Questionnaire </h1>
    <b-card header="question entete" header-tag="header">
      <ul>
        <li v-for="question in quiz" :key="question">
        {{question["question"]}}
        </li>
        <input type="radio" value="">  {{ question["choix1"]}}
        <input type="radio">{{ question["choix2"]}}
        <input type="radio">{{ question["choix3"] }}
      </ul>
    </b-card>
  </div>
</template>
<script>
import cgquiz from '../assets/questions.json'
export default {
  computed: {
    quiz () {
      return cgquiz.quiz.map(item => {
        return item
      })
    }
  }
}
</script>
