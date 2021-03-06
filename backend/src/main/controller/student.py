from flask_restless.views import ValidationError

from app import api_manager, app
from src.main.http.cros_headers import add_cors_headers
from src.main.model.student import Student as StudentModel
from src.main.security.authentication import auth_func
from src.main.security.authorization import role_admin, role_first_level, role_second_level


student_api = api_manager.create_api_blueprint(
    StudentModel,
    methods=['GET', 'POST', 'PUT', 'PATCH'],
    validation_exceptions=[ValidationError],
    allow_functions=True,
    preprocessors=dict(
        GET_SINGLE=[auth_func, role_first_level],
        GET_MANY=[auth_func, role_first_level],
        PUT_SINGLE=[auth_func, role_second_level],
        PUT_MANY=[auth_func, role_second_level],
        PATCH_SINGLE=[auth_func, role_admin],
        PATCH_MANY=[auth_func, role_admin]
    )
)

student_api.after_request(add_cors_headers)
app.register_blueprint(student_api)
