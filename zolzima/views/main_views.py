from flask import Blueprint, render_template, request, jsonify

from zolzima.models import Subject

bp = Blueprint('main', __name__, url_prefix='/')

@bp.route('/')
def timer():
	return render_template("timer.html")

@bp.route('/journal', methods=['GET', 'POST'])
def journal():
  clicked = None
  todo_list = Subject.query.order_by(Subject.create_date.desc())
  if request.method == "POST":
    clicked = request.json['data']
    print(clicked)
  return render_template('journal.html', todo_list = todo_list, clicked=clicked)

@bp.route('/rank')
def rank():
	return render_template('test.html')

@bp.route('/test', methods=['GET', 'POST'])
def test():
    data = request.get_json()
    print(data)

    return jsonify(result = "success", result2= data)
