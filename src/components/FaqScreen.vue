<template>
  <div class="faq-screen">
    <header class="header">
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

    <section class="faq-list" v-if="activeTab === 'All FAQ'">
      <div
        class="faq-item"
        v-for="faq in faqs"
        :key="faq.question"
        @click="toggleFaq(faq)"
      >
        <div class="faq-question">
          <p>{{ faq.question }}</p>
          <i
            :class="faq.open ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"
          ></i>
        </div>
        <div class="faq-answer" v-if="faq.open">
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "All FAQ",
      tabs: [
        { label: "Top Queries" },
        { label: "Top Brands" },
        { label: "All FAQ" },
      ],
      faqs: [
        {
          question: "How do I update my phone no./email id?",
          answer:
            "You can update your phone number or email by navigating to your profile settings.",
          open: false,
        },
        {
          question: "How to reset my account password?",
          answer:
            "Click on the 'Forgot Password' link on the login page to reset your password.",
          open: false,
        },
        {
          question: "My Order not yet delivered. What should I do?",
          answer:
            "Please contact our support team for assistance with delayed orders.",
          open: false,
        },
        {
          question: "Where can I check my order transaction history?",
          answer:
            "You can view your transaction history in the 'My Transactions' section.",
          open: false,
        },
        {
          question: "How can I check my order status?",
          answer:
            "You can check your order status in the 'My Orders' section of the app.",
          open: false,
        },
        {
          question:
            "What all payment modes are available to purchase the Gift Vouchers?",
          answer:
            "We accept Credit Card, Debit Card, UPI, Net Banking, and Wallet payments.",
          open: false,
        },
        {
          question:
            "What do I do if my payment is deducted but the order has not been processed?",
          answer:
            "If your payment is deducted but the order is not processed, please reach out to support.",
          open: false,
        },
        {
          question:
            "My order was placed successfully, but I have not received my Gift Vouchers. What should I do?",
          answer:
            "If you have not received your vouchers, please contact our support team for help.",
          open: false,
        },
        {
          question: "I have lost my voucher SMS/email. What should I do?",
          answer:
            "Please contact support to resend the voucher details to your registered email.",
          open: false,
        },
        {
          question: "What are the delivery options available?",
          answer: "We provide delivery via WhatsApp, Email, and SMS.",
          open: false,
        },
      ],
    };
  },
  methods: {
    switchTab(tab) {
      this.activeTab = tab;
    },
    toggleFaq(faq) {
      faq.open = !faq.open;
    },
  },
};
</script>

<style scoped>
.faq-screen {
  font-family: Arial, sans-serif;
  background-color: #333;
  color: #fff;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.header .logo {
  max-height: 40px;
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

.faq-list {
  margin-top: 20px;
}

.faq-item {
  background-color: #444;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-answer {
  margin-top: 10px;
  font-size: 14px;
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
