<template>
  <div class="my-transactions">
    <header class="header">
      <button @click="goBack" class="back-button">
        <i class="fas fa-arrow-left"></i>
      </button>
      <img src="" alt="Logo" class="logo" />
    </header>

    <section class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab.label"
        :class="{ active: activeTab === tab.label }"
        @click="switchTab(tab.label)"
      >
        {{ tab.label }}
      </button>
    </section>

    <section class="search-filter" v-if="activeTab === 'My Transactions'">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search all orders"
      />
      <select v-model="filter" class="filter-dropdown">
        <option value="">Filter</option>
        <option value="recent">Recent</option>
        <option value="oldest">Oldest</option>
      </select>
    </section>

    <section class="transactions-list">
      <div v-if="!transactions.length" class="no-orders">
        <img
          src="/path-to-placeholder-icon"
          alt="No orders"
          class="placeholder-icon"
        />
        <p>Order not found!</p>
      </div>
      <div v-else>
        <div
          class="transaction-card"
          v-for="transaction in filteredTransactions"
          :key="transaction.id"
        >
          <p>Transaction Details</p>
          <!-- Populate transaction details here -->
        </div>
      </div>
    </section>

    <div class="whatsapp-help">
      <a href="https://wa.me/your-number" target="_blank">
        <i class="fab fa-whatsapp"></i> Help
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "My Transactions",
      tabs: [
        { label: "My Profile" },
        { label: "My Transactions" },
        { label: "e-Pay Transactions" },
      ],
      searchQuery: "",
      filter: "",
      transactions: [], // Empty array to simulate no orders
    };
  },
  computed: {
    filteredTransactions() {
      let filtered = this.transactions;

      if (this.searchQuery) {
        filtered = filtered.filter((transaction) =>
          transaction.name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
        );
      }

      if (this.filter === "recent") {
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else if (this.filter === "oldest") {
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
      }

      return filtered;
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    switchTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style scoped>
.my-transactions {
  font-family: Arial, sans-serif;
  background-color: #333;
  color: #fff;
  padding: 20px;
}

.header {
  display: flex;
  align-items: center;
  padding: 10px;
}

.header .back-button {
  background: none;
  border: none;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
}

.tabs {
  display: flex;
  border-bottom: 2px solid #444;
  margin-bottom: 10px;
}

.tabs button {
  flex: 1;
  padding: 10px;
  border: none;
  background: none;
  color: #fff;
  cursor: pointer;
}

.tabs button.active {
  border-bottom: 2px solid #cfe164;
  color: #cfe164;
}

.search-filter {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.search-filter input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.filter-dropdown {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.transactions-list {
  text-align: center;
}

.no-orders .placeholder-icon {
  width: 100px;
  margin-bottom: 10px;
}

.whatsapp-help {
  margin-top: 20px;
  text-align: right;
}

.whatsapp-help a {
  color: #25d366;
  font-size: 18px;
  text-decoration: none;
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
