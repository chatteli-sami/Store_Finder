import Store from "../models/store.model.js";
import extractValidationErrors from "../utils/errorExtractor.js";

const StoreController = {
  // -----------create Store
  create: async (req, res) => {
    try {
      const addStore = await Store.create(req.body);
      res.json(addStore);
    } catch (error) {
      console.log(error);
      res.status(404).json({
        succes: false,
        message: "Failed to Create Store",
        errors: extractValidationErrors(error),
      });
    }
  },

  // ------------get all Stores
  getAll: async (req, res) => {
    try {
      const Stores = await Store.find();
      res.json(Stores);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  },

  // ------------get one Store
  getOne: async (req, res) => {
    try {
      const store = await Store.findById(req.params.id);
      res.json(store);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  },

  //-------------update Store
  update: async (req, res) => {
    const Options = { new: true, runValidators: true };
    try {
      const editStore = await Store.findByIdAndUpdate(
        req.params.id,
        req.body,
        Options
      );
      res.json({
        success: true,
        message: "Update Store successfully",
        data: editStore,
      });
    } catch (error) {
      console.log(error);
      res.status(404).json(error);
    }
  },

  //------------delete Store
  delete: async (req, res) => {
    try {
      const deleteStore = await Store.findByIdAndDelete(req.params.id);
      res.json(deleteStore);
    } catch (error) {
      console.log(error);
      res.status(404).json(error);
    }
  },
};

export default StoreController;
