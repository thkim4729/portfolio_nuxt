<template>
  <div :class="['wrap', { white: isWhite }]">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isWhite: false, // 초기 상태는 white 클래스가 없음
    };
  },
  methods: {},
  created() {
    // 페이지가 생성될 때 호출됨
    if (this.$route.path !== '/') {
      this.isWhite = true; // 인덱스 페이지가 아닌 경우 white 클래스 추가
    }

    // 페이지 이동 시 이벤트 리스너 등록
    this.$router.afterEach((to, from) => {
      this.isWhite = to.path !== '/'; // 인덱스 페이지가 아닌 경우 white 클래스 추가
    });
  },
};
</script>
<style scoped></style>
