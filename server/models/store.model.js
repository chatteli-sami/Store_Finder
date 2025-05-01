import { Schema, model } from "mongoose";

const StoreSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please put the {PATH} of your Store!"],
      minlenght: [3, "please make sure the {PATH} is at least 3 charactere!"],
      maxlength: [25, "please use in the {PATH} at maximum char is 25"],
    },
    storeNumber: {
      type: Number,
      required: [true, "please put th numbre of store"],
      default: 0,
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Store = model("Store", StoreSchema);
export default Store;
