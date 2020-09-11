<template>
  <div class="footer">
    <div class="line" />
    <img class="icon" src="@/assets/github.svg" alg="github-icon" />
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 25px 32px;

  .line {
    max-width: 1280px;
    width: 100%;
    border-top: 1px solid var(--border);
  }

  .icon {
    height: 32px;
    width: 32px;
    margin-top: 25px;
    flex-shrink: 0;
    filter: invert(98%) sepia(2%) saturate(510%) hue-rotate(177deg) brightness(94%) contrast(94%);
  }
}
</style>
