export const step1Strings = {
  title: "Find Your Perfect Credit Card",
  question: "What's most important to you in a credit card?",
  options: [
    { id: "A", label: "High credit limit" },
    { id: "B", label: "Instant approval" },
    { id: "C", label: "No credit check" },
    { id: "D", label: "No annual fee" },
    { id: "E", label: "Rewards and cashback" },
    { id: "F", label: "Travel benefits" },
  ],
};

export const step2Strings = {
  title: "Almost There!",
  question: "What is your annual household income?",
  options: [
    { id: "A", label: "Under $25,000" },
    { id: "B", label: "$25,000 - $50,000" },
    { id: "C", label: "$50,000 - $75,000" },
    { id: "D", label: "$75,000 - $100,000" },
    { id: "E", label: "$100,000 - $150,000" },
    { id: "F", label: "Over $150,000" },
  ],
};

export const step3Texts = {
  subtitle: {
    firstPart: "Enter your details and instantly access the credit card that's",
    highlight: "perfect for you",
  },
  validationErrors: {
    emailRequired: "Email address is required",
    emailInvalid: "Please enter a valid email address",
    emailDomainIncomplete: "The email domain appears incomplete",
    nameRequired: "First name is required",
    nameLength: "First name must be at least 2 characters",
    lastNameRequired: "Last name is required",
    lastNameLength: "Last name must be at least 2 characters",
    phoneRequired: "Phone number is required",
    phoneFormat: "Please enter a valid US mobile number (11 digits)",
    phonePrefix: "The number must start with '07' (US mobile prefix)",
    acceptTerms: "You must agree to receive information to continue",
  },
};
