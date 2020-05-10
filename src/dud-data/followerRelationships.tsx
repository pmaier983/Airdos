interface IfollowerRelationships {
  [usernames: string] : string[]
}

export const followerRelationships: IfollowerRelationships = {
  gilbirney22: [],
  pmaier983: ['brock18', 'drewandtom19'],
  brock18: ['drewandtom19', 'pmaier983'],
  drewandtom19: ['brock18'],
}
