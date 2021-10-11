from flask import Blueprint, render_template, request, jsonify, url_for, session, g
from zolzima import db
from zolzima.models import Subject, Todo, Timer, User

from zolzima.forms import TodoForm

from werkzeug.utils import redirect

def sum(n):
  for i in range(n,1,-1):
    if Timer.query.get(n).user:
      if Timer.query.get(n).user.username == g.user.username: 
        return Timer.query.get(n).time
    else:
      continue
    if(i == 1):
      return 0
 
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
	
#@bp.route('/tst', methods=['GET', 'POST'])
#def tst():
#data = request.get_json()
#data = int(data)
#count = Timer.query.count()
#sum = sum(count)	
#time = Timer(time = data + sum)
#db.session.add(time)
#db.session.commit()
#return jsonify(result = "success", result2 = Timer.query.get(count+1))
    
@bp.route('/study', methods=['GET', 'POST'])
def study(): #g.user 인경우 실행이 필요함.
	data = request.get_json()
	data = int(data)
	count = Timer.query.count()
	Alltime = sum(count)
	if Alltime is None:
		Alltime = 0
	time = Timer(time = data + Alltime, user=g.user)
	db.session.add(time)
	db.session.commit()
	recentTime = Timer.query.get(count+1).time
	return str(recentTime)


@bp.route('/detail/<int:todo_id>/')
def detail(todo_id):
	form = TodoForm()
	todo = Todo.query.get_or_404(todo_id) #이거 하면은 찾을수 없는 경우에 404가 된다!
	return render_template('detail.html', todo = todo, form = form)
@bp.route('/t/')
def t():
	return render_template('t.html')
