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

columns=25
rows=25
box_width=window_width//columns
box_height=window_height//rows


grid=[]


class Box:
    def __init__(self,i,j):
        self.x=i
        self.y=j
        
    def draw(self,win,colour):
        pygame.draw.rect(win,colour,(self.x*box_width,self.y*box_height, box_width-2,box_height-2))
        

# create Grid : 

for i in range(columns):
    arr=[]
    for j in range(rows):
        arr.append(Box(i,j))
    grid.append(arr)
    



def main() :
    while 1 :
        for event in pygame.event.get(): #r etrieves all the events happening in the game window
            # for quit : 
            if event.type==pygame.QUIT: # if the event type is QUIT ( if the user clicks the close button on the window )
                pygame.quit() # Closes the game window and cleans up all resources used by pygame
                sys.exit() # Exits the program entirely.
        window.fill((0,0,0)) # This fills the game window with a solid color
        
        for i in range(columns):
            for j in range(rows):
                box=grid[i][j]
                box.draw(window,(50,50,50))
    
        
        pygame.display.flip() # updates the game window with the new changes
        
        

main()   
