<template>
  <q-layout>
    <!-- Header, Footer, and other layout elements -->
    <!-- <q-header>
      <q-toolbar>
        <q-toolbar-title>Profile Area</q-toolbar-title>
      </q-toolbar>
    </q-header> -->

    <q-page-container>
      <!-- This will be where LoginPage or SignupPage will be injected -->
      <router-view />
    </q-page-container>

    <q-footer class="bg-black">
      <div class="text-center">This that this that this that this that</div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "AuthLayout",
};
</script>
