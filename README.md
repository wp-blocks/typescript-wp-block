# Typescript WP-Block boilerplate

> A clean boilerplate for WordPress Blocks (Gutenberg Editor) 

## Features:

- ðŠïļ **Typed** - Write you next WordPress block with next gen strongly typed javascript  
- ðĄïļïļ **Testable** - With unit and e2e tests already in place (with coverage checking)
- ðŠķ **Lightweight** - Only what to you need to start your project, nothing else!
- ð **No dependencies** - Dependencies tend to have dependencies endlessly and this can lead to security issues. This is a package, and it doesn't need anything else!
- ð **Ready-to-go** - download, replace the string "boilerplate", install, and you are done!  
- ð **CI** - Continuous integration with multiple node builds and testing
- ðĶ **Bundled** - Webpack optimized and minified build with types!
- ðŠ **Easy to use** - No extra skills required! You will build your own plugin according to your knowledge

### Setup:

clone the project into your plugin folder:

```shell
git clone https://github.com/erikyo/typescript-wp-block.git
```
Then: 
- Rename the plugin folder with the chosen plugin name slug
- Do the same for the [typescript-wp-block.php](typescript-wp-block.php) file with the same string as the directory
- Replace every occurrence of word "boilerplate" with your own plugin name.
- Once the above points are completed, install with npm

```shell
npm install
```

and you are ð Done!

---

### Getting started with WordPress Block Editor
https://developer.wordpress.org/block-editor/getting-started/

---


### LINKS
- Jest - https://jestjs.io/docs/getting-started
- WordPress e2e testing - https://developer.wordpress.org/block-editor/reference-guides/packages/packages-e2e-test-utils/
- Typescript - https://www.typescriptlang.org/
