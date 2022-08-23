const navigation = [
  {
    name: "Guide",
    description: "",
    isExternal: true,
    path: "guide",
  },
  {
    name: "Faucet",
    description: "Receive test ETH and USDC tokens on L1 from Faucet.",
    path: "faucet",
  },
  {
    name: "Bridge",
    description:
      "Use Bridge (our Hop fork) to transfer tokens between L1 and L2.",
    path: "bridge",
  },
  {
    name: "Swap",
    description:
      "Use Swap (our Uniswap fork) to swap tokens and supply liquidity on L2.",
    path: "swap",
  },
  {
    name: "Rollup Explorer",
    description:
      "See L2 blocks being committed to L1 and finalized with zkEVM proofs on our Rollup Explorer.",
    isActive: true,
    path: "rollupscan",
  },
  {
    name: "L1 Block Explorer",
    description: "See your L1 transactions on our fork of Blockscout.",
    isExternal: true,
    path: "l1scan",
  },
  {
    name: "L2 Block Explorer",
    description: "See your L2 transactions on our fork of Blockscout.",
    isExternal: true,
    path: "l2scan",
  },
]

export { navigation }
