# Depop Shop Page



This app can be found running live at https://depop-shop-page.herokuapp.com/

Code Coverage for our application can be found at: https://app.codecov.io/gh/aosborne17/depop-shop-page

## Setup

### Setting up repo with docker

- once the repo has been cloned

```
docker-compose -f docker-compose-dev.yml up
```

Pushing or making a pull request to master branch will trigger the pipeline, running the tests and if successful deploying live

### Technologies Used

- React
- Typescript
- Redux
- Jest
- Docker