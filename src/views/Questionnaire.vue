<template>
  <div v-if="!cgfin">
    <QuestionnaireComponent msg="Questionnaire : " :cgi=cgi />
    <b-form>
    <b-button type="submit" v-on:click="avant" variant="outline-primary">Question précédente</b-button>
    <b-button type="submit" v-on:click="apres" variant="outline-primary" :hidden="cgfin">Question précédente</b-button>
    </b-form>
      <p> question n°{{cgi}}/{{cgnbQuestions}}</p>
  </div>
  <div v-else>
    <b-button  v-b-popover.hover.top="'Votre score actuel ne sera pas enregistré'" type="submit" v-on:click="recommencer" variant="outline-primary">recommencer</b-button>
    <ResultComponent />
  </div>
</template>
<script>
import QuestionnaireComponent from '@/components/QuestionnaireComponent.vue'
import ResultComponent from '@/components/ResultComponent.vue'
import test from '@/assets/questionnaire.json'
export default {
  name: 'test',
  data () {
    return {
      cgi: 0,
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
    QuestionnaireComponent,
    ResultComponent
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
    },
    recommencer: function () {
      this.cgfin = false
      this.cgi = 0
    }
  }
}
</script>
