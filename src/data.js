import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: uuidv4(),
    genre: "Office Quiz",
    image:
      "https://media.fromthegrapevine.com/assets/images/2018/4/the-office-u.S..jpg.696x0_q71_crop-smart.jpg?auto=compress&cs=tinysrgb&dpr=2&h=5100",
    questions: [
      {
        id: uuidv4(),
        question: "What's Pam's favorite flavor of yogurt?",
        points: 2,
        negativePoints: -1,
        options: [
          {
            id: uuidv4(),
            text: "Vanilla",
            isRight: false,
          },
          {
            id: uuidv4(),
            text: "Strawberry",
            isRight: false,
          },
          {
            id: uuidv4(),
            text: "Mixed berry",
            isRight: true,
          },
          {
            id: uuidv4(),
            text: "Blueberry",
            isRight: false,
          },
        ],
      },
      {
        id: uuidv4(),
        question: "What does Kevin suggest Dwight put in his gun holster?",
        points: 2,
        negativePoints: -1,
        options: [
          {
            id: uuidv4(),
            text: "Gun",
            isRight: false,
          },
          {
            id: uuidv4(),
            text: "Banana",
            isRight: true,
          },
          {
            id: uuidv4(),
            text: "Cellphone",
            isRight: false,
          },
          {
            id: uuidv4(),
            text: "Paper",
            isRight: false,
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    genre: "Friends Quiz",
    image:
      "https://variety.com/wp-content/uploads/2020/02/friends-tv-series.jpg?w=1000",
    questions: [
      {
        id: uuidv4(),
        question: "How many times was Ross legally divorced?",
        points: 2,
        negativePoints: -1,
        options: [
          {
            id: uuidv4(),
            text: "3",
            isRight: true,
          },
          {
            id: uuidv4(),
            text: "4",
            isRight: false,
          },
          {
            id: uuidv4(),
            text: "2",
            isRight: false,
          },
          {
            id: uuidv4(),
            text: "5",
            isRight: false,
          },
        ],
      },
      {
        id: uuidv4(),
        question:
          "Which of the following ingredients were not in Rachel's iconic Thanksgiving trifle?",
        points: 2,
        negativePoints: -1,
        options: [
          {
            id: uuidv4(),
            text: "Ladyfingers and jam",
            isRight: false,
          },
          {
            id: uuidv4(),
            text: "Beef with peas and onions",
            isRight: false,
          },
          {
            id: uuidv4(),
            text: "Raisins and walnut",
            isRight: true,
          },
          {
            id: uuidv4(),
            text: "Bananas and custard",
            isRight: false,
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    genre: "Movies Quiz",
    image: "https://wallpapercave.com/wp/wp5483697.jpg",
    questions: [
      {
        id: uuidv4(),
        question:
          "The conversation between Uma Thurman and John Travolta at Jack Rabbit Slim’s in Pulp Fiction referenced the plot of which future Tarantino movie?",
        points: 2,
        negativePoints: -1,
        options: [
          {
            id: uuidv4(),
            text: "Kill Bill",
            isRight: true,
          },
          {
            id: uuidv4(),
            text: "Jackie Brown",
            isRight: false,
          },
          {
            id: uuidv4(),
            text: "Sin City",
            isRight: false,
          },
          {
            id: uuidv4(),
            text: "From Dusk till Dawn",
            isRight: false,
          },
        ],
      },
      {
        id: uuidv4(),
        question:
          "Which of these is not a fiction brand created by Tarantino for his movie universe?",
        points: 2,
        negativePoints: -1,
        options: [
          {
            id: uuidv4(),
            text: "Red apple cigarettes",
            isRight: false,
          },
          {
            id: uuidv4(),
            text: "Big kahuna burgers",
            isRight: false,
          },
          {
            id: uuidv4(),
            text: "Arigato donuts",
            isRight: true,
          },
          {
            id: uuidv4(),
            text: "Jack rabbit slim’s",
            isRight: false,
          },
        ],
      },
    ],
  },
];

export default data;
