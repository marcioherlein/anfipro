import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    listingUrl: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    propertyCount: {
      type: String,
      trim: true,
    },
    mainProblem: {
      type: String,
      trim: true,
    },
    occupancy: {
      type: String,
      trim: true,
    },
    revenueRange: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Lead || mongoose.model("Lead", LeadSchema);
