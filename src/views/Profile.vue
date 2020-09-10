<template>
  <div class="profile">
    <div class="tab desktop">
      <div class="tab-wrapper">
        <span class="offset" />
        <TabContent />
      </div>

      <span class="line" />
    </div>

    <div class="main">
      <div class="left-side">
        <ProfileData
          username="linkthales"
          name="Thales Martins"
          avatarUrl="https://avatars2.githubusercontent.com/u/8526366?s=460&v=4"
          :followers="123"
          :following="789"
          company="Beyond the Boundary"
          location="Maringá, Brazil"
          email="linkthales@hotmail.com"
          blog=""
        />
      </div>

      <div class="right-side">
        <div class="tab mobile">
          <TabContent />

          <span class="line" />
        </div>

        <div class="repos">
          <h2>Random repos</h2>

          <div>
            <RepoCard
              v-for="n in [1, 2, 3, 4, 5, 6]"
              :key="n"
              username="linkthales"
              reponame="vue-github"
              description="Vue js"
              :language="n % 3 === 0 ? 'Javascript' : 'Typescript'"
              :stars="3"
              :forks="5"
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
