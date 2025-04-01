<script setup>
import Header from "./components/header/Header.vue";
import UsersHeader from "./components/section/UsersHeader.vue";
import UsersForm from "./components/section/UsersForm.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <Header />
    </div>
  </header>

  <main>
    <UsersHeader />
  </main>
  <section>
    <UsersForm />
  </section>
</template>

<style scoped>
header {
  line-height: 3.5;
}

.logo {
  display: flex;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
