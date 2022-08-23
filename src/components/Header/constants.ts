const navigation = [
  {
    name: "Home",
    description: "Main Portal",
    subdomainOrPath: "",
  },
  {
    name: "Guide",
    description: "",
    isExternal: true,
    subdomainOrPath: "guide",
  },
  {
    name: "Faucet",
    description: "Receive test ETH and USDC tokens on L1 from Faucet.",
    subdomainOrPath: "faucet",
  },
  {
    name: "Bridge",
    description:
      "Use Bridge (our Hop fork) to transfer tokens between L1 and L2.",
    subdomainOrPath: "bridge",
  },
  {
    name: "Swap",
    description:
      "Use Swap (our Uniswap fork) to swap tokens and supply liquidity on L2.",
    subdomainOrPath: "swap",
  },
  {
    name: "Rollup Explorer",
    description:
      "See L2 blocks being committed to L1 and finalized with zkEVM proofs on our Rollup Explorer.",
    isActive: true,
    subdomainOrPath: "rollupscan",
  },
  {
    name: "L1 Block Explorer",
    description: "See your L1 transactions on our fork of Blockscout.",
    isExternal: true,
    subdomainOrPath: "l1scan",
  },
  {
    name: "L2 Block Explorer",
    description: "See your L2 transactions on our fork of Blockscout.",
    isExternal: true,
    subdomainOrPath: "l2scan",
  },
]

export { navigation }
