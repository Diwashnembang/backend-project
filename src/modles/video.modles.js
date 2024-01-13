import { Schema, model } from "mongoose";
import mongooseAggrgatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videofile: {
      type: String, //cloudnary url
      required: true,
    },
    thumbnail: {
      type: String, //cloudnary url
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: boolean,
      default: true,
    },
    title: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.type.ObjectId,
      ref: "User",
    },
    duration: {
      type: number,
      required: true,
    },
  },
  { timeframe: true }
);
videoSchema.plugin(mongooseAggrgatePaginate);
export const Video = model("Video", videoSchems);
