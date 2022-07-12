const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const Address = require("../models/addressModel");
const { body, validationResult } = require("express-validator");

router.post(
  "/create",
  body("name").trim().not().isEmpty().withMessage("Name is required"),
  body("password").trim().not().isEmpty().withMessage("Password is required"),
  body("email")
    .isEmail()
    .custom(async (value) => {
      const user = await User.findOne({ email: value });

      if (user) {
        throw new Error("Email is already taken");
      }
      return true;
    }),
  body("mobile_no")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Mobile No. is required")
    .isNumeric()
    .withMessage("Mobile No. must be a number")
    .isLength({ min: 10, max: 10 })
    .withMessage("Mobile No. be of 10 digit"),
  body("age")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Age is required")
    .isNumeric()
    .withMessage("Age  must be a number")
    .custom((value) => {
      if (value < 1 || value > 100) {
        throw new Error("Age should be between 1 - 100");
      }
      return true;
    }),
  body("gender").trim().not().isEmpty().withMessage("Gender is required"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      //   console.log({ errors });
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }
      const user = await User.create(req.body);
      return res.status(201).send({ User: user });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
);

// router.post(
//   "/create",async (req, res) => {
//     try {
//       const user = await User.create(req.body);
//       return res.status(201).send({ User: user });
//     } catch (error) {
//       return res.status(500).send({ error: error.message });
//     }
//   }
// );

router.get("/", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    return res.status(200).send({ User: user });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    return res.status(200).send({ User: user });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

router.patch(
  "/:id",
  body("name").trim().not().isEmpty().withMessage("Name is required"),
  body("password").trim().not().isEmpty().withMessage("Password is required"),
  body("email")
    .isEmail()
    .custom(async (value) => {
      const user = await User.findOne({ email: value });

      if (user) {
        throw new Error("Email is already taken");
      }
      return true;
    }),
  body(" mobile_no")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Mobile No. is required")
    .isNumeric()
    .withMessage("Mobile No. must be a number")
    .isLength({ min: 10, max: 10 })
    .withMessage("Mobile No. be of 10 digit"),
  body("age")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Age is required")
    .isNumeric()
    .withMessage("Age  must be a number")
    .custom((value) => {
      if (value < 1 || value > 100) {
        throw new Error("Age should be between 1 - 100");
      }
      return true;
    }),
  body(" gender").trim().not().isEmpty().withMessage("Gender is required"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      //   console.log({ errors });
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      return res.status(203).send({ User: user });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
);

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.status(204).send({ User: user });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});
router.get("/:id/address", async (req, res) => {
  try {
    let address = await User.findById(req.params.id)
      .populate({ path: "addresses" })
      .lean()
      .exec();
    address = address.addresses;
    return res.status(200).send({ address: address });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

router.post(
  "/:id/address/create",
  body("address_line")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Address line is required"),
  body("city").trim().not().isEmpty().withMessage("City is required"),
  body("district").trim().not().isEmpty().withMessage("District is required"),
  body("state").trim().not().isEmpty().withMessage("State is required"),
  body("country").trim().not().isEmpty().withMessage("Country is required"),
  body("pinCode")
    .notEmpty()
    .withMessage("Pin code is required")
    .isLength({ min: 6, max: 6 })
    .withMessage("Pincode shuold be of 6 digit"),
  async (req, res) => {
    // console.log("q")
    try {
      const errors = validationResult(req);
      //   console.log({ errors });
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }
      const address = await Address.create(req.body);
      const user = await User.findByIdAndUpdate(req.params.id, {
        $push: { addresses: address._id },
      });
      return res.status(200).send({ Address: address, user: user });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
);
router.patch(
  "/address/edit/:idx",
  body("address_line")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Address line is required"),
  body("city").trim().not().isEmpty().withMessage("City is required"),
  body("district").trim().not().isEmpty().withMessage("District is required"),
  body("state").trim().not().isEmpty().withMessage("State is required"),
  body("country").trim().not().isEmpty().withMessage("Country is required"),
  body("pinCode")
    .notEmpty()
    .withMessage("Pin code is required")
    .isLength({ min: 6, max: 6 })
    .withMessage("Pincode shuold be of 6 digit"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      //   console.log({ errors });
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }
      const address = await Address.findByIdAndUpdate(req.params.idx, req.body);
      return res.status(200).send({ address: address });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
);
router.delete(":id/address/delete/:idx", async (req, res) => {
  try {
    const address = await Address.findByIdAndDelete(req.params.idx);
    const user = await User.findByIdAndUpdate(req.params.id, {
      $pull: { addresses: req.params.idx },
    });
    return res.status(200).send({ address: address });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

module.exports = router;
