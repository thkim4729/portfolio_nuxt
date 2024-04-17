<template>
  <div class="container">
    <!-- <div class="bg">
      <img src="" alt="" />
    </div> -->
    <div class="work">
      <h2 class="title">MY WORK</h2>
      <div class="list-box">
        <h3 class="title-sub">PROJECT</h3>
        <div class="grid-list">
          <ul>
            <li v-for="(item, index) in projects" :key="index">
              <a :href="item.href" @click="closeMenu" target="_blank" :title="item.name + ' 새창 열기'">
                <div class="item-info">
                  <p class="item-project">{{ item.project }}</p>
                  <p class="item-tools">with {{ item.tools }}</p>
                  <p class="item-title">{{ item.title }}</p>
                  <p class="item-desc">{{ item.desc }}</p>
                </div>
                <div class="item-img"><img :src="item.img" :alt="item.name" /></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="list-box">
        <h3 class="title-sub">DESIGN</h3>
        <div class="grid-list">
          <ul>
            <li v-for="(item, index) in designs" :key="index">
              <a :href="item.href" @click="closeMenu" target="_blank" :title="item.name + ' 새창 열기'">
                <div class="item-info">
                  <p class="item-project">{{ item.project }}</p>
                  <p class="item-tools">with {{ item.tools }}</p>
                  <p class="item-title">{{ item.title }}</p>
                  <p class="item-desc">{{ item.desc }}</p>
                </div>
                <img :src="item.img" :alt="item.name" />
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
      projects: [
        {
          id: 1,
          img: '@/public/images/genshin.jpg',
          project: 'CLONE CODING',
          name: '원신 프로젝트',
          tools: 'Vue.js',
          title: 'Genshin Impact',
          desc: 'Desktop',
          href: 'https://thkim4729.github.io/genshin_vue/',
        },
        {
          id: 2,
          img: '@/public/images/kakao_business.jpg',
          project: 'CLONE CODING',
          name: '카카오비즈니스 프로젝트',
          tools: 'Vue.js',
          title: 'Kakao Business',
          desc: 'Desktop & Mobile',
          href: 'https://thkim4729.github.io/kakao_business_vue/',
        },
        {
          id: 3,
          img: '@/public/images/kellogg.jpg',
          project: 'CLONE CODING',
          name: '켈로그 프로젝트',
          tools: 'jQuery',
          title: 'Kellogg',
          desc: 'Desktop',
          href: 'https://thkim4729.github.io/kellogg-s/',
        },
      ],
      designs: [
        {
          id: 1,
          img: '@/public/images/laneige_thumbnail.png',
          project: 'REDESIGN',
          name: '라네즈 리디자인',
          tools: 'Photoshop',
          title: 'LANEIGE',
          desc: '',
          href: 'https://thkim4729.github.io/portfolio/img/laneige_redesign.986ca735.png',
        },
        {
          id: 2,
          img: '@/public/images/etudehouse_thumbnail.png',
          project: 'REDESIGN',
          name: '에뛰드하우스 리디자인',
          tools: 'Photoshop',
          title: 'ETUDE HOUSE',
          desc: '',
          href: 'https://thkim4729.github.io/portfolio/img/etudehouse_redesign.2592c00e.png',
        },
        {
          id: 3,
          img: '@/public/images/doosanbears_thumbnail.png',
          project: 'REDESIGN',
          name: '두산베어스 리디자인',
          tools: 'Photoshop',
          title: 'DOOSAN BEARS',
          desc: '',
          href: 'https://thkim4729.github.io/portfolio/img/doosanbears_redesign.534ed0f6.png',
        },
        {
          id: 4,
          img: '@/public/images/foodforthehungry_thumbnail.png',
          project: 'REDESIGN',
          name: 'FOOD FOR THE HUNGRY 리디자인',
          tools: 'Photoshop',
          title: 'FOOD FOR THE HUNGRY',
          desc: '',
          href: 'https://thkim4729.github.io/portfolio/img/foodforthehungry_redesign.d33e9847.png',
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
