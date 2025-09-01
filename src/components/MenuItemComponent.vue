<template>
  <!-- Individual Menu Item Component - Displays a single menu item with add functionality -->
  <div class="menu-item">
    <div class="item-info">
      <!-- Item icon/emoji -->
      <span class="item-icon">{{ item.icon }}</span>
      
      <!-- Item details (name and description) -->
      <div class="item-details">
        <span class="item-name">{{ item.name }}</span>
        <span class="item-description" v-if="item.description">{{ item.description }}</span>
      </div>
    </div>
    
    <!-- Item price -->
    <span class="item-price">${{ formatPrice(item.price) }}</span>
    
    <!-- Add to cart button -->
    <button class="add-button" @click="handleAddClick">Add</button>
  </div>
</template>

<script>
export default {
  name: 'MenuItemComponent',
  props: {
    // Menu item object containing id, name, description, price, category, icon
    item: {
      type: Object,
      required: true
    }
  },
  emits: ['addToCart'],
  methods: {
    // Handle add button click - emit event to parent component
    handleAddClick() {
      this.$emit('addToCart', this.item);
    },
    // Format price to always show 2 decimal places
    formatPrice(price) {
      return price.toFixed(2);
    }
  }
}
</script>