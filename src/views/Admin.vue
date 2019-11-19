<template>
  <div class="admin">
    <button type='submit' v-on:click.stop.prevent='recupInfoUser()'>Affichage des utilisateurs du questionnaire</button>
    <br>
    <br>
    <br>
    <a href="http://localhost:5984/_utils/#database/users/_all_docs" target="_blank">Affichage de la BDD</a>
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
      users: []
    }
  },
  methods: {
    recupInfoUser () {
      db.allDocs({
        include_docs: true,
        attachments: true
      })
    }
  }
}
</script>
