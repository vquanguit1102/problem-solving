const array = [
    {
      id: 1,
      des: 3,
      count: 5,
    },
    {
      id: 2,
      des: 6,
      count: 5,
    },
    {
      id: 4,
      des: 9,
      count: 10,
    },
    {
      id: 5,
      des: 3,
      count: 15,
    },
    {
      id: 6,
      des: 6,
      count: 10,
    },
    {
      id: 7,
      des: 6,
      count: 20,
    },
  ];

let map = new Map()

for(let i = 0; i < array.length ; i++) {
    if(map.has(array[i].des)) {
        map.set(array[i].des, {...map.get(array[i].des), count: map.get(array[i].des).count + array[i].count })
    } else {
        map.set(array[i].des, array[i])
    }
}

[
    { id: 1, des: 3, count: 20 },
    { id: 2, des: 6, count: 35 },
    { id: 4, des: 9, count: 10 }
  ]

console.log(map)