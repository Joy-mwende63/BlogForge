from flask import Blueprint, request, jsonify
from models import Category, db

category_routes = Blueprint('category_routes', __name__)

# Create a new category
@category_routes.route('/categories', methods=['POST'])
def create_category():
    data = request.get_json()
    name = data.get('name')
    
    if not name:
        return jsonify({"message": "Category name is required"}), 400
    
    category = Category(name=name)
    db.session.add(category)
    db.session.commit()
    
    return jsonify({"message": "Category created successfully", "category": category.to_dict()}), 201

# Get all categories
@category_routes.route('/categories', methods=['GET'])
def get_categories():
    categories = Category.query.all()
    return jsonify({"categories": [category.to_dict() for category in categories]}), 200

# Update a category
@category_routes.route('/categories/<int:category_id>', methods=['PUT'])
def update_category(category_id):
    data = request.get_json()
    name = data.get('name')
    
    category = Category.query.get_or_404(category_id)
    category.name = name
    
    db.session.commit()
    
    return jsonify({"message": "Category updated", "category": category.to_dict()}), 200

# Delete a category
@category_routes.route('/categories/<int:category_id>', methods=['DELETE'])
def delete_category(category_id):
    category = Category.query.get_or_404(category_id)
    db.session.delete(category)
    db.session.commit()
    
    return jsonify({"message": "Category deleted successfully"}), 200
