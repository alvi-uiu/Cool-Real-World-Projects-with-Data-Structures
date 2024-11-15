#imports the messagebox and Tk classes from the tkinter library.
from tkinter import messagebox , Tk

#imports the pygame library, which is used for making games and handling multimedia tasks like graphics, sound, and events
import pygame 

#imports the sys library, which gives  access to system-specific functions. Here, it will be used to exit the program
import sys

#define the width and height (in pixels) of the game window
window_width=500
window_height=500

#creates the game window using pygame. The set_mode function takes a tuple (width, height) to specify the window's dimensions
window=pygame.display.set_mode((window_width,window_height))



def main() :
    while 1 :
        for event in pygame.event.get():
            # for quit : 
            if event.type==pygame.QUIT:
                pygame.quit()
                sys.exit()
        window.fill(0,0,0)
        pygame.display.flip()
        
        

main()   
