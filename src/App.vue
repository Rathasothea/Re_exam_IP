<template>
  <!-- Main Application Component - Root component managing overall state -->
  <div class="app-container">
    <!-- Header section -->
    <HeaderComponent />
    
    <!-- Search and filter section -->
    <SearchFilterComponent
      v-model:search-query="searchQuery"
      v-model:selected-category="selectedCategory"
      :categories="categories"
    />
    
    <!-- Menu items section -->
    <MenuListComponent
      :items="filteredItems"
      @add-to-cart="handleAddToCart"
    />
    
    <!-- Notification component -->
    <NotificationComponent
      :message="notificationMessage"
      :show="showNotification"
    />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue'
import SearchFilterComponent from './components/SearchFilterComponent.vue'
import MenuListComponent from './components/MenuListComponent.vue'
import NotificationComponent from './components/NotificationComponent.vue'
import { menuItems, getCategories } from './data/menuData.js'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    SearchFilterComponent,
    MenuListComponent,
    NotificationComponent
  },
  setup() {
    // Reactive state variables
    const searchQuery = ref('');
    const selectedCategory = ref('');
    const notificationMessage = ref('');
    const showNotification = ref(false);

    // Get available categories from menu data
    const categories = computed(() => getCategories());

    // Computed property to filter menu items based on search and category
    const filteredItems = computed(() => {
      let filtered = menuItems;

      // Filter by search query (searches both name and description)
      if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase();
        filtered = filtered.filter(item => 
          item.name.toLowerCase().includes(query) || 
          item.description.toLowerCase().includes(query)
        );
      }

      // Filter by selected category
      if (selectedCategory.value) {
        filtered = filtered.filter(item => item.category === selectedCategory.value);
      }

      return filtered;
    });

    // Method to handle adding items to cart (shows notification)
    const handleAddToCart = (item) => {
      notificationMessage.value = `${item.name} added to cart!`;
      showNotification.value = true;
      
      // Hide notification after 3 seconds
      setTimeout(() => {
        showNotification.value = false;
      }, 3000);
    };

    // Return reactive data and methods for use in template
    return {
      searchQuery,
      selectedCategory,
      categories,
      filteredItems,
      notificationMessage,
      showNotification,
      handleAddToCart
    };
  }
}
</script>