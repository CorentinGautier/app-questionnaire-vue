<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <DashBoardComponent msg="Bienvenue"/>
    <!-- ajoute le composant menu pour ce déplacer dans l'app -->
  </div>
</template>

<script>
// import du menu
import DashBoardComponent from '@/components/DashBoardComponent.vue'

export default {
  name: 'home',
  components: {
    DashBoardComponent
  }
}
</script>
