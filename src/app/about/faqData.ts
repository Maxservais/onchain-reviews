import { FAQEntry } from "@/components/utils/FAQ";

export const faqs: FAQEntry[] = [
  {
    index: 1,
    question: "Why do I need a wallet?",
    answer:
      "A wallet is needed to add a review because it uses cryptography to verify your identity, ensuring authenticity and security. Additionally, it allows you to interact with the blockchain directly and securely.",
  },
  {
    index: 2,
    question: "Why should I pay to review?",
    answer:
      "We don't charge any fees. However, using the blockchain incurs minimal costs, usually just a few cents. This small fee covers the transaction cost and prevents spam, ensuring genuine contributions.",
  },
  {
    index: 3,
    question: "Why do I need to sign a transaction?",
    answer:
      "Signing a transaction with your wallet uses cryptography to verify your identity, ensuring your review is authentic.",
  },
  {
    index: 4,
    question: "How should I proceed?",
    answer:
      "Prepare your wallet and ensure you have some ETH on OP Mainnet, a Layer 2 solution. You will need to sign with your wallet, using cryptography to verify your identity. Your review will be recorded on the blockchain, making your contribution enduring and valuable to the ecosystem.",
  },
];
