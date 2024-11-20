<!-- ContainerWrapper.vue -->
<template>
  <div class="">
    <!-- 1st container, scrolling left to right (LTR) -->
    <AutoScrollContainerWrapper
      :scrollSpeed="2"
      :intervalTime="200"
      :items="containerOneItems"
      direction="ltr"
    />

    <!-- 2nd container, scrolling right to left (RTL) -->
    <AutoScrollContainerWrapper
      :scrollSpeed="2"
      :intervalTime="200"
      :items="containerTwoItems"
      direction="rtl"
    />

    <!-- 3rd container, scrolling right to left (RTL) -->
    <AutoScrollContainerWrapper
      :scrollSpeed="2"
      :intervalTime="200"
      :items="containerThreeItems"
      direction="ltr"
    />

    <!-- 4th container, scrolling right to left (RTL) -->
    <AutoScrollContainerWrapper
      :scrollSpeed="2"
      :intervalTime="200"
      :items="containerFourItems"
      direction="rtl"
    />

    <!-- 5th container, scrolling right to left (RTL) -->
    <AutoScrollContainerWrapper
      :scrollSpeed="2"
      :intervalTime="200"
      :items="containerFiveItems"
      direction="ltr"
    />
  </div>
</template>

<script>
import AutoScrollContainerWrapper from "./AutoScrollContainerWrapper.vue";

export default {
  name: "ProspectiveSponsors",
  components: {
    AutoScrollContainerWrapper,
  },
  data() {
    return {
      containerOneItems: [
        '<div class="item-0"><img src="/prospsponsors/logo1-01.jpg" alt="" /></div>',
        '<div class="item-1"><img src="/prospsponsors/logo1-02.jpg" alt="" /></div>',
        '<div class="item-3"><img src="/prospsponsors/logo1-03.png" alt="" /></div>',
        '<div class="item-4"><img src="/prospsponsors/logo1-04.png" alt="" /></div>',
        '<div class="item-5"><img src="/prospsponsors/logo1-05.jpg" alt="" /></div>',
        '<div class="item-6"><img src="/prospsponsors/logo1-06.jpg" alt="" /></div>',
        '<div class="item-7"><img src="/prospsponsors/boi.png" alt="" /></div>',
        '<div class="item-8"><img src="/prospsponsors/logo1-08.png" alt="" /></div>',
      ],
      containerTwoItems: [
        '<div class="item-0"><img src="/prospsponsors/logo2-01.jpeg" alt="" /></div>',
        '<div class="item-1"><img src="/prospsponsors/logo2-02.png" alt="" /></div>',
        '<div class="item-3"><img src="/prospsponsors/logo2-03.png" alt="" /></div>',
        '<div class="item-4"><img src="/prospsponsors/logo2-04.png" alt="" /></div>',
        '<div class="item-5"><img src="/prospsponsors/logo2-05.png" alt="" /></div>',
        '<div class="item-6"><img src="/prospsponsors/logo2-06.png" alt="" /></div>',
        '<div class="item-7"><img src="/prospsponsors/logo2-07.jpg" alt="" /></div>',
        '<div class="item-8"><img src="/prospsponsors/logo2-08.jpg" alt="" /></div>',
        '<div class="item-9"><img src="/prospsponsors/logo2-09.png" alt="" /></div>',
      ],
      containerThreeItems: [
        '<div class="item-0"><img src="/prospsponsors/logo3-01.png" alt="" /></div>',
        '<div class="item-1"><img src="/prospsponsors/logo3-02.png" alt="" /></div>',
        '<div class="item-3"><img src="/prospsponsors/logo3-03.png" alt="" /></div>',
        '<div class="item-4"><img src="/prospsponsors/logo3-04.png" alt="" /></div>',
        '<div class="item-5"><img src="/prospsponsors/logo3-05.jpg" alt="" /></div>',
        '<div class="item-6"><img src="/prospsponsors/logo3-06.png" alt="" /></div>',
        '<div class="item-7"><img src="/prospsponsors/logo3-07.jpeg" alt="" /></div>',
        '<div class="item-8"><img src="/prospsponsors/logo3-08.jpeg" alt="" /></div>',
        '<div class="item-9"><img src="/prospsponsors/logo3-09.png" alt="" /></div>',
      ],
      containerFourItems: [
        '<div class="item-0"><img src="/prospsponsors/logo4-01.jpg" alt="" /></div>',
        '<div class="item-1"><img src="/prospsponsors/logo4-02.png" alt="" /></div>',
        '<div class="item-3"><img src="/prospsponsors/logo4-03.png" alt="" /></div>',
        '<div class="item-4"><img src="/prospsponsors/logo4-04.png" alt="" /></div>',
        '<div class="item-5"><img src="/prospsponsors/logo4-05.png" alt="" /></div>',
        '<div class="item-6"><img src="/prospsponsors/logo4-06.png" alt="" /></div>',
        '<div class="item-7"><img src="/prospsponsors/logo4-07.png" alt="" /></div>',
      ],
      containerFiveItems: [
        '<div class="item-0"><img src="/prospsponsors/logo5-01.png" alt="" /></div>',
        '<div class="item-1"><img src="/prospsponsors/logo5-02.jpg" alt="" /></div>',
        '<div class="item-3"><img src="/prospsponsors/logo5-03.png" alt="" /></div>',
        '<div class="item-4"><img src="/prospsponsors/logo5-04.png" alt="" /></div>',
        '<div class="item-5"><img src="/prospsponsors/logo5-05.png" alt="" /></div>',
        '<div class="item-6"><img src="/prospsponsors/logo5-06.png" alt="" /></div>',
        '<div class="item-7"><img src="/prospsponsors/logo5-07.png" alt="" /></div>',
        '<div class="item-8"><img src="/prospsponsors/logo5-08.png" alt="" /></div>',
      ],
    };
  },
};
</script>

<style scoped>
/* Add spacing between containers if needed */
div {
  margin-bottom: 20px;
}
</style>
