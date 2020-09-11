<template>
  <div class="tab-content">
    <img class="icon" src="@/assets/bookmark-line.svg" alt="bookmark-icon" />
    <span class="label">Repositories</span>
    <span class="number">{{ publicRepos }}</span>
  </div>
</template>

<script>
export default {
  name: 'TabContent',
  props: { publicRepos: Number },
};
</script>

<style scoped lang="scss">
.tab-content {
  display: flex;
  align-items: center;

  width: min-content;
  padding: 14px 16px;

  border-bottom: 2px solid var(--orange);

  .label {
    font-size: 14px;
    font-weight: 600;
    padding: 0 7px;
  }

  .number {
    font-size: 12px;
    background: var(--ticker);
    padding: 2px 6px;
    border-radius: 24px;
  }

  .icon {
    filter: var(--icon);
    flex-shrink: 0;
  }
}
</style>
