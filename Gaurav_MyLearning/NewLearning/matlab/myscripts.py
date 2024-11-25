# Import necessary modules
import matplotlib.pyplot as plt

# Data for plotting
x = [1, 2, 3, 4, 5]
y = [10, 20, 25, 30, 35]

# Create a plot
plt.figure(figsize=(8, 5))
plt.plot(x, y, marker='o', color='blue', linestyle='--', label="Sample Line")

# Add labels and title
plt.title("Simple Line Plot Example", fontsize=16)
plt.xlabel("X-axis Label", fontsize=12)
plt.ylabel("Y-axis Label", fontsize=12)
plt.legend()

# Show grid
plt.grid(True)

# Save the plot as an image (optional)
plt.savefig("line_plot.png")

# Display the plot
plt.show()
