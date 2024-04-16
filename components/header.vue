<template>
  <div>
    <header :class="['header', { open: isActive }]">
      <h1 class="home">
        <a href="\">kimtaehoon</a>
      </h1>
      <button type="button" class="menu-button" @click="toggleClass">
        <div></div>
      </button>
      <div class="menu-page">
        <div class="menu-detail">
          <div class="info">
            <div class="profile">
              <div class="profile-img">
                <img src="@/assets/images/profile.png" alt="" />
              </div>
              <p class="name"><span>김태훈</span><span>KIM Taehoon</span></p>
              <p class="date">1994.12.20</p>
              <div class="address">
                <div class="">
                  <i aria-hidden="true" class="v-icon notranslate mr-4 mdi mdi-phone theme--light"></i>
                  <span>010-7115-4729</span>
                </div>
                <div class="">
                  <i aria-hidden="true" class="v-icon notranslate mr-4 mdi mdi-email-outline theme--light"></i>
                  <span>thkim4729@naver.com</span>
                </div>
                <div class="">
                  <a href="https://github.com/thkim4729" target="_blank" title="새창 열기">
                    <i aria-hidden="true" class="v-icon notranslate mr-4 mdi mdi-github theme--light"></i>
                    <span>https://github.com/thkim4729</span>
                  </a>
                </div>
              </div>
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
