<template>
  <div class="terms-conditions">
    <header class="header">
      <img src="" alt="Logo" class="logo" />
    </header>
    <section class="content">
      <h1>Terms and Conditions</h1>
      <p>
        In using this website, you are deemed to have read and agreed to the
        following terms and conditions:
      </p>
      <p>
        The following terminology applies to these Terms and Conditions, Privacy
        Statement, and Disclaimer Notice and any or all Agreements: "Client",
        "You" and "Your" refers to you, the person accessing this website and
        accepting the Company’s terms and conditions...
      </p>
      <!-- Add full terms content here -->
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.terms-conditions {
  font-family: Arial, sans-serif;
  background-color: #333;
  color: #fff;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.header .logo {
  max-height: 40px;
}

.content h1 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #cfe164;
}

.content p {
  margin: 10px 0;
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
