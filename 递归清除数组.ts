let moni = [
  {
    id: 1,
    name: "Item 1",
    children: [
      {
        id: 2,
        name: "Item 1-1",
        children: [
          {
            id: 3,
            name: "Item 1-1-1",
            children: [],
          },
          {
            id: 4,
            name: "Item 1-1-2",
            children: [
              {
                id: 5,
                name: "Item 1-1-2-1",
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 6,
        name: "Item 1-2",
        children: [],
      },
    ],
  },
  {
    id: 7,
    name: "Item 2",
    children: [],
  },
];

const clearAllChildren = (items, childrenName = "children") => {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item && item[childrenName]) {
      if (item[childrenName].length === 0) {
        delete item[childrenName];
      } else {
        clearAllChildren(item[childrenName], childrenName);
      }
    }
  }
  return items;
};
console.log(clearAllChildren(moni, "children"));
