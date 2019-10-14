import Author from './components/author';
import Help from './components/help';

// a plugin needs a name :)
export const pluginName = 'Welcome';

// a plugin needs a navigation :)
export const navigation = [
  {
    name: 'Dir 0', children: [
      {
        name: 'Dir 0.0', children: [
          { name: 'Author', component: Author },
          { name: 'Help', component: Help }
        ]
      },

      {
        name: 'Dir 0.1', children: [
          { name: 'Author', component: Author },
          { name: 'Help', component: Help }
        ]
      },

      {
        name: 'Dir 0.2', children: [
          { name: 'Author', component: Author },
          { name: 'Help', component: Help }
        ]
      }
    ]
  },
  {
    name: 'Dir 1', children: [
      {
        name: 'Dir 1.0', children: [
          { name: 'Author', component: Author },
          { name: 'Help', component: Help }
        ]
      },

      {
        name: 'Dir 1.1', children: [
          { name: 'Author', component: Author },
          { name: 'Help', component: Help }
        ]
      },

      {
        name: 'Dir 1.2', children: [
          { name: 'Author', component: Author },
          { name: 'Help', component: Help }
        ]
      }
    ]
  },
  {
    name: 'Dir 2', children: [
      {
        name: 'Dir 2.0', children: [
          { name: 'Author', component: Author },
          { name: 'Help', component: Help }
        ]
      },

      {
        name: 'Dir 2.1', children: [
          { name: 'Author', component: Author },
          { name: 'Help', component: Help }
        ]
      },

      {
        name: 'Dir 2.2', children: [
          { name: 'Author', component: Author },
          { name: 'Help', component: Help }
        ]
      }
    ]
  },
];
