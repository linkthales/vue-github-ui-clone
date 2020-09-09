<template>
  <div class="profile">
    <div class="main">
      <div class="left-side">
        <ProfileData
          username="linkthales"
          name="Thales Martins"
          avatarUrl="https://avatars2.githubusercontent.com/u/8526366?s=460&v=4"
          followers="123"
          following="789"
          company="Beyond the Boundary"
          location="Maringá, Brazil"
          email="linkthales@hotmail.com"
          blog=""
        />
      </div>

      <div class="right-side"></div>
    </div>
  </div>
</template>

<script>
import ProfileData from '@/components/ProfileData.vue';

export default {
  name: 'Profile',
  components: { ProfileData },
};
</script>

<style scoped lang="scss">
.profile {
  --horizontalPadding: 16px;
  --verticalPadding: 24px;

  padding: var(--verticalPadding) var(--horizontalPadding);

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
    @media (min-width: 768px) {
      width: 25%;
    }
  }

  .right-side {
    @media (min-width: 768px) {
      width: 75%;
    }
  }
}
</style>
