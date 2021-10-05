# Multi-package context

An attempt to create a context that can be included across packages in support of a plugin-style architecture.

This is a monorepo using Lerna and NPM workspaces. All of the packages are Typescript and are built with Rollup. To set up and start the server, run:

```
npm run bootstrap
npm run build
npm run start
```

Or just use the quickstart command, which does all of those things in that order.

```
npm run quickstart
```

# Background

There are four packages here:

- `app` - A Nextjs application that displays the components from the other packages. Not much to see here.
- `context-proj` - A project that contains both the context provider (intended to be used in all other applications) as well as an `InternalConsumer` component. The `InternalConsumer` component is identical to the `context-consumer1/2` components, except it just resides in the same project as the context. The context just consists of a string variable and a function (`someString` and `someFunction`).
- `context-consumer1` - A project that exports the `MyConsumer1` component, which consumes the context from `context-proj` and displays its values.
- `context-consumer2` - Same as `context-consumer1` except the component is named `MyConsumer2`.

# What Happens

When the `MyContext.Provider` element is created in `app`, only `InternalConsumer` seems to get the context appropriately. Both `MyConsumer1` and `MyConsumer2` fall back on the default `MyContext` object.

# What Should Happen

All three context consumers should use the same context.

# The Question

What's the "correct" way to implement this paradigm with `useContext`?
