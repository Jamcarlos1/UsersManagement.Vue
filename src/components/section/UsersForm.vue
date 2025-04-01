<script setup>
import { ref, onMounted, computed } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserPlus, faChartPie } from "@fortawesome/free-solid-svg-icons";
import Avatar5 from "../../assets/avatar5.png";
const fileInputRef = ref(null);
const users = ref([]);
const editingIndex = ref(null);

const defaultFormData = () => ({
  name: "",
  gender: "M",
  birth: "",
  country: "",
  email: "",
  password: "",
  photo: "",
  admin: false,
  createdAt: new Date().toISOString(),
  updatedAt: null,
});

const formData = ref(defaultFormData());

onMounted(() => {
  loadUsers();
});

const loadUsers = () => {
  users.value = JSON.parse(localStorage.getItem("users")) || [];
};

const totalUsers = computed(() => users.value.length);
const totalAdmins = computed(
  () => users.value.filter((user) => user.admin).length
);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      formData.value.photo = reader.result;
    };
    reader.readAsDataURL(file);
  }
};

const handleSubmit = () => {
  let lastId = Number(localStorage.getItem("lastUserId")) || 0;
  let updatedUsers;
  if (editingIndex.value !== null) {
    updatedUsers = users.value.map((user, index) =>
      index === editingIndex.value
        ? {
            ...formData.value,
            id: user.id,
            createdAt: user.createdAt,
            updatedAt: new Date().toISOString(),
          }
        : user
    );
    editingIndex.value = null;
  } else {
    const newId = lastId + 1;
    updatedUsers = [...users.value, { ...formData.value, id: newId }];
    localStorage.setItem("lastUserId", newId);
  }
  users.value = updatedUsers;
  localStorage.setItem("users", JSON.stringify(updatedUsers));
  resetForm();
};

const resetForm = () => {
  formData.value = defaultFormData();
  editingIndex.value = null;
  if (fileInputRef.value) fileInputRef.value.value = "";
};

const editUser = (index) => {
  formData.value = { ...users.value[index] };
  editingIndex.value = index;
};

const deleteUser = (index) => {
  if (confirm("Deseja realmente excluir?")) {
    users.value.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users.value));
  }
};

const dateFormat = (date) => {
  date = new Date(date);
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return (
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    minutes
  );
};
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
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td><img :src="user.photo || Avatar5" class="userImage" /></td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.admin ? "Sim" : "Não" }}</td>
            <td>
              {{
                user.updatedAt
                  ? `Editado em: ${dateFormat(user.updatedAt)}`
                  : dateFormat(user.createdAt)
              }}
            </td>
            <td>
              <button class="actionButton" @click="editUser(index)">
                Editar
              </button>
              <button class="buttonDanger" @click="deleteUser(index)">
                Excluir
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="form-container">
      <div class="stats-container">
        <div class="small-box users">
          <h3>{{ totalUsers }}</h3>
          <p>Usuários</p>
          <FontAwesomeIcon class="icon" :icon="faUserPlus" />
        </div>
        <div class="small-box admins">
          <h3>{{ totalAdmins }}</h3>
          <p>Administradores</p>
          <FontAwesomeIcon class="icon" :icon="faChartPie" />
        </div>
      </div>
      <h2>{{ editingIndex !== null ? "Editar Usuário" : "Novo Usuário" }}</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>Nome</label>
          <input type="text" v-model="formData.name" required />
        </div>
        <div class="form-group">
          <label>Gênero</label>
          <div class="gender-container">
            <label>
              <input type="radio" value="M" v-model="formData.gender" />
              Masculino
            </label>
            <label>
              <input type="radio" value="F" v-model="formData.gender" />
              Feminino
            </label>
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
          <input type="file" ref="fileInputRef" @change="handleFileChange" />
        </div>
        <div class="checkboxContainer">
          <input type="checkbox" id="admin" v-model="formData.admin" />
          <label for="admin">Administrador</label>
        </div>
        <button type="submit">
          {{ editingIndex !== null ? "Atualizar" : "Salvar" }}
        </button>
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

th {
  background-color: #f4f4f4;
  color: #333;
  padding: 12px;
  text-align: left;
  font-weight: bold;
  border-bottom: 2px solid #ddd;
}

td {
  padding: 1px;
}

tbody tr:nth-child(even) {
  background-color: #f8f9fa;
}

tbody {
  padding: 0;
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

.userImage {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
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
  padding: 5px;
}

.actionButton {
  padding: 4px 8px;
  margin: 2px;
  border: none;

  cursor: pointer;
  color: #fff;
  background-color: #007bff;

  &:hover {
    opacity: 0.8;
  }
}

.buttonDanger {
  padding: 4px 8px;
  margin: 2px;
  border: none;

  cursor: pointer;
  color: #fff;
  background-color: #dc3545;

  &:hover {
    opacity: 0.8;
  }
}
button {
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
