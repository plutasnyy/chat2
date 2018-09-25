from distutils.core import setup

setup(
    name='Chat',
    version='0.1.0',
    author='Kamil Pluciński',
    author_email='kamil.plucinski97@gmail.com',
    description='Chat app',
    install_requires=[
        "Django",
        "django-rest-knox",
        "django-webpack-loader",
        "djangorestframework",
        "markdown",
        "django-filter",
        "redis",
        "channels",
        "webpack_loader",
    ],
)
