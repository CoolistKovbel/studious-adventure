import mongoose, { Document, Schema, Types } from "mongoose";


interface IEmbedding {
  name: string;
  emmbeding: [];
}

export interface EmbeddingDocument extends IEmbedding, Document {}

const EmbeddingSchema: Schema<EmbeddingDocument> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    emmbeding: {
        type: []
    }
  },
  { timestamps: true }
);

let EmbeddingModel: mongoose.Model<EmbeddingDocument>;

try {
  // Try to retrieve an existing model
  EmbeddingModel = mongoose.model<EmbeddingDocument>("Embedding");
} catch (e) {
  // If the model doesn't exist, define it
  EmbeddingModel = mongoose.model<EmbeddingDocument>("Embedding", EmbeddingSchema);
}

export const Embedding = EmbeddingModel;
