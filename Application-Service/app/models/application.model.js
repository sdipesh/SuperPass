const mongoose = require('mongoose');

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        application_number: { type:String, required:false },
        customer_name:  { type:String, required:true },
        address:{
        unit:  { type:String, required:false },
        street:  { type:String, required:false },
        city:  { type:String, required:false },
        province:  { type:String, required:false },
        country:  { type:String, required:false },
        postalcode:  { type:String, required:false },
        },
        status:  { type:String, required:true },
        adjudicator:  { type:String, required:true }
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Application = mongoose.model("application", schema);
    return Application;
  };