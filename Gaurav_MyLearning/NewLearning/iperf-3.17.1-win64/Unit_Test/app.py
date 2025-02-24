# Unit_Test/app.py

import unittest
import importlib
from flask import Flask, render_template, request
from io import StringIO

app = Flask(__name__)

# Dynamically load the test cases
def load_tests():
    try:
        test_module = "Unit_Test.test_myscript"  # Full path to the test module
        mod = importlib.import_module(test_module)
        
        # List of test methods you want to run automatically
        test_methods = [
            'test_add',
            'test_subtract',
            'test_multiply',
            'test_divide',
            'test_large_numbers',
            'test_edge_case'
        ]

        # Create a test suite
        suite = unittest.TestSuite()

        # Add test cases to the suite
        for method_name in test_methods:
            test_class = getattr(mod, "TestMyScript")
            suite.addTest(test_class(method_name))

        return suite

    except Exception as e:
        print(f"Error loading test cases: {e}")
        return None

@app.route('/')
def index():
    try:
        # Render the main page with a list of test cases
        test_case_list = [
            'test_add', 'test_subtract', 'test_multiply', 'test_divide', 
            'test_large_numbers', 'test_edge_case'
        ]
        return render_template('index.html', test_cases=test_case_list)
    except Exception as e:
        return f"Error loading page: {str(e)}", 500

@app.route('/run-test', methods=['POST'])
def run_test():
    try:
        # Get the selected test case
        selected_test_case = request.form.get('test_case')

        # Dynamically load the tests
        suite = load_tests()

        if suite is None:
            return "Error loading tests", 500

        # Create a test runner and capture output
        runner = unittest.TextTestRunner(stream=StringIO())
        result = runner.run(suite)

        output = result.stream.getvalue()

        return render_template('report.html', output=output)
    except Exception as e:
        print(f"Error running test: {e}")
        return f"Internal Server Error: {str(e)}", 500

if __name__ == '__main__':
    app.run(debug=True)
