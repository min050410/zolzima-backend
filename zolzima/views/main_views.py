from flask import Blueprint, render_template

bp = Blueprint('main', __name__, url_prefix='/')

@bp.route('/')
def timer():
	return render_template("timer.html")

@bp.route('/journal')
def journal():
	return render_template('journal.html')

@bp.route('/rank')
def rank():
	return render_template('rank.html')

