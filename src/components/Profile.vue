<script setup>
import { useUserStore } from "@/stores/user";
import { ref } from "vue";
import History from "../components/History.vue";

let profileLink = ref("loading...");
const localhost = "http://localhost:8080/";
let imgLink = ref("");
let userStore;
let attempt = 0;
const history = ref([]);

const firstName = ref("Loading..");
const lastName = ref("Loading..");
const email = ref("Loading..");
const username = ref("Loading..");

function getStore() {
  try {
    userStore = useUserStore();
    profileLink.value = userStore.user[9].profileImage;
    imgLink.value = localhost + profileLink.value;

    firstName.value = userStore.user[9].fName;
    lastName.value = userStore.user[9].lName;
    email.value = userStore.user[9].email;
    username.value = userStore.user[9].username;

    history.value = Array.from(userStore.user[1].quizHistory);

    console.log("image", imgLink.value);
  } catch (e) {
    if (attempt > 10) {
      throw new Error("Something went wrong");
    } else {
      console.log(attempt);
      attempt++;
      setTimeout(() => {
        getStore();
      }, 500);
    }
  }
}
getStore();
</script>

<template>
  <div class="container">
    <h1></h1>
    <div class="userBox">
      <img :src="imgLink" alt="placeholder-img" />
      <h1>Username: {{ username }}</h1>
      <h1>First Name: {{ firstName }}</h1>
      <h1>Last Name: {{ lastName }}</h1>
      <h1>Email: {{ email }}</h1>
    </div>
    <div class="imageBox">
      <div class="history">
        <main><History :quiz-history="history" /></main>
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
