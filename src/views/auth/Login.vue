<script setup lang="ts">
import { useAuth } from "../../composables";

const { signGoogle, signOutGoogle } = useAuth();

const login = async () => {
  const user = await signGoogle();
  console.log(user);
};

const logout = async () => {
  await signOutGoogle();
};
</script>
<template>
  <link
    rel="stylesheet"
    type="text/css"
    href="//fonts.googleapis.com/css?family=Open+Sans"
  />

  <div class="google-btn" @click="login">
    <div class="google-icon-wrapper">
      <img
        class="google-icon"
        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
      />
    </div>
    <p class="btn-text"><b>Sign in with google</b></p>
  </div>

  <button @click="logout">close session</button>
</template>

<style lang="css" scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:500);

:root {
  --white: #fff;
  --google-blue: #4285f4;
  --button-active-blue: #1669f2;
}

.google-btn {
  width: 184px;
  height: 42px;
  background-color: var(--google-blue);
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
}

.google-icon-wrapper {
  position: absolute;
  margin-top: 1px;
  margin-left: 1px;
  width: 40px;
  height: 40px;
  border-radius: 2px;
  background-color: var(--white);
}
.google-icon {
  position: absolute;
  margin-top: 11px;
  margin-left: 11px;
  width: 18px;
  height: 18px;
}
.btn-text {
  float: right;
  margin: 11px 11px 0 0;
  color: var(--white);
  font-size: 14px;
  letter-spacing: 0.2px;
  font-family: "Roboto";
}
.google-btn:hover {
  box-shadow: 0 0 6px var(--google-blue);
}
.google-btn:active {
  background: var(--button-active-blue);
}
</style>
