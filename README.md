# portfolio

Portfolio web app for my projects

## How to build and deploy heroku

Make final changes and run git commit

First, change webpack config file mode to 'production'

Next, run 'npm run build' to create latest version of the bundle

Test it works on your machine by running 'npm start'

First test by running command - 'heroku local --port 5001' (src - https://devcenter.heroku.com/articles/getting-started-with-nodejs#run-the-app-locally)

Then when that works, push your latest changes via the command - 'git push heroku main'


## How to work on dev

First, change webpack config file mode to 'development'

Next run 'npm run dev'

Then get to work
