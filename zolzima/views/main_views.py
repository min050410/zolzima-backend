from flask import Blueprint, render_template, request, jsonify, url_for

from zolzima.models import Subject, Todo

from zolzima.forms import TodoForm

from werkzeug.utils import redirect

bp = Blueprint('main', __name__, url_prefix='/')

@bp.route('/')
def timer():
	return render_template("timer.html")

@bp.route('/journal', methods=['GET', 'POST'])
def journal():
  #clicked = None
  todo_list = Subject.query.order_by(Subject.create_date.desc())
  #if request.method == "POST":
  #  clicked = request.json['data']
  #  print(clicked)
  return render_template('journal.html', todo_list = todo_list)

@bp.route('/rank')
def rank():
	return render_template('rank.html')

@bp.route('/test')
def test():
	return render_template('test.html')
	
@bp.route('/tst', methods=['GET', 'POST'])
def tst():
  data = request.get_json()
  print(data)
  return jsonify(result = "success", result2 =data)
    
@bp.route('/study', methods=['GET', 'POST'])
def study():
	data = request.get_json()
	print(data)
	return jsonify(result = "success", re2 = data)

@bp.route('/detail/<int:todo_id>/')
def detail(todo_id):
	form = TodoForm()
	todo = Todo.query.get_or_404(todo_id) #이거 하면은 찾을수 없는 경우에 404가 된다!
	return render_template('detail.html', todo = todo, form = form)
@bp.route('/t/')
def t():
	return render_template('t.html')
