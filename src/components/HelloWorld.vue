<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p> Voici les différentes choses que vous pouvez faire dans cette petite application web, il faut se connecter pour pouvoir répondre au questionnaire</p>
       <br>
      <router-link to="/about">about</router-link>
      <br>
      <router-link to="/login">Login</router-link>
       <br>
      <router-link to="/admin">Admin</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
