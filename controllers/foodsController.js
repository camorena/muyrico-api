const db = require("../models");

// Defining methods for the foodsController
module.exports = {
  seedDb: function(req, res) {
    const dataSeed = [
      {
        name: "Carlos Moreno",
        avatarUrl:
          "https://steamuserimages-a.akamaihd.net/ugc/923681700890091519/A59593682732A452E645CB56D9A58DDD9BE9181D/",
        userid: "camoren",
        psw: "123",
        items: [
          {
            foodId: "food_be31s42bij6uvfadshz1nbmt72eh",
            label: "Oranges",
            nutrients: {
              ENERC_KCAL: 47,
              PROCNT: 0.94,
              FAT: 0.12,
              CHOCDF: 11.75,
              FIBTG: 2.4
            },
            category: "Generic foods",
            categoryLabel: "food",
            image:
              "https://www.edamam.com/food-img/8ea/8ea264a802d6e643c1a340a77863c6ef.jpg",
            foodContentsLabel: "",
            date: new Date(Date.now())
          },
          {
            foodId: "food_b0bn6w4ab49t55b1o8jsnbq6nm2g",
            label: "Bananas",
            nutrients: {
              ENERC_KCAL: 89,
              PROCNT: 1.09,
              FAT: 0.33,
              CHOCDF: 22.84,
              FIBTG: 2.6
            },
            category: "Generic foods",
            categoryLabel: "food",
            image:
              "https://www.edamam.com/food-img/9f6/9f6181163a25c96022ee3fc66d9ebb11.jpg",
            date: new Date(Date.now())
          },
          {
            foodId: "food_avnx8qca7ob47zbkfzmc2bd6ip2y",
            label: "chicken",
            nutrients: {
              ENERC_KCAL: 215,
              PROCNT: 18.6,
              FAT: 15.06
            },
            category: "Generic foods",
            categoryLabel: "food",
            image:
              "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg",
              date: new Date(Date.now())
          },
          {
            foodId: "food_bzbbhr5ad3z4y5byz2rh3bvs1b8i",
            label: "carrots",
            nutrients: {
              ENERC_KCAL: 41,
              PROCNT: 0.93,
              FAT: 0.24,
              CHOCDF: 9.58,
              FIBTG: 2.8
            },
            category: "Generic foods",
            categoryLabel: "food",
            image:
              "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg",
              date: new Date(Date.now())
          },
          {
            foodId: "food_avc89foae7wbc5a06w9g7bdk3s1g",
            label: "peas",
            nutrients: {
              ENERC_KCAL: 81,
              PROCNT: 5.42,
              FAT: 0.4,
              CHOCDF: 14.45,
              FIBTG: 5.1
            },
            category: "Generic foods",
            categoryLabel: "food",
            image:
              "https://www.edamam.com/food-img/5ed/5ed641d646c028598a90bdb9ece34fc8.jpg",
              date: new Date(Date.now())
          },
          {
            foodId: "food_afwmmd8a3mlvhia0cygswagc4iio",
            label: "chia",
            nutrients: {
              ENERC_KCAL: 486,
              PROCNT: 16.54,
              FAT: 30.74,
              CHOCDF: 42.12,
              FIBTG: 34.4
            },
            category: "Generic foods",
            categoryLabel: "food",
            image:
              "https://www.edamam.com/food-img/bcc/bcc6e6bf3175772ad00b414636467257.jpg",
              date: new Date(Date.now())
          },
          {
            foodId: "food_a25eubeal32ljebsh4lr9anrx0lg",
            label: "Blueberries",
            nutrients: {
              ENERC_KCAL: 57,
              PROCNT: 0.7099999785423279,
              CHOCDF: 13.569999694824219,
              FIBTG: 2.9000000953674316
            },
            category: "Packaged foods",
            categoryLabel: "food",
            image: "https://www.edamam.com/food-img/f55/f55705a2a9ea9f7abf449a05fa968139.png",
            date: new Date(Date.now())
          },
          {
            foodId: "food_a15odrqbhfxq2maboskfybtygyxv",
            label: "Tomatoes",
            nutrients: {
              ENERC_KCAL: 18,
              PROCNT: 0.88,
              FAT: 0.2,
              CHOCDF: 3.89,
              FIBTG: 1.2
            },
            category: "Generic foods",
            categoryLabel: "food",
            image:
              "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg",
              date: new Date(Date.now())
          },
          {
            foodId: "food_b0x15s4apynp2dacf3os3a9m9mkh",
            label: "lime",
            nutrients: {
              ENERC_KCAL: 30,
              PROCNT: 0.7,
              FAT: 0.2,
              CHOCDF: 10.54,
              FIBTG: 2.8
            },
            category: "Generic foods",
            categoryLabel: "food",
            image:
              "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg",
              date: new Date(Date.now())
          },
          {
            foodId: "food_badexh5ap2qfzsbk3jo8babbrre4",
            label: "balsamic",
            nutrients: {
              ENERC_KCAL: 88,
              PROCNT: 0.49,
              FAT: 0.2,
              CHOCDF: 17.03,
              FIBTG: 2.8
            },
            category: "Generic foods",
            categoryLabel: "food",
            image:
              "https://www.edamam.com/food-img/90a/90a1f211768e166ecfff19e8b4747498.jpg",
              date: new Date(Date.now())
          },
          {
            foodId: "food_awh1s7ba9elklxbtr7t3sazj7azv",
            label: "Nuts, almonds",
            nutrients: {
              ENERC_KCAL: 579,
              PROCNT: 21.15,
              FAT: 49.93,
              CHOCDF: 21.55,
              FIBTG: 12.5
            },
            category: "Generic foods",
            categoryLabel: "food",
            image:
              "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg",
              date: new Date(Date.now())
          },
          {
            foodId: "food_bd0vlp9aky9d70blh6fmcaior90f",
            label: "Pineapple",
            nutrients: {
              ENERC_KCAL: 50,
              PROCNT: 0.54,
              FAT: 0.12,
              CHOCDF: 13.12,
              FIBTG: 1.4
            },
            category: "Generic foods",
            categoryLabel: "food",
            image:
              "https://www.edamam.com/food-img/2da/2da6f2397ab64ed185c082edebc4dd7c.jpg",
              date: new Date(Date.now())
          },
          {
            foodId: "food_a02vjc8abmth5ob3lqnv2ajrikyh",
            label: "Beef",
            nutrients: {
              ENERC_KCAL: 130,
              PROCNT: 21.64,
              FAT: 4.81,
              CHOCDF: 0.12
            },
            category: "Generic foods",
            categoryLabel: "food",
            image:
              "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg",
              date: new Date(Date.now())
          },
          {
            foodId: "food_asv5ozgbypetlfae7d7yfbrvoqd9",
            label: "Rice, brown, medium-grain",
            nutrients: {
              ENERC_KCAL: 362,
              PROCNT: 7.5,
              FAT: 2.68,
              CHOCDF: 76.17,
              FIBTG: 3.4
            },
            category: "Generic foods",
            categoryLabel: "food",
            image:
              "https://www.edamam.com/food-img/c45/c453c255234a6f7f798d3f2aaa74bbcd.jpg",
              date: new Date(Date.now())
          },
          {
            foodId: "food_bfz264baccwcmhbhs0dllba76s5d",
            label: "Celery, raw",
            nutrients: {
              ENERC_KCAL: 16,
              PROCNT: 0.69,
              FAT: 0.17,
              CHOCDF: 2.97,
              FIBTG: 1.6
            },
            category: "Generic foods",
            categoryLabel: "food",
            image:
              "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg",
              date: new Date(Date.now())
          },
          {
            foodId: "food_b14tok4b1edmu3bxrj8igba0m4fa",
            label: "Plums, raw",
            nutrients: {
              ENERC_KCAL: 46,
              PROCNT: 0.7,
              FAT: 0.28,
              CHOCDF: 11.42,
              FIBTG: 1.4
            },
            category: "Generic foods",
            categoryLabel: "food",
            image:
              "https://www.edamam.com/food-img/171/171e0c6dd5bc1090a0f574722f3c09b6.jpg",
              date: new Date(Date.now())
          }
        ],
        combos: [
          {
            label: "My Best Meal",
            date: new Date(Date.now()),
            items: [
              {
                foodId: "food_be31s42bij6uvfadshz1nbmt72eh",
                label: "Oranges, raw, all commercial varieties",
                nutrients: {
                  ENERC_KCAL: 47,
                  PROCNT: 0.94,
                  FAT: 0.12,
                  CHOCDF: 11.75,
                  FIBTG: 2.4
                },
                category: "Generic foods",
                categoryLabel: "food",
                image:
                  "https://www.edamam.com/food-img/8ea/8ea264a802d6e643c1a340a77863c6ef.jpg",
                foodContentsLabel: "",
                date: new Date(Date.now())
              },
              {
                foodId: "food_avnx8qca7ob47zbkfzmc2bd6ip2y",
                label: "chicken",
                nutrients: {
                  ENERC_KCAL: 215,
                  PROCNT: 18.6,
                  FAT: 15.06
                },
                category: "Generic foods",
                categoryLabel: "food",
                image:
                  "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg",
                  date: new Date(Date.now())
              },
              {
                foodId: "food_a25eubeal32ljebsh4lr9anrx0lg",
                label: "Blueberries",
                nutrients: {
                  ENERC_KCAL: 57,
                  PROCNT: 0.7099999785423279,
                  CHOCDF: 13.569999694824219,
                  FIBTG: 2.9000000953674316
                },
                category: "Packaged foods",
                categoryLabel: "food",
                image: "https://www.edamam.com/food-img/f55/f55705a2a9ea9f7abf449a05fa968139.png",
                date: new Date(Date.now())
              }
            ]
          },
          {
            label: "Morning Snack",
            date: new Date(Date.now()),
            items: [
              {
                foodId: "food_a02vjc8abmth5ob3lqnv2ajrikyh",
                label: "Beef",
                nutrients: {
                  ENERC_KCAL: 130,
                  PROCNT: 21.64,
                  FAT: 4.81,
                  CHOCDF: 0.12
                },
                category: "Generic foods",
                categoryLabel: "food",
                image:
                  "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg",
                  date: new Date(Date.now())
              },
              {
                foodId: "food_asv5ozgbypetlfae7d7yfbrvoqd9",
                label: "Rice, brown, medium-grain",
                nutrients: {
                  ENERC_KCAL: 362,
                  PROCNT: 7.5,
                  FAT: 2.68,
                  CHOCDF: 76.17,
                  FIBTG: 3.4
                },
                category: "Generic foods",
                categoryLabel: "food",
                image:
                  "https://www.edamam.com/food-img/c45/c453c255234a6f7f798d3f2aaa74bbcd.jpg",
                  date: new Date(Date.now())
              },
              {
                foodId: "food_bfz264baccwcmhbhs0dllba76s5d",
                label: "Celery, raw",
                nutrients: {
                  ENERC_KCAL: 16,
                  PROCNT: 0.69,
                  FAT: 0.17,
                  CHOCDF: 2.97,
                  FIBTG: 1.6
                },
                category: "Generic foods",
                categoryLabel: "food",
                image:
                  "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg",
                  date: new Date(Date.now())
              },
              {
                foodId: "food_b14tok4b1edmu3bxrj8igba0m4fa",
                label: "Plums, raw",
                nutrients: {
                  ENERC_KCAL: 46,
                  PROCNT: 0.7,
                  FAT: 0.28,
                  CHOCDF: 11.42,
                  FIBTG: 1.4
                },
                category: "Generic foods",
                categoryLabel: "food",
                image:
                  "https://www.edamam.com/food-img/171/171e0c6dd5bc1090a0f574722f3c09b6.jpg",
                  date: new Date(Date.now())
              }
            ]
          },
          {
            label: "Breakfast",
            date: new Date(Date.now()),
            items: [
              {
                foodId: "food_a02vjc8abmth5ob3lqnv2ajrikyh",
                label: "Beef",
                nutrients: {
                  ENERC_KCAL: 130,
                  PROCNT: 21.64,
                  FAT: 4.81,
                  CHOCDF: 0.12
                },
                category: "Generic foods",
                categoryLabel: "food",
                image:
                  "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg",
                  date: new Date(Date.now())
              },
              {
                foodId: "food_asv5ozgbypetlfae7d7yfbrvoqd9",
                label: "Rice, brown, medium-grain",
                nutrients: {
                  ENERC_KCAL: 362,
                  PROCNT: 7.5,
                  FAT: 2.68,
                  CHOCDF: 76.17,
                  FIBTG: 3.4
                },
                category: "Generic foods",
                categoryLabel: "food",
                image:
                  "https://www.edamam.com/food-img/c45/c453c255234a6f7f798d3f2aaa74bbcd.jpg",
                  date: new Date(Date.now())
              },
              {
                foodId: "food_bfz264baccwcmhbhs0dllba76s5d",
                label: "Celery, raw",
                nutrients: {
                  ENERC_KCAL: 16,
                  PROCNT: 0.69,
                  FAT: 0.17,
                  CHOCDF: 2.97,
                  FIBTG: 1.6
                },
                category: "Generic foods",
                categoryLabel: "food",
                image:
                  "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg",
                  date: new Date(Date.now())
              },
              {
                foodId: "food_b14tok4b1edmu3bxrj8igba0m4fa",
                label: "Plums, raw",
                nutrients: {
                  ENERC_KCAL: 46,
                  PROCNT: 0.7,
                  FAT: 0.28,
                  CHOCDF: 11.42,
                  FIBTG: 1.4
                },
                category: "Generic foods",
                categoryLabel: "food",
                image:
                  "https://www.edamam.com/food-img/171/171e0c6dd5bc1090a0f574722f3c09b6.jpg",
                  date: new Date(Date.now())
              }
            ]
          },
          {
            label: "Tuesday Snack",
            date: new Date(Date.now()),
            items: [
              {
                foodId: "food_a02vjc8abmth5ob3lqnv2ajrikyh",
                label: "Beef",
                nutrients: {
                  ENERC_KCAL: 130,
                  PROCNT: 21.64,
                  FAT: 4.81,
                  CHOCDF: 0.12
                },
                category: "Generic foods",
                categoryLabel: "food",
                image:
                  "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg",
                  date: new Date(Date.now())
              },
              {
                foodId: "food_asv5ozgbypetlfae7d7yfbrvoqd9",
                label: "Rice, brown, medium-grain",
                nutrients: {
                  ENERC_KCAL: 362,
                  PROCNT: 7.5,
                  FAT: 2.68,
                  CHOCDF: 76.17,
                  FIBTG: 3.4
                },
                category: "Generic foods",
                categoryLabel: "food",
                image:
                  "https://www.edamam.com/food-img/c45/c453c255234a6f7f798d3f2aaa74bbcd.jpg",
                  date: new Date(Date.now())
              },
              {
                foodId: "food_bfz264baccwcmhbhs0dllba76s5d",
                label: "Celery, raw",
                nutrients: {
                  ENERC_KCAL: 16,
                  PROCNT: 0.69,
                  FAT: 0.17,
                  CHOCDF: 2.97,
                  FIBTG: 1.6
                },
                category: "Generic foods",
                categoryLabel: "food",
                image:
                  "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg",
                  date: new Date(Date.now())
              },
              {
                foodId: "food_b14tok4b1edmu3bxrj8igba0m4fa",
                label: "Plums, raw",
                nutrients: {
                  ENERC_KCAL: 46,
                  PROCNT: 0.7,
                  FAT: 0.28,
                  CHOCDF: 11.42,
                  FIBTG: 1.4
                },
                category: "Generic foods",
                categoryLabel: "food",
                image:
                  "https://www.edamam.com/food-img/171/171e0c6dd5bc1090a0f574722f3c09b6.jpg",
                  date: new Date(Date.now())
              }
            ]
          },
          {
            label: "Monday Dinner",
            date: new Date(Date.now()),
            items: [
              {
                foodId: "food_a02vjc8abmth5ob3lqnv2ajrikyh",
                label: "Beef",
                nutrients: {
                  ENERC_KCAL: 130,
                  PROCNT: 21.64,
                  FAT: 4.81,
                  CHOCDF: 0.12
                },
                category: "Generic foods",
                categoryLabel: "food",
                image:
                  "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg",
                  date: new Date(Date.now())
              },
              {
                foodId: "food_asv5ozgbypetlfae7d7yfbrvoqd9",
                label: "Rice, brown, medium-grain",
                nutrients: {
                  ENERC_KCAL: 362,
                  PROCNT: 7.5,
                  FAT: 2.68,
                  CHOCDF: 76.17,
                  FIBTG: 3.4
                },
                category: "Generic foods",
                categoryLabel: "food",
                image:
                  "https://www.edamam.com/food-img/c45/c453c255234a6f7f798d3f2aaa74bbcd.jpg",
                  date: new Date(Date.now())
              },
              {
                foodId: "food_bfz264baccwcmhbhs0dllba76s5d",
                label: "Celery, raw",
                nutrients: {
                  ENERC_KCAL: 16,
                  PROCNT: 0.69,
                  FAT: 0.17,
                  CHOCDF: 2.97,
                  FIBTG: 1.6
                },
                category: "Generic foods",
                categoryLabel: "food",
                image:
                  "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg",
                  date: new Date(Date.now())
              },
              {
                foodId: "food_b14tok4b1edmu3bxrj8igba0m4fa",
                label: "Plums, raw",
                nutrients: {
                  ENERC_KCAL: 46,
                  PROCNT: 0.7,
                  FAT: 0.28,
                  CHOCDF: 11.42,
                  FIBTG: 1.4
                },
                category: "Generic foods",
                categoryLabel: "food",
                image:
                  "https://www.edamam.com/food-img/171/171e0c6dd5bc1090a0f574722f3c09b6.jpg",
                  date: new Date(Date.now())
              }
            ]
          },
          {
            label: "wednesday Lunch",
            date: new Date(Date.now()),
            items: [
              {
                foodId: "food_a02vjc8abmth5ob3lqnv2ajrikyh",
                label: "Beef",
                nutrients: {
                  ENERC_KCAL: 130,
                  PROCNT: 21.64,
                  FAT: 4.81,
                  CHOCDF: 0.12
                },
                category: "Generic foods",
                categoryLabel: "food",
                image:
                  "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg",
                  date: new Date(Date.now())
              },
              {
                foodId: "food_asv5ozgbypetlfae7d7yfbrvoqd9",
                label: "Rice, brown, medium-grain",
                nutrients: {
                  ENERC_KCAL: 362,
                  PROCNT: 7.5,
                  FAT: 2.68,
                  CHOCDF: 76.17,
                  FIBTG: 3.4
                },
                category: "Generic foods",
                categoryLabel: "food",
                image:
                  "https://www.edamam.com/food-img/c45/c453c255234a6f7f798d3f2aaa74bbcd.jpg",
                  date: new Date(Date.now())
              },
              {
                foodId: "food_bfz264baccwcmhbhs0dllba76s5d",
                label: "Celery, raw",
                nutrients: {
                  ENERC_KCAL: 16,
                  PROCNT: 0.69,
                  FAT: 0.17,
                  CHOCDF: 2.97,
                  FIBTG: 1.6
                },
                category: "Generic foods",
                categoryLabel: "food",
                image:
                  "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg",
                  date: new Date(Date.now())
              },
              {
                foodId: "food_b14tok4b1edmu3bxrj8igba0m4fa",
                label: "Plums, raw",
                nutrients: {
                  ENERC_KCAL: 46,
                  PROCNT: 0.7,
                  FAT: 0.28,
                  CHOCDF: 11.42,
                  FIBTG: 1.4
                },
                category: "Generic foods",
                categoryLabel: "food",
                image:
                  "https://www.edamam.com/food-img/171/171e0c6dd5bc1090a0f574722f3c09b6.jpg",
                  date: new Date(Date.now())
              }
            ]
          }
        ]
      },
      {
        name: "Peter Jones",
        avatarUrl:
          "https://steamuserimages-a.akamaihd.net/ugc/923681700890091519/A59593682732A452E645CB56D9A58DDD9BE9181D/",
        userid: "pjones",
        psw: "123",
        items: [
          {
            foodId: "food_avnx8qca7ob47zbkfzmc2bd6ip2y",
            label: "chicken",
            nutrients: {
              ENERC_KCAL: 215,
              PROCNT: 18.6,
              FAT: 15.06
            },
            category: "Generic foods",
            categoryLabel: "food",
            image:
              "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
          },
          {
            foodId: "food_bzbbhr5ad3z4y5byz2rh3bvs1b8i",
            label: "carrots",
            nutrients: {
              ENERC_KCAL: 41,
              PROCNT: 0.93,
              FAT: 0.24,
              CHOCDF: 9.58,
              FIBTG: 2.8
            },
            category: "Generic foods",
            categoryLabel: "food",
            image:
              "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
          },
          {
            foodId: "food_avc89foae7wbc5a06w9g7bdk3s1g",
            label: "peas, green, raw",
            nutrients: {
              ENERC_KCAL: 81,
              PROCNT: 5.42,
              FAT: 0.4,
              CHOCDF: 14.45,
              FIBTG: 5.1
            },
            category: "Generic foods",
            categoryLabel: "food",
            image:
              "https://www.edamam.com/food-img/5ed/5ed641d646c028598a90bdb9ece34fc8.jpg"
          },
          {
            foodId: "food_afwmmd8a3mlvhia0cygswagc4iio",
            label: "chia",
            nutrients: {
              ENERC_KCAL: 486,
              PROCNT: 16.54,
              FAT: 30.74,
              CHOCDF: 42.12,
              FIBTG: 34.4
            },
            category: "Generic foods",
            categoryLabel: "food",
            image:
              "https://www.edamam.com/food-img/bcc/bcc6e6bf3175772ad00b414636467257.jpg"
          },
          {
            foodId: "food_a25eubeal32ljebsh4lr9anrx0lg",
            label: "Blueberries",
            nutrients: {
              ENERC_KCAL: 57,
              PROCNT: 0.7099999785423279,
              CHOCDF: 13.569999694824219,
              FIBTG: 2.9000000953674316
            },
            brand: "Meijer, Inc.",
            category: "Packaged foods",
            categoryLabel: "food",
            image: "https://www.edamam.com/food-img/f55/f55705a2a9ea9f7abf449a05fa968139.png",
            date: new Date(Date.now())
          },
          {
            foodId: "food_a15odrqbhfxq2maboskfybtygyxv",
            label: "Tomatoes, red, ripe, raw, year round average",
            nutrients: {
              ENERC_KCAL: 18,
              PROCNT: 0.88,
              FAT: 0.2,
              CHOCDF: 3.89,
              FIBTG: 1.2
            },
            category: "Generic foods",
            categoryLabel: "food",
            image:
              "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
          },
          {
            foodId: "food_b0x15s4apynp2dacf3os3a9m9mkh",
            label: "lime",
            nutrients: {
              ENERC_KCAL: 30,
              PROCNT: 0.7,
              FAT: 0.2,
              CHOCDF: 10.54,
              FIBTG: 2.8
            },
            category: "Generic foods",
            categoryLabel: "food",
            image:
              "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
          },
          {
            foodId: "food_badexh5ap2qfzsbk3jo8babbrre4",
            label: "balsamic",
            nutrients: {
              ENERC_KCAL: 88,
              PROCNT: 0.49,
              CHOCDF: 17.03
            },
            category: "Generic foods",
            categoryLabel: "food",
            image:
              "https://www.edamam.com/food-img/90a/90a1f211768e166ecfff19e8b4747498.jpg"
          }
        ],
        combos: [
          {
            label: "Peter's Lunch",
            date: new Date(Date.now()),
            items: [
              {
                foodId: "food_be31s42bij6uvfadshz1nbmt72eh",
                label: "Oranges, raw, all commercial varieties",
                nutrients: {
                  ENERC_KCAL: 47,
                  PROCNT: 0.94,
                  FAT: 0.12,
                  CHOCDF: 11.75,
                  FIBTG: 2.4
                },
                category: "Generic foods",
                categoryLabel: "food",
                image:
                  "https://www.edamam.com/food-img/8ea/8ea264a802d6e643c1a340a77863c6ef.jpg",
                foodContentsLabel: "",
                date: new Date(Date.now())
              },
              {
                foodId: "food_avnx8qca7ob47zbkfzmc2bd6ip2y",
                label: "chicken",
                nutrients: {
                  ENERC_KCAL: 215,
                  PROCNT: 18.6,
                  FAT: 15.06
                },
                category: "Generic foods",
                categoryLabel: "food",
                image:
                  "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
              },
              {
                foodId: "food_a25eubeal32ljebsh4lr9anrx0lg",
                label: "Blueberries",
                nutrients: {
                  ENERC_KCAL: 57,
                  PROCNT: 0.7099999785423279,
                  CHOCDF: 13.569999694824219,
                  FIBTG: 2.9000000953674316
                },
                brand: "Meijer, Inc.",
                category: "Packaged foods",
                categoryLabel: "food",
                image: "https://www.edamam.com/food-img/f55/f55705a2a9ea9f7abf449a05fa968139.png",
                date: new Date(Date.now())
              },
            ]
          }
        ]
      }
    ];
    
    
  db.remove({}, () => {
    for (row of dataSeed) {
      var newEvent = new db(row);
      newEvent.save();
    }
  });

  // seeded!
  res.send('Database seeded!');
  },
  findAll: function(req, res) {
    db.Food.find()
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Food.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Food.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Food.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Food.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
