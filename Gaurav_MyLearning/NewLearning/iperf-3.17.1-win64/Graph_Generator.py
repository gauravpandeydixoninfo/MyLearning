import xlwings as xw

# Data setup
x_axis = [50, 80, 120, 200, 300, 400, 500, 700, 800, 1000]
zyxel_bitrate = [0, 6.5, 23, 22, 29, 53, 40, 57, 43, 45]
dxb_bitrate = [0, 5.4, 13, 32, 39, 42, 42, 51, 48, 51]

# Start Excel and create a new workbook
app = xw.App(visible=True)
wb = app.books.add()
ws = wb.sheets[0]

# Insert data into Excel
ws.range("A1").value = "Index"
ws.range("B1").value = "Zyxel-2.4_Bitrate"
ws.range("C1").value = "DXB-2.4_Bitrate"
ws.range("A2").options(transpose=True).value = list(range(1, len(x_axis) + 1))  # Just 1, 2, ..., 10 as index
ws.range("B2").options(transpose=True).value = zyxel_bitrate
ws.range("C2").options(transpose=True).value = dxb_bitrate

# Create a chart
chart = ws.charts.add(left=ws.range("E2").left, top=ws.range("E2").top)
chart.chart_type = "line_markers"  # Line chart with markers

# Set data for the chart (without x-axis values)
chart.set_source_data(ws.range("A1:C11"))  # A1:C11 covers the header and data

# Apply custom x-axis labels from x_axis data
chart.api[1].Axes(1).CategoryNames = x_axis  # Sets the custom x-axis values

# Set title and axes labels
chart.api[1].HasTitle = True
chart.api[1].ChartTitle.Text = "Bitrate Comparison"
chart.api[1].Axes(1).HasTitle = True
chart.api[1].Axes(1).AxisTitle.Text = "X Axis (Frequency)"
chart.api[1].Axes(2).HasTitle = True
chart.api[1].Axes(2).AxisTitle.Text = "Bitrate (Mbps)"

# Apply "Layout 2" to make x-axis and y-axis visible
chart.api[1].ApplyLayout(2)

# Save the workbook
wb.save("line_chart_example_with_custom_x_axis.xlsx")

# Optional: Close the workbook and quit the app (uncomment to use)
wb.close()
app.quit()
