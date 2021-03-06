from flask import Flask, render_template
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

import config

db = SQLAlchemy()
migrate = Migrate()

def create_app():
	app = Flask(__name__)
	app.config.from_envvar('APP_CONFIG_FILE')

	#orm
	db.init_app(app)
	migrate.init_app(app,db)
	from . import models

	#Blueprint
	from .views import main_views, todo_views, auth_views
	app.register_blueprint(main_views.bp)
	app.register_blueprint(todo_views.bp)
	app.register_blueprint(auth_views.bp)

	return app
