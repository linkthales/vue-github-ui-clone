<template>
  <div class="profile-data">
    <div class="flex">
      <img class="avatar" v-bind:src="avatarUrl" alt="username" />

      <div>
        <h1>{{ name }}</h1>
        <h2>{{ username }}</h2>
      </div>
    </div>

    <div class="row">
      <li>
        <img class="icon" src="@/assets/group-line.svg" />
        <b>{{ followers }}</b>
        <span>followers</span>
        <span>·</span>
      </li>
      <li>
        <b>{{ following }}</b>
        <span>following</span>
      </li>
    </div>

    <div class="column">
      <li v-if="company">
        <img class="icon" src="@/assets/building-line.svg" />
        <span>{{ company }}</span>
      </li>

      <li v-if="location">
        <img class="icon" src="@/assets/map-pin-line.svg" />
        <span>{{ location }}</span>
      </li>

      <li v-if="email">
        <img class="icon" src="@/assets/mail-line.svg" />
        <span>{{ email }}</span>
      </li>

      <li v-if="blog">
        <img class="icon" src="@/assets/links-line.svg" />
        <span>{{ blog }}</span>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileData',
  props: {
    username: String,
    name: String,
    avatarUrl: String,
    followers: Number,
    following: Number,
    company: String,
    location: String,
    email: String,
    blog: String,
  },
};
</script>

<style scoped lang="scss">
.flex {
  display: flex;
  align-items: center;

  .avatar {
    width: 16%;
    border-radius: 50%;

    @media (min-width: 768px) {
      width: 100%;
      margin-top: -34px;
    }
  }

  > div {
    margin-left: 24px;

    > h1 {
      font-size: 26px;
      line-height: 1.25;
      color: var(--gray-dark);
      font-weight: 600;
    }

    > h2 {
      font-size: 20px;
      color: var(--username);
      font-weight: 300;
    }
  }

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    > div {
      margin-left: 0;
      margin-top: 16px;
    }
  }
}

.row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  margin: 20px 0;

  > li {
    display: flex;
    align-items: center;

    > span {
      font-size: 14px;
      color: var(--gray);
    }

    > * {
      margin-right: 5px;
    }
  }
}

.column {
  li {
    display: flex;
    align-items: center;
    font-size: 14px;

    & + li {
      margin-top: 10px;
    }

    span {
      margin-left: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

.icon {
  width: 16px;
  height: 16px;
  filter: var(--icon);
  flex-shrink: 0;
}
</style>
