<!-- AutoScrollContainer.vue -->
<template>
  <div ref="container" class="spons-container-wrapper-0">
    <div
      v-for="(item, index) in visibleElements"
      :key="index"
      class="spons-item-cont-0"
      v-html="item"
    ></div>
  </div>
</template>

<script>
export default {
  name: "AutoScrollContainerWrapper",
  props: {
    scrollSpeed: {
      type: Number,
      default: 1,
    },
    intervalTime: {
      type: Number,
      default: 1000,
    },
    items: {
      type: Array,
      required: true,
    },
    direction: {
      type: String,
      default: "ltr", // "ltr" for left-to-right, "rtl" for right-to-left
    },
    maxElements: {
      type: Number,
      default: 20, // Limit of elements to keep in the container
    },
  },
  data() {
    return {
      visibleElements: [],
      index: 0,
      scrollInterval: null,
      animationFrameId: null,
    };
  },
  mounted() {
    this.startAddingItems();
    this.startAutoScroll();
  },
  beforeDestroy() {
    this.stopAddingItems();
    this.stopAutoScroll();
  },
  methods: {
    startAddingItems() {
      this.scrollInterval = setInterval(() => {
        // Add the next item to visibleElements
        // console.log(`Adding item: ${this.items[this.index]}`);
        this.visibleElements.push(this.items[this.index]);

        // Update index to loop through items array
        this.index = (this.index + 1) % this.items.length;

        // Limit the number of items to maxElements by removing the oldest
        let removedItem = null;
        if (this.visibleElements.length > this.maxElements) {
          // removedItem = this.visibleElements.shift(); // Remove first item
          // console.log(`Removing item: ${removedItem}`);
        }
        console.log(
          "Current visibleElements array:",
          this.visibleElements.length
        );
      }, this.intervalTime);
    },
    stopAddingItems() {
      clearInterval(this.scrollInterval);
    },
    startAutoScroll() {
      const container = this.$refs.container;

      const scroll = () => {
        // Determine scroll speed and direction
        const scrollAmount =
          this.direction === "ltr" ? this.scrollSpeed : -this.scrollSpeed;

        container.scrollLeft += scrollAmount;

        // Reset scrolling position based on direction
        if (this.direction === "ltr") {
          if (
            container.scrollLeft >=
            container.scrollWidth - container.clientWidth
          ) {
            container.scrollLeft = 0;
          }
        } else {
          if (container.scrollLeft <= 0) {
            container.scrollLeft =
              container.scrollWidth - container.clientWidth;
          }
        }

        this.animationFrameId = requestAnimationFrame(scroll);
      };

      scroll();
    },
    stopAutoScroll() {
      cancelAnimationFrame(this.animationFrameId);
    },
  },
};
</script>

<style scoped></style>
