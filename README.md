# Override Marko Core Tag

This is an example of overriding the Marko core `await` tag.

## Installation

```bash
npm install marko-js-samples/override-core-tag --save
```

## Usage

```marko
$ var personPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve({
            name: 'Frank'
        });
    }, 1000);
});

<my-await(person from personPromise)>
    <div>Hello ${person.name}!</div>
</my-await>
```
