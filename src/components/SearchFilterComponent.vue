<template>
  <!-- Enhanced Search and Filter with beautiful icons -->
  <div class="search-filter-section">
    <div class="search-container">
      <div class="search-icon">🔍</div>
      <input 
        type="text" 
        class="search-input" 
        placeholder="Search for delicious meals..."
        :value="searchQuery"
        @input="updateSearchQuery"
      >
    </div>
    
    <div class="filter-container">
      <div class="filter-icon">🏷️</div>
      <select 
        class="category-select"
        :value="selectedCategory"
        @change="updateSelectedCategory"
      >
        <option value="">All Categories</option>
        <option 
          v-for="category in categories" 
          :key="category" 
          :value="category"
        >
          {{ getCategoryIcon(category) }} {{ category }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchFilterComponent',
  props: {
    searchQuery: {
      type: String,
      default: ''
    },
    selectedCategory: {
      type: String,
      default: ''
    },
    categories: {
      type: Array,
      default: () => []
    }
  },
  emits: ['update:searchQuery', 'update:selectedCategory'],
  methods: {
    updateSearchQuery(event) {
      this.$emit('update:searchQuery', event.target.value);
    },
    updateSelectedCategory(event) {
      this.$emit('update:selectedCategory', event.target.value);
    },
    getCategoryIcon(category) {
      const icons = {
        'Breakfast': '🌅',
        'Lunch': '🍽️',
        'Dinner': '🌙',
        'Dessert': '🍰',
        'Sides': '🍟',
        'Drinks': '🥤'
      };
      return icons[category] || '🍴';
    }
  }
}
</script>

<style scoped>
.search-container,
.filter-container {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon,
.filter-icon {
  position: absolute;
  left: 20px;
  font-size: 1.2rem;
  z-index: 2;
  opacity: 0.7;
}

.search-input {
  padding-left: 55px !important;
}

.category-select {
  padding-left: 55px !important;
}
</style>