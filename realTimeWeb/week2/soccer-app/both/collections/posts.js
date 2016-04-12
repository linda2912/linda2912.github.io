Posts = new Mongo.Collection("posts");
Posts.attachSchema(new SimpleSchema({
  place: {
    type: String,
    label: "Uit of thuis",
    allowedValues: ['Uit', 'Thuis'],
    	autoform: {
    		options: [
    		{label: "Uit", value: "Uit"},
    		{label: "Thuis", value: "Thuis"}]
    	}
  },
  against: {
    type: String,
    label: "Tegenstander"
  },
  date: {
    type: Date,
    label: "Datum"
  }
}));