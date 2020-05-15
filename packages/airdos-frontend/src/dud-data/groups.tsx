interface Igroups {
  [groupName: string]: {
    name: string,
    members: string[]
  }
}

export const groups: Igroups = {
  Airdos: {
    name: 'Airdos',
    members: ['pmaier983', 'brock18', 'drewandtom19'],
  },
}
