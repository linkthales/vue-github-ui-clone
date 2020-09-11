<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: { Header, Footer },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  min-height: 100%;
  background: var(--primary);
}

*,
button,
input {
  border: 0;
  background: none;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif,
    Apple Color Emoji, Segoe UI Emoji;
  color: var(--black);

  transition: color 200ms ease-out;
}

ul {
  list-style: none;
}

:root {
  --primary: #fff;
  --black: #1b1f23;
  --gray: #586069;
  --gray-light: #6a737d;
  --gray-dark: #24292e;
  --orange: #f9826c;
  --logo: #fff;
  --header: #24292e;
  --username: #666;
  --search: rgba(255, 255, 255, 0.13);
  --search-placeholder: hsla(0, 0%, 100%, 0.75);
  --icon: invert(47%) sepia(7%) saturate(599%) hue-rotate(171deg) brightness(93%) contrast(90%);
  --link: #0366d6;
  --border: #e1e4e8;
  --ticker: rgba(209, 213, 218, 0.5);

  --javascript: #f1e05a;
  --typescript: #2b7489;
  --other-language: #8257e5;
}

[theme='dark'] {
  --primary: #1d1d1d;
  --black: #c6c6c6;
  --gray: #afafaf;
  --gray-light: #6a737d;
  --gray-dark: #c6c6c6;
  --orange: #fff;
  --header: #181818;
  --logo: #fff;
  --username: #9b9b9b;
  --search: #151515;
  --search-placeholder: #c6c6c6;
  --icon: invert(66%) sepia(1%) saturate(0%) hue-rotate(167deg) brightness(94%) contrast(84%);
  --link: rgb(79, 140, 201);
  --border: #343434;
  --ticker: rgba(90, 90, 90, 0.5);

  --javascript: #f1e05a;
  --typescript: #2b7489;
  --other-language: #8257e5;
}
</style>
