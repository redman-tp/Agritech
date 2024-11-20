<!-- ContainerWrapper.vue -->
<template>
  <div class="">
    <!-- First container, scrolling left to right (LTR) -->
    <AutoScrollContainerWrapper
      :scrollSpeed="2"
      :intervalTime="1000"
      :items="containerOneItems"
      direction="ltr"
    />

    <!-- Second container, scrolling right to left (RTL) -->
    <AutoScrollContainerWrapper
      :scrollSpeed="2"
      :intervalTime="1000"
      :items="containerTwoItems"
      direction="rtl"
    />
  </div>
</template>

<script>
import AutoScrollContainerWrapper from "./AutoScrollContainerWrapper.vue";

export default {
  name: "Sponsors",
  components: {
    AutoScrollContainerWrapper,
  },
  data() {
    return {
      containerOneItems: [
        '<div class="item-0"><img src="/pastsponsors/logo03.png" alt=""></div>',
        '<div class="item-1"><img src="/pastsponsors/logo04.jpg" alt=""></div>',
        '<div class="item-2"><img src="/pastsponsors/logo01.png" alt=""></div>',
        '<div class="item-3"><img src="/pastsponsors/logo05.png" alt=""></div>',
        '<div class="item-4"><img src="/pastsponsors/logo06.png" alt=""></div>',
        '<div class="item-5"><img src="/pastsponsors/logo02.png" alt=""></div>',
        '<div class="item-6"><img src="/pastsponsors/logo07.png" alt=""></div>',
      ],
      containerTwoItems: [
        '<div class="item-6"><img src="/pastsponsors/logo07.png" alt=""></div>',
        '<div class="item-5"><img src="/pastsponsors/logo02.png" alt=""></div>',
        '<div class="item-3"><img src="/pastsponsors/logo06.png" alt=""></div>',
        '<div class="item-2"><img src="/pastsponsors/logo05.png" alt=""></div>',
        '<div class="item-1"><img src="/pastsponsors/logo04.jpg" alt=""></div>',
        '<div class="item-4"><img src="/pastsponsors/logo01.png" alt=""></div>',
        '<div class="item-0"><img src="/pastsponsors/logo03.png" alt=""></div>',
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
