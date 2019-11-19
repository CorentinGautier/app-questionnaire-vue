<template>
  <div class="admin">
    <div v-if="!cgacces">
    <h2> Connectez -vous pour voir les utilisateurs qui ont déjà fait ce questionnaire </h2>
    <form submit prevent='false'>
        <label for='accesLogin'>Login</label>
        <b-form-input type='text' name='adminLogin' v-model='accesLogin' placeholder='' />
        <br>
        <br>
        <label for='accesPassword'>Password</label>
        <b-form-input type='password' name='adminPassWord' v-model='accesPassword' placeholder=''/>
        </form>
        <button type='submit' v-on:click.stop.prevent='login()'>Valider la connection</button>
    </div>
    <div v-if="cgacces">
    <p> Lien vers la BDD : <a href="http://localhost:5984/_utils/#database/cgusers/_all_docs" target="_blank">ICI</a> </p>
    <br>
    <div v-if ="cgdisplay && cgusers.length">
      <h2>Liste des personnes qui ont fait le questionnaire : </h2>
      <br>
      <div v-for="cguser in cgusers" v-bind:key="cguser.id">
        <p class = "align"> {{' FirstName : ' + cguser.doc.firstname + ' , LastName : '  + cguser.doc.lastName + ', socityName : ' + cguser.doc.socityName }} </p>
      </div>
      </div>
    <div v-if="!cgusers.length">
      <p>aucun utilisateur pour l'intant</p>
    </div>
    </div>
  </div>
</template>
<script>
// import de pouch DB
import PouchDB from 'pouchdb'
var db = new PouchDB('users') // créer la bdd
db.replicate.to('http://localhost:5984/users') // lien vers la BDD
export default {
  data () {
    return {
      cgusers: Object,
      cgdisplay: false,
      accesLogin: '',
      accesPassword: '',
      cgacces: false
    }
  },
  methods: {
    login () {
      // verifi que l'user peut se connecter
      if (this.accesLogin === 'login' && this.accesPassword === 'password') {
        this.cgacces = true
        this.recupInfoUser()
      }
    },
    recupInfoUser () {
      // recupère les infos dans la bdd
      var cgvm = this
      db.allDocs({
        include_docs: true,
        attachments: true
      }).then(function (result) {
        cgvm.cgusers = result.rows
        cgvm.cgdisplay = true
      })
    }
  }
}
</script>
<css>
.align{
 text-align: left;
 margin-left : 15%
}
</css>
