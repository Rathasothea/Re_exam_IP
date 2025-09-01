<template>
  <!-- Menu List Component - Displays the filtered list of menu items -->
  <div class="menu-section">
    <h2 class="menu-title">Menu</h2>
    
    <!-- Menu items grid (shown when items exist) -->
    <div class="menu-grid" v-if="items.length > 0">
      <MenuItemComponent
        v-for="item in items"
        :key="item.id"
        :item="item"
        @add-to-cart="handleAddToCart"
      />
    </div>
    
    <!-- No items message (shown when no items match filters) -->
    <div v-else class="no-items">
      No items found matching your search criteria.
    </div>
  </div>
</template>

<script>
import MenuItemComponent from './MenuItemComponent.vue'

export default {
  name: 'MenuListComponent',
  components: {
    MenuItemComponent
  },
  props: {
    // Array of menu items to display
    items: {
      type: Array,
      default: () => []
    }
  },
  emits: ['addToCart'],
  methods: {
    // Pass the add to cart event up to parent component
    handleAddToCart(item) {
      this.$emit('addToCart', item);
    }
  }
}
</script>