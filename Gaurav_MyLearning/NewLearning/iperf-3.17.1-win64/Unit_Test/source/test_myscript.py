# Unit_Test/test_myscript.py

import unittest
from source.my_script import add, subtract, multiply, divide  # Correct imports

class TestMyScript(unittest.TestCase):

    def test_add(self):
        self.assertEqual(add(2, 3), 5)

    def test_subtract(self):
        self.assertEqual(subtract(5, 3), 2)

    def test_multiply(self):
        self.assertEqual(multiply(2, 3), 6)

    def test_divide(self):
        self.assertEqual(divide(6, 3), 2)

    def test_large_numbers(self):
        self.assertEqual(add(10**12, 10**12), 2 * 10**12)
        self.assertEqual(multiply(10**6, 10**6), 10**12)

    def test_edge_case(self):
        self.assertEqual(divide(10, 0), 'undefined')  # Division by zero test
