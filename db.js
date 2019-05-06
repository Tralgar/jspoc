module.exports = {
  user: [
    {
      id: 1,
      email: "leo.poupet@eliberty.fr",
      contact: {
        id: 1,
        firstname: "leo",
        lastname: "poup",
        skiers: [
          {
            id: 1,
            firstname: "romain"
          },
          {
            id: 2,
            firstname: "ludo"
          }
        ]
      }
    }
  ],
  catalog: [
    {
      id: 1,
      station: "tignes",
      products: [
        {
          id: 1,
          name: "1 jour",
          prix: 50
        },
        {
          id: 2,
          name: "7 jour",
          prix: 300
        },
        {
          id: 3,
          name: "saison",
          prix: 1000
        }
      ],
    },
    {
      id: 2,
      station: "valdiz",
      products: [
        {
          id: 1,
          name: "1 jour",
          prix: 50
        },
        {
          id: 2,
          name: "7 jour",
          prix: 300
        },
        {
          id: 3,
          name: "saison",
          prix: 1000
        }
      ]
    }
  ]
};
