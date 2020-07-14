import { groupsPosts } from './groupsPosts'

export const groups = {
  airdos: {
    name: 'airdos',
    displayName: 'Airdos',
    members: ['brock202', 'doctoroz101', 'pmaier983'],
    admins: ['brock202', 'doctoroz101', 'pmaier983'],
    posts: groupsPosts.Airdos,
    private: true,
  },
  bowdoincollege: {
    name: 'bowdoincollege',
    displayName: 'Bowdoin College',
    members: ['brock202', 'pmaier983'],
    admins: [],
    posts: groupsPosts.BowdoinCollege,
    private: false,
  },
  browncollege: {
    name: 'browncollege',
    displayName: 'Brown College',
    members: ['doctoroz101'],
    admins: [],
    posts: groupsPosts.BrownCollege,
    private: false,
  },
}
