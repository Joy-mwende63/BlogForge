from flask import Blueprint, request, jsonify
from models import Tag, db

tag_routes = Blueprint('tag_routes', __name__)

# Create a new tag
@tag_routes.route('/tags', methods=['POST'])
def create_tag():
    data = request.get_json()
    name = data.get('name')
    
    if not name:
        return jsonify({"message": "Tag name is required"}), 400
    
    tag = Tag(name=name)
    db.session.add(tag)
    db.session.commit()
    
    return jsonify({"message": "Tag created successfully", "tag": tag.to_dict()}), 201

# Get all tags
@tag_routes.route('/tags', methods=['GET'])
def get_tags():
    tags = Tag.query.all()
    return jsonify({"tags": [tag.to_dict() for tag in tags]}), 200

# Update a tag
@tag_routes.route('/tags/<int:tag_id>', methods=['PUT'])
def update_tag(tag_id):
    data = request.get_json()
    name = data.get('name')
    
    tag = Tag.query.get_or_404(tag_id)
    tag.name = name
    
    db.session.commit()
    
    return jsonify({"message": "Tag updated", "tag": tag.to_dict()}), 200

# Delete a tag
@tag_routes.route('/tags/<int:tag_id>', methods=['DELETE'])
def delete_tag(tag_id):
    tag = Tag.query.get_or_404(tag_id)
    db.session.delete(tag)
    db.session.commit()
    
    return jsonify({"message": "Tag deleted successfully"}), 200
