<template>
  <div class="coupon-payment-page">
    <header class="header">
      <button @click="goBack" class="back-button">
        <i class="fas fa-arrow-left"></i>
      </button>
      <img src="" alt="Logo" class="logo" />
    </header>

    <section class="brand-banner">
      <div class="brand-details">
        <img src="" alt="Brand Logo" class="brand-logo" />
        <p class="brand-name">BigBasket E-Gift Cards (Instant Vouchers)</p>
      </div>
      <button class="redeem-button">Redeem Now</button>
    </section>

    <section class="apply-promocode">
      <h3><i class="fas fa-tags"></i> Apply Promocode</h3>
      <div class="promocode-bar">
        <input type="text" v-model="promocode" placeholder="Enter Promocode" />
        <button @click="applyPromocode" class="apply-button">Apply</button>
      </div>
    </section>

    <section class="payment-options">
      <h3>I will pay using</h3>
      <div class="payment-methods">
        <div
          class="payment-method"
          v-for="method in paymentMethods"
          :key="method.name"
          :class="{ active: selectedPayment === method.name }"
          @click="selectPayment(method.name)"
        >
          <img :src="method.icon" :alt="method.name" />
          <p>{{ method.name }}</p>
          <p class="discount">{{ method.discount }}</p>
        </div>
      </div>
    </section>

    <section class="coupon-options">
      <div class="coupon-card" v-for="coupon in coupons" :key="coupon.value">
        <h4>₹ {{ coupon.value }}</h4>
        <p>DISCOUNT ({{ coupon.discount }}%)</p>
        <p>
          SAVING (₹): <span class="savings">{{ coupon.saving }}</span>
        </p>
        <p>
          YOU PAY (₹): <span class="you-pay">{{ coupon.pay }}</span>
        </p>
        <button @click="addToCart(coupon)" class="add-button">ADD +</button>
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
      promocode: "",
      selectedPayment: "PAYTM UPI",
      paymentMethods: [
        {
          name: "PAYTM UPI",
          icon: "/path-to-paytm-upi-icon",
          discount: "4% OFF",
        },
        {
          name: "Credit Card",
          icon: "/path-to-credit-card-icon",
          discount: "1.5% OFF",
        },
        { name: "e-Pay", icon: "/path-to-epay-icon", discount: "" },
        {
          name: "Debit Card",
          icon: "/path-to-debit-card-icon",
          discount: "2% OFF",
        },
        {
          name: "Paytm Wallet",
          icon: "/path-to-paytm-wallet-icon",
          discount: "1.5% OFF",
        },
      ],
      coupons: [
        { value: 500, discount: 4, saving: 20, pay: 480 },
        { value: 1000, discount: 4, saving: 40, pay: 960 },
        { value: 2000, discount: 4, saving: 80, pay: 1920 },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    applyPromocode() {
      alert(`Promocode ${this.promocode} applied!`);
    },
    selectPayment(method) {
      this.selectedPayment = method;
    },
    addToCart(coupon) {
      alert(`Added ₹${coupon.value} coupon to cart!`);
    },
  },
};
</script>

<style scoped>
.coupon-payment-page {
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

.brand-banner {
  background-color: #e8f4ff;
  padding: 20px;
  text-align: center;
}

.brand-banner .brand-details {
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-banner .brand-logo {
  max-height: 50px;
  margin-right: 10px;
}

.brand-banner .redeem-button {
  background-color: #cfe164;
  border: none;
  padding: 10px;
  color: #000;
  margin-top: 10px;
  cursor: pointer;
}

.apply-promocode {
  margin-top: 20px;
}

.apply-promocode .promocode-bar {
  display: flex;
  gap: 10px;
}

.apply-promocode input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.apply-promocode .apply-button {
  background-color: #cfe164;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.payment-options {
  margin-top: 20px;
}

.payment-options .payment-methods {
  display: flex;
  gap: 15px;
  overflow-x: scroll;
}

.payment-options .payment-method {
  background-color: #444;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
}

.payment-options .payment-method img {
  max-height: 30px;
  margin-bottom: 5px;
}

.payment-options .payment-method.active {
  background-color: #cfe164;
  color: #000;
}

.coupon-options {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.coupon-card {
  background-color: #444;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
}

.coupon-card h4 {
  margin-bottom: 10px;
}

.coupon-card .savings {
  color: #cfe164;
}

.coupon-card .add-button {
  margin-top: 10px;
  background-color: #cfe164;
  border: none;
  padding: 10px;
  cursor: pointer;
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
