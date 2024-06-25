# tests/test_python_package1.py

from python_package1.module import hello

def test_hello():
    assert hello() == "Hello, world!"
