<script setup>
import users from "../../json/users.json";
import History from "../components/History.vue"

const user = users.users[1]


</script>


<template>
  <div class="container">
    <div class="userBox">
      <img src="src/assets/placeholder-image.png" alt="placeholder-img" />
      <h1>First Name: {{ user.firstName }}</h1>
      <h1>Last Name: {{ user.lastName }}</h1>
      <h1>Email: {{ user.email }}</h1>
      <h1>Username: {{  user.username }}</h1>
    </div>
    <div class="imageBox">
    <div class="history">
      <main>
        <History/>
      </main>
    </div>
    </div>
  </div>
</template>

<style scoped>


.userBox h1 {
  margin-bottom: 2em;
}

.userBox {
  font-size: 1.2em;
  padding: 0;
  margin-top: 2em;
  color: #c84b31;
}

.userBox img {
  width: 25vw;
}

.container {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 1024px) {
  .history {
    display: none;
  }

  .container {
    display: flex;
    flex-direction: column;


  }

  .userBox {
    flex-grow: 1;
    text-align: center;
  }

  .userBox img {
    width: 60vw;
  }


}
</style>