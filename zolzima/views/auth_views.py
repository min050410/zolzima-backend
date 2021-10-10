from flask import Blueprint, url_for, render_template, flash, request
from werkzeug.security import generate_password_hash
from werkzeug.utils import redirect

from zolzima import db
from zolzima.forms import UserCreateForm
from zolzima.models import User

bp = Blueprint('auth', __name__, url_prefix='/auth')


@bp.route('/signup/', methods=('GET', 'POST'))
def signup():
    form = UserCreateForm()
    if request.method == 'POST' and form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if not user:
            user = User(username=form.username.data,
                        password=generate_password_hash(form.password1.data)
                        )
            db.session.add(user)
            db.session.commit()
            return redirect(url_for('main.timer'))
        else:
            flash('이미 사용중인 계정입니다')
    return render_template('signup.html', form=form)
