## Node Modules Build Step:
# 
# Use node:10 image as initial builder step
# 
FROM node:16 as builder

# 
# Set newly created directory as WORKDIR
# 
WORKDIR /tempdir

# 
# Copy current directory into WORKDIR
# This is mostly for the poackage.json
# NOTE: src directory is ignored within .dockerignore
# see .dockerignore file for all ignores..
# This is done because the src dir is mounted
# into the WORKDIR/src folder directly.
# see also: docker-compose.yml
# 
COPY . .

# 
# Install node modules as described in package.json
# 
RUN yarn install --production


## Main Image Build Step:
# 
# Use node:10 image as base for main app image
# 
FROM node:16

# 
# Copy files from build step's /tempdir folder
# into a new directory for the application
#
COPY --from=builder /tempdir /the-farm

# 
# Set newly created directory as WORKDIR for app
# 
WORKDIR /the-farm

# 
# Launch the server using node
# 
CMD ["node", "./src/server.js"]