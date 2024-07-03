<div align="center" style="margin-top: 1em; margin-bottom: 3em;">
  <h1>👋 Welcome!</h1>
</div>

This Attestation-Based Dapp Rating web app allows anyone to review dApps and tools - with all reviews stored onchain (on OP mainnet or Base, though other networks can be configured). By leveraging the Ethereum Attestation Service, users can share their experiences 100% onchain which offers

- **Transparency**: Reviews are tamper-proof and verifiable by anyone.
- **Composability**: Onchain reviews can be seamlessly integrated into various projects, enabling a richer ecosystem of interconnected dApps.

You can see this in action on a real-production app on [Ethereum Ecosystem](https://www.ethereum-ecosystem.com/apps/coinbase#reviews), where users can check and leave reviews for various dApps and tools.

## Installation

Follow these steps to get the project up and running locally:

- First, clone the repository to your local machine.
- Set up a PostgreSQL database on your machine or on the [cloud](https://vercel.com/storage/postgres).
- Set up environment variables by copying the .env.example file to .env and filling in the required values.
- Install dependencies using your preferred package manager.
- Finally run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

- Open http://localhost:3000 in your browser to see the application running.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Technologies Used

This project uses a mix of technologies to make everything work smoothly:

- [Next.js](https://nextjs.org/): The React framework for building server-side rendered and static web applications.
- [TailwindCSS](https://tailwindcss.com/): Utility-first CSS framework for styling.
- [EAS SDK](https://attest.org/): Ethereum Attestation Service SDK for handling attestations.
- [tRPC](https://trpc.io/): End-to-end typesafe APIs.
- [GraphQL](https://graphql.org/): Query language for APIs.
- [Wagmi](https://wagmi.sh/): React Hooks for Ethereum.
- [Viem](https://viem.sh/): Low-level typescript interface for Ethereum.
- [Web3Modal](https://github.com/WalletConnect/web3modal): Web3 provider solution for all Wallets.
- [Drizzle](https://orm.drizzle.team/): TypeScript ORM for PostgreSQL.
- [PostgreSQL](https://www.postgresql.org/): Open-source relational database.

## How to contribute

### 1. Submit an issue
### 2. Fork the repository
### 3. Set up your local environment (optional)

**Clone your fork**

```sh
git clone git@github.com:[your_github_handle]/onchain-reviews && cd /onchain-reviews
```

**Install dependencies**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### 4. Make awesome changes!

**Create a new branch for your changes**

```sh
git checkout -b new_branch_name
```

**Start developing!**

```sh
npm dev
```

**Commit and prepare for pull request (PR).**
In your PR commit message, reference the issue it resolves (see [how to link a commit message to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)).

```sh
git commit -m "brief description of changes [Fixes #1234]"
```

**Push to your GitHub account**

```sh
git push
```

### 5. Submit your PR and Wait for review
