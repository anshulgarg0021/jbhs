<template>
  <div class="my-profile">
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

    <section class="profile-details" v-if="activeTab === 'My Profile'">
      <div class="profile-header">
        <h3>Profile Details</h3>
        <button class="settings-button">
          <i class="fas fa-cog"></i>
        </button>
      </div>
      <div class="profile-info">
        <p><span>Name:</span> {{ profile.name }}</p>
        <p><span>Mobile:</span> {{ profile.mobile }}</p>
        <p><span>E-mail:</span> {{ profile.email }}</p>
        <p><span>DOB:</span> {{ profile.dob || "---" }}</p>
        <p><span>Password:</span> {{ hiddenPassword }}</p>
      </div>
      <button @click="editProfile" class="edit-button">Edit</button>
      <button @click="changePassword" class="change-password-button">
        Change Password
      </button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "My Profile",
      tabs: [
        { label: "My Profile" },
        { label: "My Transactions" },
        { label: "e-Pay Transactions" },
      ],
      profile: {
        name: "A shul",
        mobile: "+91 9888338313",
        email: "ansrgarg.garg6@gmail.com",
        dob: "",
        password: "password123", // Simulated password
      },
    };
  },
  computed: {
    hiddenPassword() {
      return "*".repeat(this.profile.password.length);
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    switchTab(tab) {
      this.activeTab = tab;
    },
    editProfile() {
      alert("Edit profile feature coming soon!");
    },
    changePassword() {
      alert("Change password feature coming soon!");
    },
  },
};
</script>

<style scoped>
.my-profile {
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

.profile-details {
  padding: 20px;
  background-color: #444;
  border-radius: 10px;
}

.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.profile-header h3 {
  margin: 0;
}

.profile-header .settings-button {
  background: none;
  border: none;
  font-size: 18px;
  color: #cfe164;
  cursor: pointer;
}

.profile-info {
  margin-bottom: 20px;
}

.profile-info p {
  margin: 10px 0;
  font-size: 14px;
}

.profile-info p span {
  font-weight: bold;
}

.edit-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #cfe164;
  color: #000;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
}

.change-password-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
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
