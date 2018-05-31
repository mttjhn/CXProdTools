# CX Prod Tools
A Node REST webservice to expose data from the Computronix CXPROD system to small utilities like [Alfred](https://alfredapp.com).

## Installation Steps
This webservice requires Node 9 and an Oracle Instant Client. To install, use NVM to setup Node v9.x and also download the Oracle Instant client for Mac. 

To set up [nvm](https://github.com/creationix/nvm) on the Mac, use Homebrew like so: `brew install nvm`.

Make sure to follow the directions after nvm is installed to ensure that the appriorate lines are in your `~/.bash_profile`.  Finally, use `nvm install 9` to install Node v9.x and then type `nvm use 9` to use that version before continuing.

Oracle Instant client files should be under `~/lib` in order for the webservice to work correctly.

Copy the contents of this repository to a desired folder, navigate to the location of the webservice code and type `npm install` to set up the required dependencies.

Edit the `environmentvars.sh` script to set the appropriate database connection settings, and then run it using `./environmentvars.sh`

Finally, install [pm2](http://pm2.keymetrics.io) using the command `npm install pm2 -g`. 

You can then run `pm2 start index.js --wait-ready` and the service will run.  To ensure it's up and running, check the logs using the command `pm2 logs`.

