# ⚗️ Vue Lab

Component Driven Development (CDD) for Vue.js!

## Installation

It is reccomended that Vue Lab (hereafter known as "Lab") live in your project as a development dependency.

```
npm install --dev vue-lab
```

This way your team or contributors can easily get started with visual development and documentation. Everyone gets to be on the same page!

Once Lab is installed, be sure to add these scripts to your `package.json`:

```json
{
  "scripts": {
    "lab:start": "lab -o",
    "lab:build": "lab build"
  }
}
```

We will cover what these do in the next section.

## Usage

Working with Lab is incredibly simple.

```
npm run lab:start
```

With this command, your browser will launch in [localhost:8081](localhost:8081) (or the next available port) where you will have an environment to view your "Experiments."

The CLI will sniff through the `components/` directory of your Vue.js project for `*.experiment.vue` files.

```
components/
  MyButton.vue
  MyButton.experiment.vue
```

Alternatively, you can create a `lab/` directory at the root of your project.

```
components/
  MyButton.vue
lab/
  MyButton.vue
```

Note that `.experiment.` is no longer required under `lab/`. But you can still use the naming convention there if you'd like.

```
lab/
  MyButton.experiment.vue
```

## Experiments

What does an "Experiment" look like? Why, just like any other Single File Vue Component!

For example, `MyButton.experiment.vue` will look like this:

```html
<template>
  <my-button :theme="theme">My Label</my-button>
</template>

<script>
  import MyButton from "./MyButton";

  export default {
    components: {
      MyButton
    },
    data() {
      return {
        theme: "primary"
      };
    }
  };
</script>

<style scoped>
  /* ... */
</style>
```

Ther are no new fancy apis to learn. Everything you new about Vue.js applies here.

## Deployment

When you're ready to share your components with the rest of the team, just build a static version of the Lab with our earlier script.

```
npm run lab:build
```

It is highly recommended that you leave this command as part of some build process when deploying. Given this, you will definitely want to make sure the Lab is build artifacts are ignored in `.gitignore`.

```
.lab/
```

## FAQ

### _What is "Component Driven Development?"_

Think of CDD as the visual equivalent to Test Driven Development.

This is a method of front-end development where developers focus on designing and building components in an isolated environment. This ensures that components are truly reusable, as you will easily decouple from full pages and api calls. Additionally, this is a great way to keep a living, visual documentation for your product's components.

### _How does this help my team?_

Developing components in a full-application context is very difficult. You may have to deal with the usual pains of logging in, making sure apis are mocked, state is maintained, etc. With Vue Lab, you can develop components without side effects and keep living documentation for free!

### _Why not use Storybook?_

[Storybook](https://storybook.js.org/) is great! If you are already using it, keep on doing so. That is, unless you really want take time from development for a big overhall.

That said, if you're new to CDD or looking for a solution for your Vue.js project, this is the tool for you! Vue Lab is built specficially for Vue.js projects, taking advantage of existing apis rather creating new ones to accomodate multiple frameworks (such is the case with Storybook).

## CLI

`start` spins up the Lab environment. Running `lab` alone is an alias for this.

`build` generates a static build of the Lab under the `.lab/` directory.

`tree` visualizes the layout of your experiments.

`-W --write` quickly write a config option to `lab.config.js`.

`-p --port` the port in which the Lab will open on `localhost`.

`-m --match` a glob that looks for the expriement files. `components/**/*.experiment.vue` by default.

`-o --open` launches the Lab in the browser.

`--to` when used with `-o` it will open up the path of the specified experiment (e.g.`-o --to MyButton`).

## API

`start(options)`

`build(options)`

`tree(glob)`

## Experiments

```
export default {
  lab() {
    return {

    }
  }
}
```

## Plugins
