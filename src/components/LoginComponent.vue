<template>
  <div id='login'>
    <h1>{{ msg }}</h1>
    <form submit prevent='false'>
      <label for='cguserLastname'>LastName</label>
      <input type='text' name='userLastname' v-model='cguserLastname' placeholder='Nom' />

      <label for='cguserFirstname'>FirstName</label>
      <input type='text' name='userFirstname' v-model='cguserFirstname' placeholder='Prénom' />

      <label for='cgsocietyName'>Society Name</label>
      <input type='text' name='societyName' v-model='cgsocietyName' placeholder='Nom de la société' />
      <button type='submit' v-on:click.stop.prevent='login()'>Begin the test</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      cguserLastname: '',
      cguserFirstname: '',
      cgsocietyName: ''
    }
  },
  methods: {
    login () {
      if (
        this.cguserFirstname !== '' &&
        this.cguserLastname !== '' &&
        this.cgsocietyName !== ''
      ) {
        this.$router.push(
          '/questionnaire?cguserFirstname=' +
            this.cguserFirstname +
            '&cguserLastname=' +
            this.cguserLastname +
            '&cgsocietyName=' +
            this.cgsocietyName
        )
      } else {
        console.log = 'Please put your first/last name and your society name.'
      }
    }
  }
}
</script>
<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>
