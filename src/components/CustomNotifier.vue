<template>
  <q-notification
    v-if="isVisible"
    :message="message"
    :color="color"
    :position="position"
    :timeout="timeout"
  >
    <div class="custom-notify-content hide">
      <SvgIcon name="info" />
      <strong>{{ message }}</strong>
    </div>
  </q-notification>
</template>

<script>
import SvgIcon from "./SvgIcon.vue";

export default {
  name: "CustomNotifier",
  props: {
    message: {
      type: String,
      default: "This is a custom notification!",
    },
    elementClass: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "green",
    },
    position: {
      type: String,
      default: "bottom-left",
    },
    timeout: {
      type: Number,
      default: 10000,
    },
  },
  data() {
    return {
      isVisible: true,
    };
  },

  components: {
    SvgIcon,
  },
  methods: {
    hideNotification() {
      this.isVisible = false;
    },
  },
};
</script>

<style scoped></style>
