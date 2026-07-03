import mongoose from " mongoose";

const interViewSchema = new mongoose.Schema(
    {
        candidateName: {
            type: String,
            required: true,
        },
        technology: {
            type: String,
            required : true,
        },
        experience:{
            type: Number,
            required : true,
        },
        status:{
            type: String,
            enum: ["IN_PROGRESS","COMPLETE"],
            default: "IN_PROGRESS",
        },
    },
    {timestamps: true}
);

export default mongoose.model(
    "Interview",
    interViewSchema
);