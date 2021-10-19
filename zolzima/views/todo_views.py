from datetime import datetime

from zolzima.forms import TodoForm
from flask import Blueprint, url_for, request, render_template, g
from werkzeug.utils import redirect

from zolzima import db
from zolzima.models import Subject, Todo

bp = Blueprint('todo', __name__, url_prefix='/todo')


@bp.route('/create/<int:todo_id>/', methods=('POST','GET'))
def create(todo_id):
#todo_Userid = g.user.id
	form = TodoForm()
	todo = Todo.query.get_or_404(todo_id and g.user.id)
	if form.validate_on_submit():
		content = request.form['content']
		a = Todo(content=content, create_date=datetime.now(), user=g.user) #user=g.user
		todo.subject.todo_set.append(a)
        #todo.user.user_set2.append(a)
		db.session.commit()
		return redirect(url_for('main.detail', todo_id=todo_id, todo_Userid = g.user.id))
	return render_template('detail.html', todo=todo, form=form)
