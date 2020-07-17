export const users = {
  gilbirney22: {
    id: '982',
    name: 'Gil Birney',
    firstName: 'Gil',
    lastName: 'Birney',
    username: 'gilbirney22',
    groups: [],
    chosenGroups: [],
    collegeName: 'Bowdoin College',
    followers: [
    ],
    following: [
    ],
  },
  pmaier983: {
    id: '983',
    name: 'Phillip Maier',
    firstName: 'Phillip',
    lastName: 'Maier',
    username: 'pmaier983',
    groups: [{ value: 'airdos', label: 'Airdos' }, { value: 'bowdoincollege', label: 'Bowdoin College' }],
    chosenGroups: [{ value: 'airdos', label: 'Airdos' }, { value: 'bowdoincollege', label: 'Bowdoin College' }],
    collegeName: 'Bowdoin College',
    followers: [
      'brock202', 'doctoroz101',
    ],
    following: [
      'brock202',
    ],
  },
  brock202: {
    id: '984',
    name: 'William Brockett',
    firstName: 'William',
    lastName: 'Brockett',
    username: 'brock202',
    groups: [{ value: 'airdos', label: 'Airdos' }, { value: 'bowdoincollege', label: 'Bowdoin College' }],
    chosenGroups: [{ value: 'airdos', label: 'Airdos' }, { value: 'bowdoincollege', label: 'Bowdoin College' }],
    collegeName: 'Pewter City Battle College',
    followers: [
      'doctoroz101', 'pmaier983',
    ],
    following: [
      'pmaier983', 'doctoroz101',
    ],
  },
  doctoroz101: {
    id: '985',
    name: 'Andrew Thomson',
    firstName: 'Andrew',
    lastName: 'Andrew',
    username: 'doctoroz101',
    groups: [{ value: 'airdos', label: 'Airdos' }, { value: 'browncollege', label: 'Brown College' }],
    chosenGroups: [{ value: 'airdos', label: 'Airdos' }, { value: 'browncollege', label: 'Brown College' }],
    collegeName: 'Brown Academy for Wizards and Witches',
    followers: [
      'brock202',
    ],
    following: [
      'brock202', 'pmaier983',
    ],
  },
}
