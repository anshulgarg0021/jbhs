<template>
  <div>
    <!-- Sidebar Trigger (Hamburger Menu) -->
    <button @click="toggleSidebar" class="hamburger-button">
      <i class="fas fa-bars"></i>
    </button>

    <!-- Sidebar -->
    <div class="sidebar" :class="{ 'sidebar-open': isSidebarOpen }">
      <div class="sidebar-header">
        <p><i class="fas fa-user"></i> Login / Signup</p>
      </div>
      <ul class="sidebar-menu">
        <li
          v-for="item in menuItems"
          :key="item.label"
          @click="navigate(item.link)"
          :class="{ active: item.active }"
        >
          <i :class="item.icon"></i>
          {{ item.label }}
        </li>
      </ul>
    </div>

    <!-- Overlay for Sidebar -->
    <div class="overlay" v-if="isSidebarOpen" @click="toggleSidebar"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: false,
      menuItems: [
        { label: "Home", icon: "fas fa-home", link: "/home", active: true },
        {
          label: "Discount",
          icon: "fas fa-percent",
          link: "/discount",
          active: false,
        },
        {
          label: "Offers",
          icon: "fas fa-star",
          link: "/offers",
          active: false,
        },
        {
          label: "Voucher Status",
          icon: "fas fa-ticket-alt",
          link: "/voucher-status",
          active: false,
        },
        {
          label: "Terms & Conditions",
          icon: "fas fa-file-alt",
          link: "/terms",
          active: false,
        },
        {
          label: "Privacy & Policy",
          icon: "fas fa-shield-alt",
          link: "/privacy-policy",
          active: false,
        },
        {
          label: "About Us",
          icon: "fas fa-info-circle",
          link: "/about",
          active: false,
        },
        {
          label: "FAQ's",
          icon: "fas fa-question-circle",
          link: "/faqs",
          active: false,
        },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    navigate(link) {
      this.isSidebarOpen = false;
      // Redirect to the link
      this.$router.push(link);
    },
  },
};
</script>

<style scoped>
.hamburger-button {
  background: none;
  border: none;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
}

.sidebar {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: #333;
  color: #fff;
  overflow-y: auto;
  transition: left 0.3s ease;
  z-index: 1000;
}

.sidebar-open {
  left: 0;
}

.sidebar-header {
  padding: 20px;
  background-color: #444;
  font-size: 18px;
  display: flex;
  align-items: center;
}

.sidebar-header i {
  margin-right: 10px;
}

.sidebar-menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar-menu li {
  padding: 15px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background 0.3s ease;
}

.sidebar-menu li i {
  margin-right: 10px;
}

.sidebar-menu li:hover {
  background-color: #555;
}

.sidebar-menu li.active {
  background-color: #cfe164;
  color: #333;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
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
