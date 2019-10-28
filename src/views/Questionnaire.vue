<template>
  <div class="login">
    <QuestionnaireComponent msg="Questionnaire" :i="i" />
    <input type="submit" onclick="avant()" value="Question précéfente" />
    <input type="submit" onclick="apres()" value="Question suivante" />
  </div>
</template>
<script>
import QuestionnaireComponent from '@/components/QuestionnaireComponent.vue'
export default {
  name: 'Questionnaire',
  data () {
    return {
      i: 0
    }
  },
  components: {
    QuestionnaireComponent
  },
  methods: {
    avant: function () {
      this.i = this.i - 1
    },
    apres: function () {
      this.i = this.i - 1
    }
  }
}
</script>
