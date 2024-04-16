<template>
  <div class="container">
    <div class="bg">
      <img src="" alt="" />
    </div>
    <div class="work">
      <h2 class="title">MY WORK</h2>
      <div class="list-box">
        <div class="grid-list">
          <ul>
            <li v-for="(item, index) in items" :key="index">
              <img :src="item.img" :alt="item.name" />
              <a :href="item.href" @click="closeMenu" target="_blank" :title="item.title + item.name + '새창 열기'">
                <div class=""></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          img: '../assets/images/genshin.jpg',
          project: 'CLONE CODING',
          name: '원신 프로젝트',
          tools: 'Vue.js',
          title: 'Genshin Impact',
          desc: 'Desktop',
          href: 'https://thkim4729.github.io/genshin_vue/',
        },
        {
          id: 2,
          img: '@/assets/images/kakao_business.png',
          project: 'CLONE CODING',
          name: '카카오비즈니스 프로젝트',
          tools: 'Vue.js',
          title: 'Kakao Business',
          desc: 'Desktop & Mobile',
          href: 'https://thkim4729.github.io/kakao_business_vue/',
        },
        {
          id: 3,
          img: '@/assets/images/kellogg.jpg',
          project: 'CLONE CODING',
          name: '켈로그 프로젝트',
          tools: 'jQuery',
          title: 'Kellogg',
          desc: 'Desktop',
          href: 'https://thkim4729.github.io/kellogg-s/',
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
