<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <DashBoardComponent msg="Welcome to you !"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DashBoardComponent from '@/components/DashBoardComponent.vue'

export default {
  name: 'home',
  components: {
    DashBoardComponent
  }
}
</script>
