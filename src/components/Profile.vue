<script setup>
import { useUserStore } from "@/stores/user";
import { ref, watch } from "vue";
import History from "../components/History.vue";
import {useAuthStore} from "@/stores/authStore";
let profileLink = ref("loading...");

const userAuth = useAuthStore();
const userStore = useUserStore();
console.log("userInfo Profile: ", userAuth.user)
const localhost = "http://localhost:8080/api/user/" + userAuth.user.userId;

console.log("localhost: ", localhost)

let imgLink = ref("");
let attempt = 0;
const history = ref([]);

const firstName = ref("Loading..");
const lastName = ref("Loading..");
const email = ref("Loading..");
const username = ref("Loading..");

function getStore() {
  try {
    useUserStore().getUser(userAuth.user.userId, userAuth.user.userToken);

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
watch(userStore, (newValue) => {
  firstName.value = newValue.user.fName;
  lastName.value = newValue.user.lName;
  email.value = newValue.user.email;
  username.value = newValue.user.username;
  profileLink.value = newValue.user.profileImage;
  imgLink.value = "http://localhost:8080/" + profileLink.value;
  history.value = Array.from(newValue.user.quizHistory);
})
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
        <main><History :history="history.slice(0, 10)" /></main>
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
