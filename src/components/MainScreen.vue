<template>
  <div class="main-screen">
    <header class="header">
      <div class="menu-icon">
        <i class="fas fa-bars"></i>
      </div>
      <img src="" alt="Logo" class="logo" />
      <div class="search-icon">
        <i class="fas fa-search"></i>
      </div>
    </header>

    <section class="banner">
      <img src="" alt="Banner" class="banner-image" />
    </section>

    <section class="brand-list">
      <h2>Discount</h2>
      <div class="search-bar">
        <input type="text" v-model="searchQuery" placeholder="Search Brands" />
        <button class="filter-button">
          <i class="fas fa-filter"></i>
        </button>
      </div>
      <div class="brands-grid">
        <div
          class="brand-card"
          v-for="brand in filteredBrands"
          :key="brand.name"
        >
          <img :src="brand.logo" :alt="brand.name" class="brand-logo" />
          <p class="brand-name">{{ brand.name }}</p>
          <p class="brand-discount">Savings {{ brand.discount }}%</p>
        </div>
      </div>
    </section>

    <nav class="bottom-nav">
      <div class="nav-item" v-for="item in navItems" :key="item.label">
        <i :class="item.icon"></i>
        <p>{{ item.label }}</p>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      brands: [
        { name: "Bata", logo: "/path-to-bata-logo", discount: 11 },
        { name: "BigBasket", logo: "/path-to-bigbasket-logo", discount: 4 },
        { name: "Prestige", logo: "/path-to-prestige-logo", discount: 10 },
        { name: "Flipkart", logo: "/path-to-flipkart-logo", discount: 4 },
        { name: "Jockey", logo: "/path-to-jockey-logo", discount: 7 },
        { name: "Myntra", logo: "/path-to-myntra-logo", discount: 6 },
      ],
      navItems: [
        { label: "Home", icon: "fas fa-home" },
        { label: "Category", icon: "fas fa-th-large" },
        { label: "Offers", icon: "fas fa-tags" },
        { label: "Profile", icon: "fas fa-user" },
        { label: "Cart", icon: "fas fa-shopping-cart" },
      ],
    };
  },
  computed: {
    filteredBrands() {
      if (!this.searchQuery) return this.brands;
      return this.brands.filter((brand) =>
        brand.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.main-screen {
  font-family: Arial, sans-serif;
  color: #fff;
  background-color: #333;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #222;
}

.header .logo {
  max-height: 40px;
}

.banner .banner-image {
  width: 100%;
  height: auto;
}

.brand-list {
  padding: 20px;
}

.brand-list h2 {
  color: #cfe164;
  margin-bottom: 10px;
}

.search-bar {
  display: flex;
  margin-bottom: 20px;
}

.search-bar input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
}

.search-bar .filter-button {
  padding: 10px;
  background-color: #cfe164;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

.brands-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 15px;
}

.brand-card {
  background-color: #444;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
}

.brand-card .brand-logo {
  max-width: 80px;
  margin: 0 auto 10px;
}

.brand-card .brand-name {
  font-size: 14px;
  font-weight: bold;
}

.brand-card .brand-discount {
  font-size: 12px;
  color: #cfe164;
}

.bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  background-color: #222;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.bottom-nav .nav-item {
  text-align: center;
}

.bottom-nav .nav-item i {
  font-size: 20px;
}

.bottom-nav .nav-item p {
  font-size: 12px;
  margin-top: 5px;
}
</style>
<style lang="scss">
@import "@/styles/global.scss";

// Component-specific styles
.component {
  background-color: $secondary-color;
  border-radius: 5px;
  padding: 20px;

  h1 {
    color: $primary-color;
  }

  p {
    font-size: 14px;
    margin: 10px 0;
  }

  button {
    margin-top: 10px;
  }
}
</style>
