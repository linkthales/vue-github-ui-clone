<template>
  <div v-if="error" class="repo">
    <h1>{{ error }}</h1>
  </div>

  <div v-else-if="!repo" class="repo">
    <h1>Loading...</h1>
  </div>

  <div v-else class="repo">
    <div class="breadcrumb">
      <img class="icon" src="@/assets/bookmark-line.svg" alt="bookmark-icon" />
      <router-link class="username" :to="`/${$route.params.username}`">
        {{ $route.params.username }}
      </router-link>

      <span>/</span>

      <router-link class="reponame" :to="`/${$route.params.username}/${$route.params.reponame}`">
        {{ $route.params.reponame }}
      </router-link>
    </div>

    <p>{{ repo.description }}</p>

    <ul class="stats">
      <li>
        <img class="icon" src="@/assets/star-line.svg" alt="star-icon" />
        <b>9</b>
        <span>stars</span>
      </li>

      <li>
        <img class="icon" src="@/assets/fork-line.svg" alt="fork-icon" />
        <b>4</b>
        <span>forks</span>
      </li>
    </ul>

    <a
      class="link-button"
      :href="`https://github.com/${$route.params.username}/${$route.params.reponame}`"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img class="icon" src="@/assets/github.svg" alt="github-icon" />
      <span>View on GitHub</span>
    </a>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Repo',

  data() {
    return { repo: undefined, error: '' };
  },

  watch: {
    $route: {
      immediate: true,
      handler() {
        this.updatePage();
      },
    },
  },

  methods: {
    async updatePage() {
      const { username, reponame } = this.$route.params;

      const response = await axios.get(`https://api.github.com/repos/${username}/${reponame}`);

      if (response.status === 404) {
        this.error = 'Repo not found!';
        return;
      }

      this.repo = response.data;
    },
  },
};
</script>

<style scoped lang="scss">
.repo {
  display: flex;
  flex-direction: column;
  padding: 16px;

  > p {
    font-size: 16px;
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    white-space: nowrap;
    margin-bottom: 16px;
    font-size: 18px;

    > a {
      color: var(--link);
      text-decoration: none;

      &:hover,
      &:focus {
        text-decoration: underline;
      }

      &.username {
        margin-left: 8px;
      }

      &.reponame {
        font-weight: 600;
      }
    }

    > span {
      padding: 0 5px;
    }
  }

  .stats {
    display: flex;
    align-items: center;

    margin-top: 16px;

    > li {
      display: flex;
      align-items: center;

      margin-right: 9px;

      > * {
        margin-right: 7px;
        color: var(--gray);
      }
    }
  }

  .link-button {
    display: flex;
    align-items: center;

    width: max-content;
    margin-top: 24px;
    background: var(--gray-dark);
    padding: 12px 17px;
    border-radius: 24px;
    text-decoration: none;

    > span {
      color: var(--primary);
    }

    > img {
      margin-right: 10px;
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(148deg) brightness(102%);
    }
  }
}

.icon {
  height: 16px;
  width: 16px;
  filter: var(--icon);
  flex-shrink: 0;
}
</style>
