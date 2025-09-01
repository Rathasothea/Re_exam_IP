<template>
  <!-- Notification Component - Shows feedback messages to user -->
  <div class="notification" :class="{ show: show }">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'NotificationComponent',
  props: {
    // Message to display in notification
    message: {
      type: String,
      default: ''
    },
    // Whether to show the notification
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>