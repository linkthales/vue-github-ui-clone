<template>
  <div v-if="error" class="profile">
    <h1>{{ error }}</h1>
  </div>

  <div v-else-if="!user || !repos" class="profile">
    <h1>Loading...</h1>
  </div>

  <div v-else class="profile">
    <div class="tab desktop">
      <div class="tab-wrapper">
        <span class="offset" />
        <TabContent :publicRepos="user.public_repos" />
      </div>

      <span class="line" />
    </div>

    <div class="main">
      <div class="left-side">
        <ProfileData
          :username="user.login"
          :name="user.name"
          :avatarUrl="user.avatar_url"
          :followers="user.followers"
          :following="user.following"
          :company="user.company"
          :location="user.location"
          :email="user.email"
          :blog="user.blog"
        />
      </div>

      <div class="right-side">
        <div class="tab mobile">
          <TabContent :publicRepos="user.public_repos" />

          <span class="line" />
        </div>

        <div class="repos">
          <h2>Random repos</h2>

          <div>
            <RepoCard
              v-for="repo in repos"
              :key="repo.name"
              :username="repo.owner.login"
              :reponame="repo.name"
              :description="repo.description"
              :language="repo.language"
              :stars="repo.stargazers_count"
              :forks="repo.forks"
            ></RepoCard>
          </div>
        </div>

        <span class="calendar-header">
          Random Calendar (does not represent actual data)
        </span>

        <RandomCalendar />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import TabContent from '@/components/TabContent.vue';
import ProfileData from '@/components/ProfileData.vue';
import RepoCard from '@/components/RepoCard.vue';
import RandomCalendar from '@/components/RandomCalendar.vue';

export default {
  name: 'Profile',
  components: {
    TabContent,
    ProfileData,
    RepoCard,
    RandomCalendar,
  },

  data() {
    return { user: undefined, repos: undefined, error: '' };
  },

  create() {
    this.updatePage();
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
    updatePage() {
      const { username = 'linkthales' } = this.$route.params;

      Promise.all([
        axios.get(`https://api.github.com/users/${username}`),
        axios.get(`https://api.github.com/users/${username}/repos`),
      ]).then(async responses => {
        const [userResponse, reposResponse] = responses;

        if (userResponse.status === 404) {
          this.error = 'User not found!';
          return;
        }

        this.user = userResponse.data;

        const repos = reposResponse.data;

        const shuffledRepos = repos.sort(() => 0.5 - Math.random());
        const slicedRepos = shuffledRepos.slice(0, 6);

        this.repos = slicedRepos;
      });
    },
  },
};
</script>

<style scoped lang="scss">
.profile {
  --horizontalPadding: 16px;
  --verticalPadding: 24px;

  padding: var(--verticalPadding) var(--horizontalPadding);
  overflow: hidden;

  .main {
    display: flex;
    flex-direction: column;

    margin: 0 auto;
    max-width: 1280px;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  .left-side {
    padding: 0 var(--horizontalPadding);

    @media (min-width: 768px) {
      width: 25%;
    }
  }

  .right-side {
    padding: 0 var(--horizontalPadding);

    .repos {
      margin-top: var(--verticalPadding);

      > h2 {
        font-size: 16px;
        font-weight: normal;
      }

      > div {
        display: grid;
        grid-gap: 16px;
        grid-template-columns: 1fr;

        margin-top: 8px;

        @media (min-width: 768px) {
          grid-template-columns: 1fr 1fr;
        }
      }
    }

    .calendar-header {
      display: inline-flex;

      font-size: 16px;
      margin: 36px 0 9px;
    }

    @media (min-width: 768px) {
      width: 75%;
    }
  }

  .tab {
    background: var(--primary);

    .line {
      display: flex;
      width: 200vw;
      border-bottom: 1px solid var(--border);
      margin-left: -50vw;
    }

    &.mobile {
      margin-top: var(--verticalPadding);

      .tab-content {
        margin: 0 auto;
      }

      @media (min-width: 768px) {
        display: none;
      }
    }

    &.desktop {
      display: none;

      @media (min-width: 768px) {
        display: unset;

        .tab-wrapper {
          display: flex;
          margin: 0 auto;
          max-width: 1280px;
        }

        .offset {
          width: 25%;
          margin-right: var(--horizontalPadding);
        }
      }
    }
  }
}
</style>
