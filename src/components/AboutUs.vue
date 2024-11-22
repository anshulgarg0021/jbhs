
<template>
  <div class="about-us">
    <header class="header">
      <img src="" alt="Logo" class="logo" />
    </header>
    <section class="content">
      <h1>About Us</h1>
      <p>GyFTR is the brand name of Vouchagram India Pvt. Ltd.</p>
      <p>
        We are in the business of enabling, buying, and selling instant gift vouchers.
        We are working with nearly all the leading brands in India.
      </p>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about-us {
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