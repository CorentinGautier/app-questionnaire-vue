<template>
  <div id='login'>
    <h1>Login</h1>
    <img src="../assets/logo.png" alt="Photo de montagne" />
    <br>
    <br>
    <!-- formulaire de connexion  -->
    <form submit prevent='false'>
      <label for='cguserLastname'>Nom  </label>
      <b-form-input type='text' name='userLastname' v-model='cguserLastname' placeholder='Nom' />
<br>
<br>
      <label for='cguserFirstname'>Prénom  </label>
      <b-form-input type='text' name='userFirstname' v-model='cguserFirstname' placeholder='Prénom' />
<br>
<br>
      <label for='cgsocietyName'>Nom de l'entreprise</label>
      <b-form-input type='text' name='societyName' v-model='cgsocietyName' placeholder='Nom de la société' />
      <br>
      <br>
      <button type='submit' v-on:click.stop.prevent='login()'>Aller au questionnaire</button>
      <br>
    </form>
  </div>
</template>
<script>
// import de pouch DB
import PouchDB from 'pouchdb'
var db = new PouchDB('users') // créer la bdd
db.replicate.to('http://localhost:5984/users') // adresse ma BDD
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
        var user = { // creer un obj user avec ce que l'utilisateur a rentrée
          _id: new Date(), // créer un id avec la date lors de la connexion
          firstname: lui.cguserFirstname,
          lastName: lui.cguserLastname,
          socityName: lui.cgsocietyName
        }
        // console.log(user)
        db.put(user).then(function (doc) { // ajout l'user dans la bdd
          console.log(doc)// retourne le doc avec ce qu'on a inserer dans la bdd
          lui.$router.push(
            '/questionnaire?cguserFirstname=' +
            lui.cguserFirstname +
            '&cguserLastname=' +
            lui.cguserLastname +
            '&cgsocietyName=' +
            lui.cgsocietyName)
          db.replicate.to('http://localhost:5984/users') // actualise
        })
      } else {
        // log d'erreur
        // console.log('Please put your first/last name and your society name.')
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
  padding: 20px;
}
</style>
