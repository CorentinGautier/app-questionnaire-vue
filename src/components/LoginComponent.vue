<template>
  <div id='login'>
    <h1>Login</h1>
    <img src="../assets/logo.png" alt="Photo de montagne" />
    <br>
    <br>
    <form submit prevent='false'>
      <label for='cguserLastname'>LastName</label>
      <input type='text' name='userLastname' v-model='cguserLastname' placeholder='Nom' />
<br>
<br>
      <label for='cguserFirstname'>FirstName</label>
      <input type='text' name='userFirstname' v-model='cguserFirstname' placeholder='Prénom' />
<br>
<br>
      <label for='cgsocietyName'>Society Name</label>
      <input type='text' name='societyName' v-model='cgsocietyName' placeholder='Nom de la société' />
      <br>
      <br>
      <button type='submit' v-on:click.stop.prevent='login()'>Begin the test</button>
      <br>
    </form>
  </div>
</template>
<script>
import PouchDB from 'pouchdb'
var db = new PouchDB('users') // créer la bdd
db.replicate.to('http://localhost:5984/users') //
export default {
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
        var lui = this
        var user = { // creer un obj user
          _id: Math.random().toString(36).substr(2, 9), // créer un id aléatoire
          firstname: lui.cguserFirstname,
          lastName: lui.cguserLastname,
          socityName: lui.cgsocietyName
        }
        db.put(user).then(function (doc) { // ajout l'user dans la bdd
          console.log(doc)// retourne le doc avec ce qu'on a inserer dans la bdd
          lui.$router.push(
            '/questionnaire?cguserFirstname=' +
            lui.cguserFirstname +
            '&cguserLastname=' +
            lui.cguserLastname +
            '&cgsocietyName=' +
            lui.cgsocietyName
          )
          db.replicate.to('http://localhost:5984/users') //   actualise
        })
      } else {
        console.log('Please put your first/last name and your society name.')
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
