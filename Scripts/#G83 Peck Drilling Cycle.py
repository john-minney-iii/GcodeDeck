#G83 Peck Drilling Cycle

#User Parameters:
feedrate = float(input('FEEDRATE:'))
spindle = float(input('SPINDLE RPM: '))
toolnum = int(input('TOOL NUMBER: '))
xpos = float(input('X POSITION: '))
ypos = float(input('Y POSITION: '))
zdepth = float(input('DRILL DEPTH (AKA Z MINUS): '))
safetyplane = float(input('SAFETY PLANE (distance above part drill will rapid to: '))
peckdepth = float(input('PECK DEPTH (AMOUNT OF EACH PECK): '))
r = float(input('Position of R Plane (position above part) REF PLANE: '))

print(f'M06 T{toolnum}')
print(f'G00 X{xpos} Y{ypos}')
print(f'M03 S{spindle}')
print(f'G43 H{toolnum} Z{safetyplane}')
print(f'G83 Z{zdepth} Q{peckdepth} R{r} F{feedrate}')
print(f'G00 Z{safetyplane}')
