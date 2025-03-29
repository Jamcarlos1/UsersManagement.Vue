<script setup>
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserPlus, faChartPie } from "@fortawesome/free-solid-svg-icons";

const formData = ref({
  name: "",
  gender: "M",
  birth: "",
  country: "",
  email: "",
  password: "",
  admin: false,
});
</script>

<template>
  <div class="container">
    <div class="table-container">
      <h3>Lista de Usuários</h3>
      <table>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Admin</th>
            <th>Criado em</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody id="table-users"></tbody>
      </table>
    </div>

    <div class="form-container">
      <div class="stats-container">
        <div class="small-box users">
          <h3 id="number-users">0</h3>
          <p>Usuários</p>
          <FontAwesomeIcon class="icon" :icon="faUserPlus" />
        </div>
        <div class="small-box admins">
          <h3 id="number-users-admin">0</h3>
          <p>Administradores</p>
          <FontAwesomeIcon class="icon" :icon="faChartPie" />
        </div>
      </div>

      <h2>Novo Usuário</h2>
      <form>
        <div class="form-group">
          <label>Nome</label>
          <input type="text" v-model="formData.name" required />
        </div>

        <div class="form-group">
          <label>Gênero</label>
          <div class="gender-container">
            <label
              ><input type="radio" value="M" v-model="formData.gender" />
              Masculino</label
            >
            <label
              ><input type="radio" value="F" v-model="formData.gender" />
              Feminino</label
            >
          </div>
        </div>

        <div class="form-group">
          <label>Nascimento</label>
          <input type="date" v-model="formData.birth" />
        </div>

        <div class="form-group">
          <label>País</label>
          <select v-model="formData.country">
            <option value="">Selecione um país</option>
            <option value="Argentina">Argentina</option>
            <option value="Bolivia">Bolívia</option>
            <option value="Brasil">Brasil</option>
            <option value="Colômbia">Colômbia</option>
            <option value="Estados Unidos">Estados Unidos</option>
            <option value="Venezuela">Venezuela</option>
          </select>
        </div>

        <div class="form-group">
          <label>E-mail</label>
          <input type="email" v-model="formData.email" required />
        </div>

        <div class="form-group">
          <label>Senha</label>
          <input type="password" v-model="formData.password" required />
        </div>

        <div class="form-group">
          <label>Foto</label>
          <input type="file" />
        </div>

        <div class="form-group">
          <div class="checkboxContainer">
            <input type="checkbox" id="admin" v-model="formData.admin" />
            <label for="admin">Administrador</label>
          </div>
        </div>

        <button class="button primary">Salvar</button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  position: fixed;
  width: 100%;
  height: 80%;
  top: 125px;
  right: 0;
  gap: 20px;
  padding: 20px;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 9px;
    top: 155px;
    padding: 14px;
    background-color: #f8f9fa;
  }
}

.table-container {
  flex: 2;
  background: white;
  padding: 0;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.container table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  td:nth-child(3) {
    padding-right: 40px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
}

.container th {
  text-align: left;
  padding: 10px;
  background: #f1f1f1;
}

.stats-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.small-box {
  flex: 1;
  color: white;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    margin: 0;
    font-size: 24px;
  }
  p {
    margin: 5px 0 0;
    font-size: 15px;
  }
}

.users {
  background-color: #28a745;
}
.admins {
  background-color: #ffc107;
}
.icon {
  font-size: 24px;
}

.form-container {
  flex: 1;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.form-container h2 {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 500;
  color: #444;
  font-size: 20px;
}

.form-group {
  margin-bottom: 7px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  color: #333;
  font-size: 16px;

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }

  input,
  select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
}

.gender-container {
  display: flex;
  gap: 10px;
}

.checkboxContainer {
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
  font-size: 14px;
  display: flex;
  gap: 8px;
  margin-right: 510px;
}
.button {
  background-color: #28a745;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
}
</style>
