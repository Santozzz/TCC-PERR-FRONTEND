const mongoose = require("../db/conn");
const { Schema } = mongoose;

const Vagas = mongoose.model(
  "Vagas",
  new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      companyName: {
        type: String,
        required: true,
      },
      wage: {
        type: String,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
      localization: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      images: {
        type: Array,
        required: true,
      },
      available: {
        type: Boolean,
      },
      user: Object,
      candidate: Object,
    },
    { timestamps: true }
  )
);

module.exports = Vagas;
