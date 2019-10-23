<template>
  <div id='login'>
   <h1>Login</h1>
    <input type='text' name='userLastname' v-model='input.cguserLastname' placeholder='Nom' />
    <input type='text' name='userFirstname' v-model='input.cguserFirstname' placeholder='Prénom' />
    <input
      type='text'
      name='societyName'
      v-model='input.cgsocietyName'
      placeholder='Nom de la société'
    />
    <button type='button' v-on:click='login()'>Login</button>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      input: {
        cguserLastname: '',
        cguserFirstname: '',
        cgsocietyName: ''
      }
    }
  },
  methods: {
    login () {
      if (this.cguserFirstname !== '' && this.cguserLastname !== '' && this.cgsocietyName !== '') {
        return true
      } else {
        console.log = 'Please put your first.last name and your society name.'
        return false
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
