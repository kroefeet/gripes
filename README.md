# MERN Prototyping Starter

This is an example start project for [Kickstart Coding](http://kickstartcoding.com/)
MERN MVP projects.

**DO NOT** use this project in production. It exposes an API to MongoDB without
any sort of security. The only purpose of the API is to allow rapid front-end
prototyping without much (or any) backend modifications.

## Usage


### Set-up

1. Get the code. You can either download this repo as a tar.gz or zip file,
then extract, do a git pull and copy over the files into your project, or fork
this project.

2. Set-up your MongoDB database.

    - Either set-up a [MongoDB Atlas](https://cloud.mongodb.com) database
      testing purposes with your team (easiest). A full guide for this is
      included here, in the included
      [`mongodb_atlas_guide.md`](./mongodb_atlas_guide.md)

    - Or install and configure a local DB for testing

3. Create a ".env.local" file, that contains your credentials. If you followed
the [`mongodb_atlas_guide.md`](./mongodb_atlas_guide.md) tutorial, you will
have already done this.

    - This file WILL NOT go into your git repo (because it is in .gitignore).
      If you will be using the supplied run.sh, it should be in the following
      format:

        export MONGODB_URI='mongodb://USERNAME:PASSWORD@something.com:1234/DB_NAME'

    - Where USERNAME and PASSWORD is replaced with an actual username and
    password on the MongoDB. In the case of mLab, you will have to create a
    username and password as a separate step.

4. NPM install backend:

    npm install

5. NPM install frontend:

    cd client
    npm install


### Running

For local development, use the included "run.sh" Bash script:

    bash run.sh

Look inside the script. Can you understand what it is doing?  It's main goal is
just to save you the steps of opening up two terminal windows or tabs. You can,
however, still do that method, it's up to you.


### Heroku

If you want to use your mLabs database on Heroku, you will need to configure it
with Heroku. Use a command like below, except with the same string you did in
the previous steps (`.env.local`):

    heroku config:set MONGODB_URI='mongodb://someUser:...'


To ensure Heroku has the right configuration values set (which should occur
after you have done `heroku create` to make a new Heroku app, and added an
mLabs add-on to allow MonogoDB on Heroku), do a command like the following:


    heroku config


You should see `MONGODB_URI` specified, something like:

    MONGODB_URI  mongodb://someUser:somePassword@something.com:1234/someDatabaseName 

Launching to Heroku is like any other app:


    git push heroku master

# Understanding the code

Once you have it locally running, try the following:

1. Create an article

2. View the articles API using localhost:8080/api/mongodb/blogposts/


# Securing the backend

After the prototype is built, the backend can be incrementally secured by
creating custom routes that do the logic required for your application, and
delete each generic / insecure route. For example, instead of allowing deletion
of ANY documents, it could only allow queries in a certain format to only
delete from a certain collection, relevant to your application. Also, you may
consider using an authentication framework for Express.js, such as Passport.

Once you replace a given insecure route, and make the front-end use the new
route, you can delete the old route.


