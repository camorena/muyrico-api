const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const items = [
  {
    foodId: { type: String },
    label: { type: String },
    nutrients: {
      ENERC_KCAL: { type: String },
      PROCNT: { type: String },
      FAT: { type: String },
      CHOCDF: { type: String },
      FIBTG: { type: String }
    },
    image: { type: String },
    category: { type: String },
    categoryLabel: { type: String },
    date: { type: Date, default: Date.now }
  }
];

const foodSchema = new Schema({
  userid: { type: String, required: true },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },

  avatarUrl: { type: String },
  items: items,
  combos: [
    {
      label: { type: String, required: true, unique: true },
      date: { type: Date, default: Date.now },
      items: items
    }
  ],
  date: { type: Date, default: Date.now }
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
