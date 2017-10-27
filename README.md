## This is not an official Glimmer.js repo, it's the work of [jkarsrud](https://github.com/jkarsrud)

# glimmer-router

`glimmer-router` is a declarative router for Glimmer.js, heavily inspired by `react-router`. The philosophy is explained so well in [React Router's documentation](https://reacttraining.com/react-router/core/guides/philosophy) that I don't see why I should need to re-write everything here. If you're interested, head on over there!

## How it works

By using the `<g-route>` component, we can declare what we want to render when the route matches:

```hbs
<div class="application">
  <h1>I will always render</h1>
  <R @path="/subroute">
    <p>I will render when the path is "/subroute"</p>
  </Route>
</div>
```

In addition to this, the `<Route>` component yields a `Match` object:

```ts
interface Match {
  path: string,
  url: string,
  params: any,
  isExact: boolean
}
```

This allows you to pass information about the rendered route into sub content or child components:

```handlebars
<Route @path="/user/:user_id" as |match|>
  <user-info @userId={{match.params.user_id}} />
<Route>
```

The benefit of having a component like `<g-route>` that can render content based on the URL, is that you can render content in different locations based on the same URL. This comes in handy when you want to render some route-specific content in ie. a sidebar: 

```hbs
<div class="container">
  <nav class="sidebar">
    <ul>
      <li>
        <link-to @path="/">Home</link-to>
      </li>
      <li>
        <link-to @path="/hello">Hello</link-to>
      </li>
    </ul>

    <Route @path="/hello" as |match|>
      {{match.url}} also render content in the sidebar!
    </Route>
  </nav>

  <section class="content">
    <Route @path="/hello" as |match|>
      <h1>Hello!</h1>
      <div>I am the content of the route matching '{{match.url}}'</div>
    </Route>
  </section>
</div>
```

### Things to be aware of

Because Glimmer components require a root element to work right now, every `<g-route>` component will render a wrapping `div` around its content.

# Contributing

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Yarn](https://yarnpkg.com/en/)
* [Ember CLI](https://ember-cli.com/)

## Installation

* `git clone <repository-url>` this repository
* `cd glimmer-router`
* `yarn`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [glimmerjs](http://github.com/tildeio/glimmer/)
* [ember-cli](https://ember-cli.com/)
