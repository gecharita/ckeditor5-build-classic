import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import Typing from '@ckeditor/ckeditor5-typing/src/typing';
import Undo from '@ckeditor/ckeditor5-undo/src/undo';

// ************************ PLUGINS WITHOUT ENTER & SHIFT ENTER FUNCTIONALITY ************************
// <<Essentials>> plugin has << Clipboard, ShiftEnter, Enter Typing, Undo >> plugins
// in order to remove the ENTER NEW PARAGRAPH functionality, we will remove Enter & Shift Enter plugins
export const plugins = [
	Clipboard,
	Typing,
	Undo,
	Bold,
	Italic,
	TextTransformation,
	Paragraph
];

// ****************** TOOLBAR CONFIG ************************
export const config = {
	toolbar: {
		items: [
			'bold',
			'italic'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
