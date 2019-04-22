<template>
  <div>
    <p>姓名</p>
    <input type="text" v-model="username" /><br />
    <p>密码</p>
    <input type="text" v-model="password" /><br />
    <button @click="handLogin">登录</button>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { userlogin, User } from "@/api/users";

@Component
export default class login extends Vue {
  username: string = "";
  password: string = "";
  user: User = { userName: this.username, password: this.password };

  private handLogin() {
    userlogin(this.user);
    this.$router.push("/IconPage");
  }
}
</script>
