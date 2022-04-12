

# Gathering parameters from user:
cutterDiameter = .375
toolNum = 1
spindleSpeed = 3000
cuttercomp = "left"
feedRate = 12
width = 2
length = 2
zStart = .1
zEnd = -.5
plungeRate = 3
startingPos = 1

print(f'M06 T{toolNum}')
print(f'G20 G90')
print(f'M03 S{spindleSpeed}')
print(f'G54')
if cuttercomp == "left":
    print(f'G41 D{cutterDiameter/2}')
else:
    print(f'G42 D{cutterDiameter/2}')
print(f'G43 H{toolNum}')
# Program logic here based on start position point 1,2,3 or 4, in this case it's pos 1 so it's hard coded, but an algorithm will be needed here to define x y cord based on input of width and length
print(f'G00 X0. Y0.')
print(f'G00 Z{zStart}')
print(f'G01 Z{zEnd} F{plungeRate}')
# again more logic will be needed for the following here to decide where the tool moves, since it's in pos one we'll go in a clockwise rotation to complete the rectangle.
print(f'G01 X{width} Y0 F{feedRate}')
print(f'G01 X{width} Y{length*-1} F{feedRate}')
print(f'G01 X0 Y{width*-1} F{feedRate}')
print(f'G01 X0 Y0 F{feedRate}')
print(f'G01 Z{zStart} F{plungeRate}')
