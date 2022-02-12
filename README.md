# Fluent

## Installation
Install via [npm](https://www.npmjs.com/package/fluent-interfaces):
```shell
npm install fluent-interfaces
```

## Information
Many JavaScript libraries use fluent-interfaces, but they are not at all ***fluent*** when working with 3rd party functions.
```typescript
externalFunction3(
    externalFunction2(
        externalFunction1(
            new Widget()
            .setTitle("Hello World!")
            .setDescription("Welcome to my website!")
        )
    )
)
```

This library adds global methods for working with fluent interfaces.
```typescript
import { cascade, transform } from "fluent-interfaces";

new Widget()
.setTitle("Hello World!")
.setDescription("Welcome to my website!")
[cascade](externalFunction1)
[cascade](externalFunction2)
[cascade](externalFunction3)
[cascade](self=>console.log("Created widget:", self))
// returns Widget

new Widget()
.setTitle("Hello World!")
.setDescription("Welcome to my website!")
[transform](self=>new Wrapper(self))
// returns Wrapper
```

## License
MIT License.<br/>
<br/>
All files can be used for commercial or non-commercial purposes. Do not resell. Attribution is appreciated but not due.