const navigation = [
  {
    name: "Guide",
    description: "",
    isExternal: true,
    link: "https://guide.scroll.io/",
    path: "guide",
  },
  {
    name: "Faucet",
    description: "Receive test ETH and USDC tokens on L1 from Faucet.",
    link: "https://faucet.scroll.io/",
    path: "faucet",
  },
  {
    name: "Bridge",
    description:
      "Use Bridge (our Hop fork) to transfer tokens between L1 and L2.",
    link: "https://bridge.scroll.io/",
    path: "bridge",
  },
  {
    name: "Swap",
    description:
      "Use Swap (our Uniswap fork) to swap tokens and supply liquidity on L2.",
    link: "https://swap.scroll.io/",
    path: "swap",
  },
  {
    name: "Rollup Explorer",
    description:
      "See L2 blocks being committed to L1 and finalized with zkEVM proofs on our Rollup Explorer.",
    link: "https://rollupscan.scroll.io/",
    isActive: true,
    path: "rollupscan",
  },
  {
    name: "L1 Block Explorer",
    description: "See your L1 transactions on our fork of Blockscout.",
    link: "https://l1scan.scroll.io/",
    isExternal: true,
    path: "l1scan",
  },
  {
    name: "L2 Block Explorer",
    description: "See your L2 transactions on our fork of Blockscout.",
    link: "https://l2scan.scroll.io/",
    isExternal: true,
    path: "l2scan",
  },
]

const pathNavigation = [
  {
    name: "Guide",
    description: "",
    isExternal: true,
    link: "https://guide.scroll.io/",
  },
  {
    name: "Faucet",
    description: "Receive test ETH and USDC tokens on L1 from Faucet.",
    link: "/faucet",
  },
  {
    name: "Bridge",
    description:
      "Use Bridge (our Hop fork) to transfer tokens between L1 and L2.",
    link: "/bridge",
  },
  {
    name: "Swap",
    description:
      "Use Swap (our Uniswap fork) to swap tokens and supply liquidity on L2.",
    link: "/swap",
  },
  {
    name: "Rollup Explorer",
    description:
      "See L2 blocks being committed to L1 and finalized with zkEVM proofs on our Rollup Explorer.",
    link: "/rollupscan",
    isActive: true,
  },
  {
    name: "L1 Block Explorer",
    description: "See your L1 transactions on our fork of Blockscout.",
    link: "/l1scan",
    isExternal: true,
  },
  {
    name: "L2 Block Explorer",
    description: "See your L2 transactions on our fork of Blockscout.",
    link: "/l2scan",
    isExternal: true,
  },
]

export { navigation }
