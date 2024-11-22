<template>
  <div class="cart-screen">
    <header class="header">
      <button @click="goBack" class="back-button">
        <i class="fas fa-arrow-left"></i>
      </button>
      <img src="" alt="Logo" class="logo" />
    </header>

    <section class="delivery-details">
      <h3>Deliver to:</h3>
      <p><i class="fas fa-user"></i> {{ user.name }}</p>
      <p><i class="fas fa-phone"></i> {{ user.mobile }}</p>
      <p><i class="fas fa-envelope"></i> {{ user.email }}</p>

      <h3>Deliver via:</h3>
      <div class="delivery-options">
        <div
          class="option"
          v-for="option in deliveryOptions"
          :key="option.label"
          :class="{ active: selectedDelivery === option.label }"
          @click="selectDelivery(option.label)"
        >
          <i :class="option.icon"></i> {{ option.label }}
        </div>
      </div>
    </section>

    <section class="cart-items">
      <div class="cart-item" v-for="item in cart" :key="item.id">
        <div class="item-details">
          <img :src="item.logo" :alt="item.name" class="item-logo" />
          <div>
            <h4>{{ item.name }}</h4>
            <p>{{ item.description }}</p>
            <p class="discount">{{ item.discount }} OFF</p>
          </div>
        </div>
        <div class="price-quantity">
          <p>Value: ₹{{ item.value }}</p>
          <p>
            Quantity:
            <button @click="decreaseQuantity(item)">-</button>
            {{ item.quantity }}
            <button @click="increaseQuantity(item)">+</button>
          </p>
          <p>Total: ₹{{ item.total }}</p>
        </div>
        <button @click="removeItem(item)" class="remove-button">Remove</button>
      </div>
    </section>

    <section class="cart-summary">
      <p>Voucher Value: ₹{{ voucherValue }}</p>
      <p>You Save: ₹{{ totalSavings }}</p>
      <p>You Pay: ₹{{ totalAmount }}</p>
      <button class="checkout-button" @click="checkout">Checkout</button>
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
      user: {
        name: "A shul",
        mobile: "9888338313",
        email: "ansrgarg.garg6@gmail.com",
      },
      deliveryOptions: [
        { label: "WhatsApp + Email", icon: "fab fa-whatsapp" },
        { label: "SMS + Email", icon: "fas fa-sms" },
        { label: "I am Gyfting", icon: "fas fa-gift" },
      ],
      selectedDelivery: "WhatsApp + Email",
      cart: [
        {
          id: 1,
          name: "BigBasket",
          description: "E-Gift Card (Instant Vouchers)",
          logo: "",
          discount: "4%",
          value: 500,
          quantity: 1,
          total: 500,
        },
      ],
    };
  },
  computed: {
    voucherValue() {
      return this.cart.reduce(
        (sum, item) => sum + item.value * item.quantity,
        0
      );
    },
    totalSavings() {
      return this.cart.reduce(
        (sum, item) =>
          sum + item.value * (parseFloat(item.discount) / 100) * item.quantity,
        0
      );
    },
    totalAmount() {
      return this.voucherValue - this.totalSavings;
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    selectDelivery(option) {
      this.selectedDelivery = option;
    },
    increaseQuantity(item) {
      item.quantity += 1;
      item.total = item.value * item.quantity;
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
        item.total = item.value * item.quantity;
      }
    },
    removeItem(item) {
      this.cart = this.cart.filter((cartItem) => cartItem.id !== item.id);
    },
    checkout() {
      alert("Proceeding to checkout!");
    },
  },
};
</script>

<style scoped>
.cart-screen {
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

.delivery-details h3 {
  margin: 10px 0;
}

.delivery-options {
  display: flex;
  gap: 15px;
  margin: 10px 0;
}

.delivery-options .option {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #444;
  border-radius: 5px;
  cursor: pointer;
}

.delivery-options .option.active {
  background-color: #cfe164;
  color: #000;
}

.cart-items .cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #444;
}

.cart-items .item-details {
  display: flex;
  align-items: center;
}

.cart-items .item-logo {
  width: 50px;
  margin-right: 10px;
}

.cart-items .price-quantity {
  text-align: right;
}

.cart-items .remove-button {
  background: none;
  border: none;
  color: red;
  cursor: pointer;
}

.cart-summary {
  margin-top: 20px;
  text-align: right;
}

.cart-summary p {
  margin: 5px 0;
}

.checkout-button {
  background-color: #cfe164;
  border: none;
  padding: 10px 20px;
  color: #000;
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
