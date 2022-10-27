import { defineStore } from "pinia";
import { onMounted, ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref([]);
  onMounted(() => {
    fetch("http://localhost:8080/api/user/")
      .then((response) => response.json())
      .then((data) => {
        user.value = data.data;
        console.log(data);
      });
  });

  return {
    user,
  };
});
