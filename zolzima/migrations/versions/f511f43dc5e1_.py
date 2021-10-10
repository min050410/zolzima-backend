"""empty message

Revision ID: f511f43dc5e1
Revises: 441b4e84739c
Create Date: 2021-10-11 02:01:15.298120

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f511f43dc5e1'
down_revision = '441b4e84739c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('key', sa.String(length=150), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user', 'key')
    # ### end Alembic commands ###
