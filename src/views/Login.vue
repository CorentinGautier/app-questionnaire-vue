<template>
  <div class="login">
    <LoginComponent msg="Login" />
  </div>
</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue'

export default {
  name: 'login',
  components: {
    LoginComponent
  }
}
</script>
