var ClassesSchema = mongoose.Schema({
    name: String,
    number: Number,
    path: String
});

var Classes = restful.model('classes', ClassesSchema);
Classes.methods(['get', 'put', 'post', 'delete']);
Classes.register(app, '/api/classes')