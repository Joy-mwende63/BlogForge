from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, Post, Category

post_bp = Blueprint('posts', __name__)

@post_bp.route('/', methods=['GET'])
def get_posts():
    posts = Post.query.all()
    return jsonify([
        {
            'id': post.id,
            'title': post.title,
            'content': post.content,
            'category': post.category.name if post.category else None,
            'author_id': post.author_id
        }
        for post in posts
    ]), 200

@post_bp.route('/', methods=['POST'])
@jwt_required()
def create_post():
    data = request.json
    title = data.get('title')
    content = data.get('content')
    category_id = data.get('category_id')

    user_id = get_jwt_identity()

    category = Category.query.get(category_id)
    if not category:
        return jsonify({'message': 'Invalid category'}), 400

    post = Post(title=title, content=content, category_id=category_id, author_id=user_id)
    db.session.add(post)
    db.session.commit()
    return jsonify({'message': 'Post created successfully', 'post_id': post.id}), 201

@post_bp.route('/<int:post_id>', methods=['PUT'])
@jwt_required()
def update_post(post_id):
    data = request.json
    post = Post.query.get(post_id)
    if not post:
        return jsonify({'message': 'Post not found'}), 404

    user_id = get_jwt_identity()
    if post.author_id != user_id:
        return jsonify({'message': 'Unauthorized'}), 403

    post.title = data.get('title', post.title)
    post.content = data.get('content', post.content)
    db.session.commit()
    return jsonify({'message': 'Post updated successfully'}), 200

@post_bp.route('/<int:post_id>', methods=['DELETE'])
@jwt_required()
def delete_post(post_id):
    post = Post.query.get(post_id)
    if not post:
        return jsonify({'message': 'Post not found'}), 404

    user_id = get_jwt_identity()
    if post.author_id != user_id:
        return jsonify({'message': 'Unauthorized'}), 403

    db.session.delete(post)
    db.session.commit()
    return jsonify({'message': 'Post deleted successfully'}), 200
