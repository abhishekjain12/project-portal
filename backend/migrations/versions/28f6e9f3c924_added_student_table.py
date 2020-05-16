"""Added student table

Revision ID: 28f6e9f3c924
Revises: 224e95c9a226
Create Date: 2020-05-16 10:51:46.567848

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '28f6e9f3c924'
down_revision = '224e95c9a226'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('student', sa.Column('project', sa.Integer(), nullable=False))
    op.create_foreign_key(None, 'student', 'project', ['project'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'student', type_='foreignkey')
    op.drop_column('student', 'project')
    # ### end Alembic commands ###