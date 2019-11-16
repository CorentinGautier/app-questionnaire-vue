<template>
  <div class="admin">
    <button type='submit' v-on:click.stop.prevent='recupInfoUser()'>Display users who begin the test</button>
  </div>
</template>
<script>
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
