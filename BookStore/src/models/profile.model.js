import { Schema, model } from 'mongoose';

const profileSchema = new Schema(
  {
    userID: {
      type: String
    },
    addresses: [{
    
      name: {
        type: String,
        require : true
      },
      phoneNumber: {
        type: String,
        require : true
      },
      addressType: {
        type: String,
      },
      fullAddress: {
        type: String,
      },
      city: {
        type: String,
      },
      landmark: {
        type: String
      },
      state: {
        type: String,
      },
      pinCode: {
        type: String
      }
    }]
  },
  {
    timestamps: true
  }
);

export default model('profile', profileSchema);