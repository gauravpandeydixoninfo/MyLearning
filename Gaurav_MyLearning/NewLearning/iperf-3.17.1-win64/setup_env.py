import os
import subprocess
import sys

# Step 1: Create the virtual environment
def create_virtual_env(env_name="venv"):
    if not os.path.exists(env_name):
        print(f"Creating virtual environment: {env_name}")
        subprocess.check_call([sys.executable, "-m", "venv", env_name])
    else:
        print(f"Virtual environment '{env_name}' already exists.")

# Step 2: Get the path to the Python executable in the virtual environment
def get_venv_python(env_name="venv"):
    if os.name == "nt":  # Windows
        return os.path.join(env_name, "Scripts", "python.exe")
    else:  # macOS/Linux
        return os.path.join(env_name, "bin", "python")

# Step 3: Run a command inside the virtual environment
def run_in_virtual_env(venv_python, command):
    print(f"Running command in virtual environment: {command}")
    subprocess.check_call([venv_python] + command)

# Main function
def main():
    env_name = "venv"  # Virtual environment folder name
    requirements_file = "requirements.txt"  # File for dependencies

    # Step 1: Create virtual environment
    create_virtual_env(env_name)

    # Step 2: Get virtual environment's Python executable
    venv_python = get_venv_python(env_name)

    # Step 3: Upgrade pip inside the virtual environment
    run_in_virtual_env(venv_python, ["-m", "pip", "install", "--upgrade", "pip"])

    # Step 4: Install dependencies if requirements.txt exists
    if os.path.exists(requirements_file):
        run_in_virtual_env(venv_python, ["-m", "pip", "install", "-r", requirements_file])
    else:
        print("No requirements.txt found. Skipping dependency installation.")

    print("\nVirtual environment setup and activation complete!")
    print("You can now use the virtual environment's Python executable to run scripts.")
    print(f"Example: {venv_python} your_script.py")

if __name__ == "__main__":
    main()
