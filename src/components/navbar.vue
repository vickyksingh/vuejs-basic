<template>
  <div>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link class="nav-link active" to="/home">Active</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/hello">Link</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/contact">Link</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link " to="#">Disabled</router-link>
      </li>
    </ul>

  </div>
</template>
<script>
export default {};
</script>
<style scoped></style>
