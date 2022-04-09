from json import tool
from re import X
from tkinter import Y
from tracemalloc import start


cutterDiameter = .375
toolNum = 1
spindleSpeed = 3000
feedRate = 12
width = 2
length = 2
zStart = .1
zEnd = -.005
plungeRate = 3


class G41_LinearMove:
    def __init__(self, toolDiameter, toolNum, spindleSpeed, feedRate, plungeRate, xStart, xEnd, yStart, yEnd, zStart, zEnd, xDir, yDir, zDir, safeStart):
        self.toolDiameter = toolDiameter
        self.toolNum = toolNum
        self.spindleSpeed = spindleSpeed
        self.feedRate = feedRate
        self.plungeRate = plungeRate
        self.xStart = xStart
        self.xEnd = xEnd
        self.yStart = yStart
        self.yEnd = yEnd
        self.zStart = zStart
        self.zEnd = zEnd
        self.xDir = xDir
        self.yDir = yDir
        self.zDir = zDir
        self.safeStart = safeStart
        self.safeStart = "G54 G90 G20 G17"

    def determineXdir(self):
        if self.xEnd < self.xStart:
            self.xDir = "neg"
        else:
            self.xDir = "pos"

        if self.xDir == "neg":
            self.xEnd = self.xEnd - (self.toolDiameter/2)
        else:
            self.xEnd = self.xEnd + (self.toolDiameter/2)

    def determineYdir(self):
        if self.yEnd < self.yStart:
            self.yDir = "neg"
        else:
            self.yDir = "pos"

        if self.yDir == "neg":
            self.yEnd = self.yEnd - (self.toolDiameter / 2)
        else:
            self.yEnd = self.yEnd + (self.toolDiameter / 2)

    def generateGCode(self):
        print(f'M06 T{self.toolNum}')  # change to the specified tool
        # Specify heigh offest, and apply to tool path
        print(f'G43 H{self.toolnum}')
        print(self.safeStart)  # Safestart GCODE ((Prevent Crashes!!!))
        # Start the spindle clockwise at the specified RPM
        print(f'M03 S{self.spindleSpeed}')
        if self.zStart != self.zEnd:
            # If the z Starting position does not equal the z ending position, rapid to the xyz starting coordinate, then feed in the z direction at the specified plunge rate
            print(f'G00 X{self.xStart} Y{self.yStart} Z{self.zStart}')
            print(f'G01 Z{self.zEnd} F{self.plungeRate}')
        # Do the linear move
        print(f'G01 X{self.xStart} Y{self.yStart} F{self.feedRate}')


lineTest = G41_LinearMove(.375, 1, 3000, 12, 3, 0., 2.0, 0.0, 0.0, .1, -.5)
lineTest.determineXDir()
lineTest.determineYdir()
lineTest.generateGCode()
