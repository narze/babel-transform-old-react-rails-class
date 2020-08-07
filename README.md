# babel-transform-old-react-rails-class

A babel plugin which transforms old ES5 React class component to be used with modern Javascript

It simply transform a sad class without React import & class export:

```jsx
class LegacyClassComponent extends React.Component {
  ...
}
```

to

```jsx
import React from 'react'; // Here

class LegacyClassComponent extends React.Component {
  ...
}

export default LegacyClassComponent; // And here
```

## See it in action:

```shell
yarn
yarn start
```
