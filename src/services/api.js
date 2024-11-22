
export const getLoginData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Login successful", user: { name: "John Doe", email: "john.doe@example.com" } });
    }, 1000);
  });
};

export const getMainScreenData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        brands: [
          { id: 1, name: "Brand A", discount: 10 },
          { id: 2, name: "Brand B", discount: 15 },
        ],
      });
    }, 1000);
  });
};

export const getCartData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Product A", price: 500, quantity: 2 },
        { id: 2, name: "Product B", price: 1000, quantity: 1 },
      ]);
    }, 1000);
  });
};

export const getFaqData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { question: "How to reset password?", answer: "Click on 'Forgot Password' on the login page." },
        { question: "How to contact support?", answer: "Email us at support@example.com." },
      ]);
    }, 1000);
  });
};
