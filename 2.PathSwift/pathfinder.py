from tkinter import messagebox , Tk

import pygame 
import sys

window_width=500
window_height=500

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
