from zolzima import db

class Subject(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	subject = db.Column(db.String(200), nullable=False)
	create_date = db.Column(db.DateTime(), nullable=False)

class Todo(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	todo_id = db.Column(db.Integer, db.ForeignKey('subject.id', ondelete='CASCADE'))
	subject = db.relationship('Subject', backref=db.backref('todo_set'))
	content = db.Column(db.Text(), nullable=False)
	create_date = db.Column(db.DateTime(), nullable=False)
 
class Timer(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	timer_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete='CASCADE'))
	time = db.Column(db.Integer, nullable=False)
	user = db.relationship('User', backref=db.backref('user_set'))
	
class User(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	username = db.Column(db.String(150), unique=True, nullable=False)
