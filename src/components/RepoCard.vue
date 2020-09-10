<template>
  <div class="repo-card">
    <div class="top-side">
      <header>
        <img class="icon" src="@/assets/bookmark-line.svg" alt="bookmark-line" />
        <router-link :to="{ name: 'Repo', params: { username, reponame } }">{{
          reponame
        }}</router-link>
      </header>

      <p>{{ description }}</p>
    </div>
    <div class="bottom-side">
      <ul>
        <li>
          <div class="language" v-bind:class="[languageClass]"></div>
          <span>{{ language }}</span>
        </li>
        <li>
          <img class="icon" src="@/assets/star-line.svg" alt="star-icon" />
          <span>{{ stars }}</span>
        </li>
        <li>
          <img class="icon" src="@/assets/fork-line.svg" alt="fork-icon" />
          <span>{{ forks }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RepoCard',
  props: {
    username: String,
    reponame: String,
    description: String,
    language: String,
    stars: Number,
    forks: Number,
  },
  computed: {
    languageClass() {
      return this.language ? this.language.toLowerCase() : 'other';
    },
  },
};
</script>

<style scoped lang="scss">
.repo-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 6px;

  .top-side {
    > header {
      display: flex;
      align-items: center;

      > a {
        color: var(--link);
        font-size: 14px;
        font-weight: 600;
        margin-left: 8px;

        text-decoration: none;

        &:focus,
        &:hover {
          text-decoration: underline;
        }
      }
    }

    > p {
      margin: 8px 0 16px;
      font-size: 12px;
      color: var(--gray);
      letter-spacing: 0.1px;
    }
  }

  .bottom-side {
    > ul {
      display: flex;
      align-items: center;

      > li {
        display: flex;
        align-items: center;

        margin-right: 16px;

        > span {
          margin-left: 5px;
          font-size: 12px;
          color: var(--gray);
        }
      }
    }

    .language {
      height: 12px;
      width: 12px;
      border-radius: 50%;
      flex-shrink: 0;

      &.other {
        background: var(--other-language);
      }
      &.javascript {
        background: var(--javascript);
      }
      &.typescript {
        background: var(--typescript);
      }
    }
  }
}

.icon {
  height: 16px;
  width: 16px;
  fill: var(--icon);
  flex-shrink: 0;
}
</style>
