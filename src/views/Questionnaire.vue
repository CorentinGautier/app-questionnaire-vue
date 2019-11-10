<template>
  <div v-if="fin == false">
    <QuestionnaireComponent msg="Questionnaire : " :j=i />
    <b-form>
    <b-button type="submit" v-on:click="avant" variant="outline-primary">Question précédente</b-button>
    <b-button type="submit" v-on:click="apres" variant="outline-primary" :hidden="fin">Question précédente</b-button>
    </b-form>
      <p> question n°{{i}}/3</p>
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
      i: 0,
      fin: false
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
      if (this.i > 0) {
        this.i = this.i - 1
        this.fin = false
      } else {
        this.i = this.i
      }
    },
    apres: function () {
      if (this.i < test['nbQuestions'] - 1) {
        this.i = this.i + 1
      } else {
        this.fin = true
      }
    },
    recommencer: function () {
      this.fin = false
      this.i = 0
    }
  }
}
</script>
