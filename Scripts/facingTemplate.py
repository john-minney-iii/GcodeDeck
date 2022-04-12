# Gathering parameters from user:
cutterDiameter = .375
toolNum = 1
spindleSpeed = 3000
feedRate = 12
width = 2
length = 2
zStart = .1
zEnd = -.005
plungeRate = 3
stepover = .250

# NOT USER PARAMETERS!!!!
x = -width
y = 0

print(f'M06 T{toolNum}')
print(f'G20 G90')
print(f'M03 S{spindleSpeed}')
print(f'G54')
print(f'G43 H{toolNum}')
# Starting position of the facing operation
print(f'G00 X{width + cutterDiameter} Y0 Z{zStart}')
# Z Depth of the facing operation @ programmed plungerate
while x:
    print(f'G01 Z{zEnd} F{plungeRate}')
    print(f'G01 X{0 - cutterDiameter} F{feedRate}')
    print(f'G01 Z{zStart} F{plungeRate}')
    if y < width*-1:
        break
    print(f'G00 X{width + cutterDiameter} Y{y-stepover}')
    y = y-stepover
