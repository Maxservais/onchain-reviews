import { FAQEntry } from "@/components/utils/FAQ";

export const faqs: FAQEntry[] = [
  {
    index: 1,
    question: "Why do I need a wallet?",
    answer:
      "A wallet is required to verify your identity through cryptography, ensuring the authenticity and security of your review. It allows you to interact directly with the blockchain.",
  },
  {
    index: 2,
    question: "Is there a cost to submit a review?",
    answer:
      "In most cases, we sponsor the gas fees, making it free for you to submit a review. Occasionally, there might be a minimal cost (a few cents) to cover transaction fees on the blockchain, which helps prevent spam and ensure genuine contributions.",
  },
  {
    index: 3,
    question: "Why do I need to sign a transaction?",
    answer:
      "Signing a transaction with your wallet verifies your identity cryptographically, ensuring the authenticity of your review and securely recording it on the blockchain.",
  },
  {
    index: 4,
    question: "How do I prepare to submit a review?",
    answer:
      "Ensure you have a compatible wallet connected. We use OP Mainnet, a Layer 2 solution, for faster and cheaper transactions. You'll need to sign the transaction with your wallet, but in most cases, we'll cover the gas fees for you.",
  },
  {
    index: 5,
    question: "What happens after I submit my review?",
    answer:
      "Your review will be permanently recorded on the blockchain, making your contribution enduring and valuable to the Ethereum ecosystem. It will be visible to others, helping them make informed decisions about apps and services.",
  },
];
