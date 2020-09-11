<template>
  <div class="header">
    <img src="@/assets/github.svg" v-on:click="handleThemeChange" />
    <form class="search-form" @submit="handleSubmit">
      <input
        id="search"
        v-model="search"
        type="text"
        name="search"
        placeholder="Enter Username or Repo..."
      />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return { search: '', darkMode: false };
  },

  mounted() {
    // check for active theme
    const htmlElement = document.documentElement;
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      htmlElement.setAttribute('theme', 'dark');
      this.darkMode = true;
    } else {
      htmlElement.setAttribute('theme', 'light');
      this.darkMode = false;
    }
  },

  methods: {
    handleSubmit(event) {
      event.preventDefault();
      this.$router.push(`/${this.search.toLowerCase().trim()}`);
    },
    handleThemeChange() {
      console.log('handleThemeChange');
      const htmlElement = document.documentElement;

      if (this.darkMode) {
        this.darkMode = false;
        localStorage.setItem('theme', 'light');
        htmlElement.setAttribute('theme', 'light');
      } else {
        this.darkMode = true;
        localStorage.setItem('theme', 'dark');
        htmlElement.setAttribute('theme', 'dark');
      }
    },
  },
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
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(148deg) brightness(102%);

    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  .search-form {
    padding-left: 10px;
    width: 100%;

    input {
      background: var(--search);
      color: var(--logo);
      outline: 0;
      border-radius: 6px;
      padding: 7px 12px;
      width: 100%;

      &:focus {
        width: 318px;
        color: var(--black);
        background: var(--primary);
      }

      &::placeholder {
        color: var(--search-placeholder);
      }

      transition: width 200ms ease-out, color 200ms ease-out;
    }
  }
}
</style>
