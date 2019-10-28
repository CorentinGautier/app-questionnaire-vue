<template>
  <div id="app" class="container">
    <h1 class="mb-4">un petit quiz</h1>
    <b-card header="question entete" header-tag="header">
      <b-list-group>
        <b-list-group-item button>choix 1</b-list-group-item>
        <b-list-group-item button>choix 2</b-list-group-item>
        <b-list-group-item button>choix 3</b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>
<script>
import quiz from '../questions.js'
console.log(quiz)
export default {
  name: 'questionnaire'
}
</script>
