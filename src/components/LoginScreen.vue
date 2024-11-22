<template>
  <div class="login-screen">
    <header class="header">
      <img src="" alt="Logo" class="logo" />
    </header>

    <section class="hero">
      <h1>START YOUR JOURNEY TO SAVE BIG!</h1>
      <p>Upto 40% discount on 250+ brand vouchers</p>
      <img src="" alt="Illustration" class="illustration" />
    </section>

    <section class="login-form">
      <h2>Login/ Sign Up</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="mobile">Enter Mobile Number</label>
          <input
            type="text"
            id="mobile"
            v-model="mobileNumber"
            placeholder="Enter Mobile Number"
            required
          />
        </div>
        <div class="terms">
          <input type="checkbox" id="terms" v-model="agreed" />
          <label for="terms">
            I agree to <a href="/terms" target="_blank">T&C</a> and
            <a href="/privacy-policy" target="_blank">Privacy Policy</a>
          </label>
        </div>
        <button type="submit" :disabled="!agreed">Next</button>
      </form>
    </section>

    <footer class="footer">
      <p>&copy; 2024. Vouchagram India Pvt. Ltd</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileNumber: "",
      agreed: false,
    };
  },
  methods: {
    handleLogin() {
      // Handle the login logic
      if (this.mobileNumber && this.agreed) {
        console.log("Logged in with:", this.mobileNumber);
      }
    },
  },
};
</script>

<style scoped>
.login-screen {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #000;
}

.header .logo {
  max-width: 120px;
  margin: 10px auto;
}

.hero {
  background-color: #cfe164; /* Matching green background */
  padding: 20px;
}

.hero h1 {
  font-size: 20px;
  font-weight: bold;
}

.hero p {
  margin: 10px 0;
}

.hero .illustration {
  max-width: 100%;
  height: auto;
  margin-top: 20px;
}

.login-form {
  padding: 20px;
  background: #333;
  color: #fff;
}

.login-form h2 {
  font-size: 18px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.terms {
  text-align: left;
  margin-bottom: 20px;
}

.terms input {
  margin-right: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #cfe164;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}

.footer {
  margin-top: 20px;
  font-size: 12px;
  color: #aaa;
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
