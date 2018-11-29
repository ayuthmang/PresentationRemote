# Android Presentation Remote Server

Apple is make everthing works perfectly on their ecosystem, you can turn your phone into a presentation remote but not my android (so sad). So I decided to make a simple presentation remote using node and socket.io to let my phone into a presentation remote. 

## Prerequisite

- NodeJS (8.12.0 or higher, I'm testing with 8.12.0 version)
- Browser or android presentation remote client application (by the way browser is more flexible than native app)
- You mac must on the same network and can talk to each other

## Permission 

This app works by sending a keyboard keys to our computer so we need allow a permission from seucirty & privacy in system perferences by

1. Open 'System Preferences'.
2. Click 'Security & Privacy'.
3. Open 'Accessibility' tab.
4. Click lock icon from the bottom left corner and type your password to make changes to your system.
5. Find a 'Terminal.app' if you were use terminal as default or 'iTerm2.app' if you use iterm2 as default terimnal.
6. Check to box in front of 'Terminal.app' or 'iTerm.app' or both and close a 'Security & Privacy' window.
7. Run a server again.

## Installation 

1. Open terminal and goto project folder and execute an command `npm install` or `yarn install`.
2. Run the server using a command `npm run serve` or `yarn serve`.
3. Connect the remote to server. (or just open browser to 127.0.0.1:3000).
4. Open keynote and focus a window and press start presentation on your android device.
5. Let the world know your with your perfect presentation keynote.
