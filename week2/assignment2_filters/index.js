const cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    },
    {
        "color": "red",
        "type": "cabrio",
        "registration": new Date('2016-05-02'),
        "capacity": 2
      },
      {
        "color": "green",
        "type": "focus",
        "registration": new Date('2017-06-03'),
        "capacity": 5
      },
      {
        "color": "blue",
        "type": "accord",
        "registration": new Date('2015-04-12'),
        "capacity": 5
      },
      {
        "color": "green",
        "type": "wrangler",
        "registration": new Date('2014-08-17'),
        "capacity": 4
      },
      {
        "color": "purple",
        "type": "miata",
        "registration": new Date('2012-03-02'),
        "capacity": 2
      },
      {
        "color": "red",
        "type": "blazer",
        "registration": new Date('1999-12-15'),
        "capacity": 5
      },
      {
        "color": "blue",
        "type": "suburban",
        "registration": new Date('2005-08-10'),
        "capacity": 8
      },
      {
        "color": "orange",
        "type": "fiat",
        "registration": new Date('2020-11-20'),
        "capacity": 2
      }
  ]
  const redCars = cars.filter(cars => cars.color === "red")
console.log(redCars)
console.log(cars)
const redAndGreen = cars.filter(cars => cars.color === "red" || cars.color === "green")
console.log(redAndGreen)