<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import avatar5 from "../../assets/avatar5.png";
</script>
<template>
  <div>
    <div class="header-container">
      <div class="left-container">
        <div class="menu-icon">
          <FontAwesomeIcon :icon="faBars" />
        </div>
      </div>

      <div class="user-info">
        <img :src="avatar5" alt="Usuário" class="user-avatar" />
        <div class="user-name">Carlos Junior</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-container {
  background-color: #3c8dbc;
  color: white;
  padding: 0 15px;
  width: 100%;
  height: 55px;
  left: 0;
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    float: none;
  }
}

.left-container {
  display: flex;
  align-items: center;
}

.menu-icon {
  font-size: 17px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 1px 0 0 0;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
}

.user-info {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  border-radius: 1px 0 0 0;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    margin-right: 25px;
    cursor: pointer;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
}

.user-name {
  font-size: 16px;
  font-weight: bold;
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;

  @media (max-width: 768px) {
    display: none;
  }
}
</style>
