<template>
  <div class="header">
    <img src="@/assets/github.png" />
    <form class="search-form">
      <input placeholder="Enter Username or Repo..." />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;

  img {
    height: 32px;
    width: 32px;
    flex-shrink: 0;
  }

  .search-form {
    padding-left: 10px;
    width: 100%;

    input {
      background: var(--search);
      outline: 0;
      border-radius: 6px;
      padding: 7px 12px;
      width: 100%;

      &:focus {
        width: 318px;
      }

      transition: width 200ms ease-out, color 200ms ease-out;
    }
  }
}
</style>
