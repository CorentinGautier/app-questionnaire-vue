<template>
  <div class="admin">
    <a href="http://localhost:5984/_utils/#database/cgusers/_all_docs" target="_blank">lien vers la BDD</a>
    <br>
     <div v-if ="display">
     <h2>Liste des personnes qui ont fait le questionnaire : </h2>
     <br>
    <div  v-for="cguser in cgusers" v-bind:key="cguser.id">
    <p class = "align"> {{' FirstName : ' + cguser.doc.firstname + ' , LastName : '  + cguser.doc.lastName + ', socityName : ' + cguser.doc.socityName }} </p>
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
      display: false
    }
  },
  created () {
    this.recupInfoUser()
  },
  methods: {
    recupInfoUser () {
      var cgvm = this
      db.allDocs({
        include_docs: true,
        attachments: true
      }).then(function (result) {
        cgvm.cgusers = result.rows
        cgvm.display = true
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
