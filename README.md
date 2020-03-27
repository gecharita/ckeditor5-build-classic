CKEditor 5 classic editor build combined with added Inline editor
========================================
Superbuild by gecharita

[![npm version](https://badge.fury.io/js/%40ckeditor%2Fckeditor5-build-classic.svg)](https://www.npmjs.com/package/@gecharita/ckeditor5-build-classic)
Classic
[![Build Status](https://travis-ci.org/ckeditor/ckeditor5-build-classic.svg?branch=master)](https://travis-ci.org/ckeditor/ckeditor5-build-classic)
Inline
[![Build Status](https://travis-ci.org/ckeditor/ckeditor5-build-inline.svg?branch=master)](https://travis-ci.org/ckeditor/ckeditor5-build-inline)
<br>
[![Dependency Status](https://david-dm.org/ckeditor/ckeditor5-build-classic/status.svg)](https://david-dm.org/ckeditor/ckeditor5-build-classic)
[![devDependency Status](https://david-dm.org/ckeditor/ckeditor5-build-classic/dev-status.svg)](https://david-dm.org/ckeditor/ckeditor5-build-classic?type=dev)

That project is a fork of the [CKEditor 5 Classic](https://github.com/ckeditor/ckeditor5-build-classic) with the option to use [CKEditor 5 Inline](https://github.com/ckeditor/ckeditor5-build-inline) & extra plugins.


---
## Quick start

And use it in your website:

```html
<div id="editor">
	<p>This is the editor content.</p>
</div>
<script src="/build/ckeditor.js"></script>
<script>
	CKEDITOR.ClassicEditor
		.create( document.querySelector( '#classic-editor' ) )
		.then( editor => {
			window.editor = editor;
		} )
		.catch( error => {
			console.error( 'There was a problem initializing the editor.', error );
		} );
</script>
<script>
	CKEDITOR.InlineEditor
		.create( document.querySelector( '#inline-editor' ) )
		.then( editor => {
			window.editor = editor;
		} )
		.catch( error => {
			console.error( 'There was a problem initializing the editor.', error );
		} );
</script>
```

Or in your JavaScript application:

```js
import CKEDITOR from '@ckeditor/ckeditor5-build-classic';

// Or using the CommonJS version:
// const ClassicEditor = require( '@ckeditor/ckeditor5-build-classic' );

CKEDITOR.ClassicEditor
	.create( document.querySelector( '#editor' ) )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( error => {
		console.error( 'There was a problem initializing the editor.', error );
	} );
```
---

## Custom build
```sh
# Add a plugin if not exists e.g. https://www.npmjs.com/package/@ckeditor/ckeditor5-font
# SEE how it is used https://ckeditor.com/docs/ckeditor5/latest/features/font.html
npm install --save-dev @ckeditor/ckeditor5-font
# Build
yarn run build
```

**Note:** If you are planning to integrate CKEditor 5 deep into your application, it is actually more convenient and recommended to install and import the source modules directly (like it happens in `ckeditor.js`). Read more in the [Advanced setup guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/advanced-setup.html).

---
## License

Licensed under the terms of [GNU General Public License Version 2 or later](http://www.gnu.org/licenses/gpl.html). For full details about the license, please check the `LICENSE.md` file or [https://ckeditor.com/legal/ckeditor-oss-license](https://ckeditor.com/legal/ckeditor-oss-license).
