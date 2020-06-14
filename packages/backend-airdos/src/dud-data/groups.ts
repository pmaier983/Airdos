import { groupsPosts } from './groupsPosts'

export const groups = {
  Airdos: {
    name: 'Airdos',
    members: ['rackraider', 'doctoroz101', 'pmaier983'],
    admins: ['rackraider', 'doctoroz101', 'pmaier983'],
    posts: groupsPosts.Airdos,
    private: true,
  },
  BowdoinCollege: {
    name: 'Bowdoin College',
    members: ['rackraider', 'pmaier983'],
    admins: [],
    posts: groupsPosts.Bowdoin_College,
    private: false,
  },
  BrownCollege: {
    name: 'Brown College',
    members: ['doctoroz101'],
    admins: [],
    posts: groupsPosts.Brown_College,
    private: false,
  },
}
