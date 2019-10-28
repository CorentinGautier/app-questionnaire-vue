<template>
  <div class="login">
    <QuestionnaireComponent msg="Questionnaire" />
  </div>
</template>
<script>
import QuestionnaireComponent from '@/components/QuestionnaireComponent.vue'

export default {
  name: 'Questionnaire',
  components: {
    QuestionnaireComponent
  }
}
</script>
