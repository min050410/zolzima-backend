"""empty message

Revision ID: 59a9497600af
Revises: dce4f435c963
Create Date: 2021-10-19 18:06:31.772697

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '59a9497600af'
down_revision = 'dce4f435c963'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('todo', sa.Column('todo_Userid', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'todo', 'user', ['todo_Userid'], ['id'], ondelete='CASCADE')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'todo', type_='foreignkey')
    op.drop_column('todo', 'todo_Userid')
    # ### end Alembic commands ###