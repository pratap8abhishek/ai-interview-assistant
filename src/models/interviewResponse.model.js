import mongoose from "mongoose";

const interviewResponseSchema =
  new mongoose.Schema(
    {
      interviewId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Interview",
      },

      question: String,

      answer: String,

      score: Number,

      feedback: String,

      strengths: [String],

      improvements: [String],
    },
    { timestamps: true }
  );

export default mongoose.model(
  "InterviewResponse",
  interviewResponseSchema
);