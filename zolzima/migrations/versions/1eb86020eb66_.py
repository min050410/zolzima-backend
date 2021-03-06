"""empty message

Revision ID: 1eb86020eb66
Revises: 6d997a48b0f8
Create Date: 2021-10-07 18:56:40.248545

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1eb86020eb66'
down_revision = '6d997a48b0f8'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=150), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('username')
    )
    op.create_table('timer',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('timer_id', sa.Integer(), nullable=True),
    sa.Column('time', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['timer_id'], ['user.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('timer')
    op.drop_table('user')
    # ### end Alembic commands ###
