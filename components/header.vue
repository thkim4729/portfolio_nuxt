<template>
  <div>
    <header :class="['header', { open: isActive }]">
      <h1 class="name">
        <a href="\">kimtaehoon</a>
      </h1>
      <button type="button" class="menu-button" @click="toggleClass">
        <div></div>
      </button>
      <div class="menu-page">
        <div class="menu-detail">
          <div class="info">
            <div class="profile">
              <!-- <img src="@/assets/images/profile.png" alt="" /> -->
            </div>
          </div>
          <nav class="nav">
            <ul>
              <li v-for="(item, index) in items" :key="index">
                <NuxtLink :to="item.href" @click="closeMenu">{{ item.name }}</NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false, // 초기 상태는 비활성화
      items: [
        { id: 1, name: 'HOME', href: '/' },
        { id: 2, name: 'ABOUT ME', href: '/about' },
        { id: 3, name: 'MY WORK', href: '/work' },
      ],
    };
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive; // isActive 값을 토글
    },
    closeMenu() {
      this.isActive = false; // 메뉴를 닫음
    },
  },
};
</script>

<style lang="scss" scoped></style>
