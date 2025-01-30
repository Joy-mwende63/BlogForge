from flask import Blueprint, request, jsonify
from models import Comment, db

comment_routes = Blueprint('comment_routes', __name__)

# Create a new comment
@comment_routes.route('/comments', methods=['POST'])
def create_comment():
    data = request.get_json()
    content = data.get('content')
    post_id = data.get('post_id')
    user_id = data.get('user_id')
    
    if not content or not post_id or not user_id:
        return jsonify({"message": "Missing required fields"}), 400
    
    comment = Comment(content=content, post_id=post_id, user_id=user_id)
    db.session.add(comment)
    db.session.commit()
    
    return jsonify({"message": "Comment created successfully", "comment": comment.to_dict()}), 201

# Get all comments for a specific post
@comment_routes.route('/comments/<int:post_id>', methods=['GET'])
def get_comments(post_id):
    comments = Comment.query.filter_by(post_id=post_id).all()
    return jsonify({"comments": [comment.to_dict() for comment in comments]}), 200

# Update a comment
@comment_routes.route('/comments/<int:comment_id>', methods=['PUT'])
def update_comment(comment_id):
    data = request.get_json()
    content = data.get('content')
    
    comment = Comment.query.get_or_404(comment_id)
    comment.content = content
    
    db.session.commit()
    
    return jsonify({"message": "Comment updated", "comment": comment.to_dict()}), 200

# Delete a comment
@comment_routes.route('/comments/<int:comment_id>', methods=['DELETE'])
def delete_comment(comment_id):
    comment = Comment.query.get_or_404(comment_id)
    db.session.delete(comment)
    db.session.commit()
    
    return jsonify({"message": "Comment deleted successfully"}), 200
