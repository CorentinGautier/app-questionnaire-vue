<template>
  <div>
    <QuestionnaireComponent msg="Questionnaire : " :cgi=cgi v-bind:cgresponseOK="false" />
    <b-form>
    <b-button type="submit" v-on:click="avant" variant="outline-primary">Question précédente</b-button>
    <b-button type="submit" v-on:click="apres" variant="outline-primary" :hidden="cgfin">Question suivante</b-button>
    </b-form>
      <p> question n°{{cgi}}/{{cgnbQuestions -1 }}</p>
  </div>
</template>
<script>
import QuestionnaireComponent from '@/components/QuestionnaireComponent.vue'
import test from '@/assets/questionnaire.json'
export default {
  name: 'test',
  data () {
    return {
      cgi: 0,
      cgresponseOK: false,
      cgfin: false,
      cgnbQuestions: test['nbQuestions']
    }
  },
  computed: {
    test () {
      return test.nbQuestions
    }
  },
  components: {
    QuestionnaireComponent
  },
  methods: {
    avant: function () {
      if (this.cgi > 0) {
        this.cgi = this.cgi - 1
        this.cgfin = false
      } else {
        this.cgi = this.cgi
      }
    },
    apres: function () {
      if (this.cgi < test['nbQuestions'] - 1) {
        this.cgi = this.cgi + 1
      } else {
        this.cgfin = true
      }
    }
  }
}
</script>
