import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';

// ****************** PLUGINS ************************
export const plugins = [
	Essentials,
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
