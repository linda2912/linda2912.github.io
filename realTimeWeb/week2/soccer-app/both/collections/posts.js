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
    datetime: {
        type: String,
        label: "Datum/ tijd",
        autoform: {
            afFieldInput: {
                type: "datetime-local"
            }
        }
    }
}));