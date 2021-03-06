"""empty message

Revision ID: 6d997a48b0f8
Revises: 4e3328fd2fb6
Create Date: 2021-10-07 18:53:21.433873

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6d997a48b0f8'
down_revision = '4e3328fd2fb6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('timer', sa.Column('timer_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'timer', 'user', ['timer_id'], ['id'], ondelete='CASCADE')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'timer', type_='foreignkey')
    op.drop_column('timer', 'timer_id')
    # ### end Alembic commands ###
