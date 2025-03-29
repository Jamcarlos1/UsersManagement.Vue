<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <div class="content-header">
    <div class="header-top">
      <h1 class="title">Usuários</h1>
      <p class="subtitle">Gerenciamento de usuários do sistema</p>
    </div>
    <nav class="breadcrumb-container">
      <h4 class="breadcrumb-item"><FontAwesomeIcon :icon="faHome" /> Home</h4>
      <span class="breadcrumb-item">Usuários</span>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.content-header {
  display: flex;
  position: fixed;
  width: 100%;
  top: 55px;
  right: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f4f4f4;
  border-bottom: 2px solid #ddd;
  padding: 14px;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
  }
}
.header-top {
  display: flex;
  align-items: center;
  flex-direction: row;
}
.title {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: #444;
  margin: 0;
  margin-left: 10px;
  margin-bottom: 3px;
  margin-right: 13px;

  @media (max-width: 991px) {
    font-size: 20px;
  }
}
.subtitle {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 15px;
  font-weight: 300;
  color: #777;
  margin: 0;
}
.breadcrumb-container {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #444;
  text-decoration: none;

  margin-right: 40px;

  @media (max-width: 991px) {
    position: relative;
    margin-top: 5px;
    top: 0;
    right: 0;
    float: none;
    padding-left: 10px;
    width: 100%;
    background: #d2d6de;
    font-size: 13px;
    padding: 9px 1px;
    border-radius: 2px;
  }
}
.breadcrumb-item {
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    margin-left: 8px;
  }
}

.breadcrumb-item span,
h4 {
  font-weight: 500;
  color: #444;
  cursor: pointer;
}

.breadcrumb-item:not(:last-child)::after {
  content: " > ";
  margin: 7px;
  color: #aaa;

  @media (max-width: 991px) {
    color: #97a0b3;
  }
}

.breadcrumb-item {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
}

.breadcrumb-item a:hover {
  text-decoration: none;
}
</style>
