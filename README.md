# Testing Your React Components with Jest
Rachel Ralston  
rachel@rachelralston.com  ||  [twitter](http://www.twitter.com/rachelralston)  ||  [linkedIn](http://www.linkedin.com/in/rachelralston)

- [Slides](https://docs.google.com/presentation/d/1yCGndq7xgbBD-BgfhRB8y0a5-kw1SNnM-TCI0NQkxYY/edit?usp=sharing)
- [jest docs](https://facebook.github.io/jest/)
- [enzyme docs](https://github.com/airbnb/enzyme)
- [react test utils](https://reactjs.org/docs/test-renderer.html)

## Get Up and Running
1. Clone this repo. Replace REPO_URL with the correct repo url.
    ```Bash
    $ git clone REPO_URL react-testing-intro && cd react-testing-intro
    ```
1. Install dependancies
    ```bash
    $ npm install
    ```
1. To see the application running, start it:
    ```bash
    $ npm start
    ```
1. To run the tests in watch mode:
    ```bash
    $ npm test
    ```
1. To run the tests with a coverage report:
    ```bash
    $ npm test -- --coverage
    ```

## Steps to set up from scratch
Read more in the [create-react-app readme](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)
- install a new project with `create-react-app`
    ```Bash
    $ create-react-app weird-new-project
    $ cd weird-new-project
    ```

- `create-react-app` comes with jest installed, but let's also add enzyme.
    ```bash
    $ npm install --save enzyme enzyme-adapter-react-16 react-test-renderer
    ```
- add a enzyme set up file at `src/setupTests.js`
    ```js
    import { configure } from 'enzyme';
    import Adapter from 'enzyme-adapter-react-16';

    configure({ adapter: new Adapter() });
    ```

Now you're able to write tests using both jest and enzyme.
