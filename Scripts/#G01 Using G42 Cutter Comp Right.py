#G01 Using G42 Cutter Comp Right

cutterDia = .375
feedRate = 60.0
reqXstart = float(input('X Position Starting Point: '))
reqXend = float(input('X Position Ending Point: '))
reqYstart = float(input('Y Position Starting Point: '))
reqYend = float(input('Y Position Ending Point: '))

print('G20')
print(f'G42 D{cutterDia/2}')
print(f'G01 X{reqXstart} Y{reqYstart} F{feedRate}')
print(f'G01 X{reqXend} Y{reqYend} F{feedRate}')