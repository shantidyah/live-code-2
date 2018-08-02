const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const ArticleSchema = new Schema ({
    title : String,
    content : String,
    category : String,
    author : { type: Schema.Types.ObjectId, ref: 'User' }
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
})

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article