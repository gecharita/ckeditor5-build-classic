/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';

import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import Typing from '@ckeditor/ckeditor5-typing/src/typing';
import Undo from '@ckeditor/ckeditor5-undo/src/undo';

class ClassicEditor extends ClassicEditorBase {}
class InlineEditor extends InlineEditorBase {}
class InlineEditorSingleParagraph extends InlineEditorBase {}

const pluginsAll = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	Underline,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	Font,
	Alignment,
	TodoList
];

// ---------- PLUGINS WITHOUT ENTER & SHIFT ENTER FUNCTIONALITY -------------
// Essentials plugin has Clipboard, ShiftEnter, Enter Typing, Undo plugins
// in order to remove the ENTER NEW PARAGRAPH functionality, we will remove Enter & Shift Enter plugins
const pluginsNoEnter = [ ...pluginsAll ];

const indexOfEssentials = pluginsNoEnter.indexOf( Essentials );
pluginsNoEnter.splice( indexOfEssentials, 1 );
pluginsNoEnter.push( Clipboard, Typing, Undo );

// Plugins to include in the build.
ClassicEditor.builtinPlugins = pluginsAll;
InlineEditor.builtinPlugins = pluginsAll;
InlineEditorSingleParagraph.builtinPlugins = pluginsNoEnter;

const config = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'underLine',
			'fontColor',
			'|',
			'bulletedList',
			'numberedList',
			'todoList',
			'|',
			'alignment:left',
			'alignment:center',
			'indent',
			'outdent',
			'|',
			'insertTable',
			'|',
			'undo',
			'redo',
			'link',
			'|'
			// '|',
			// '|',
			// '|',
			// 'imageUpload',
			// 'blockQuote',
			// 'mediaEmbed'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};

// Editor configuration.
ClassicEditor.defaultConfig = config;
InlineEditor.defaultConfig = config;
InlineEditorSingleParagraph.defaultConfig = config;

export default {
	ClassicEditor, InlineEditor, InlineEditorSingleParagraph
};
