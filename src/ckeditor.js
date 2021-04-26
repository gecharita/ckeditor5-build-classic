/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';
import { plugins as pluginsClassic, config as configClassic } from './config/classic-config';
import { plugins as pluginsClassicSingleP, config as configClassicSingleP } from './config/classic-single-paragraph-config';
import { plugins as pluginsInline, config as configInline } from './config/inline-config';
import { plugins as pluginsInlineSingleP, config as configInlineSingleP } from './config/inline-single-paragraph-config';
import { plugins as pluginsAuto, config as configAuto } from './config/classic-autocomplete';

class ClassicEditor extends ClassicEditorBase {}
class ClassicEditorSingleParagraph extends ClassicEditorBase {}
class InlineEditor extends InlineEditorBase {}
class InlineEditorSingleParagraph extends InlineEditorBase {}
class ClassicEditorAutocomplete extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = pluginsClassic;
ClassicEditorSingleParagraph.builtinPlugins = pluginsClassicSingleP;
InlineEditor.builtinPlugins = pluginsInline;
InlineEditorSingleParagraph.builtinPlugins = pluginsInlineSingleP;
ClassicEditorAutocomplete.builtinPlugins = pluginsAuto;

// Editor configuration.
ClassicEditor.defaultConfig = configClassic;
ClassicEditorSingleParagraph.defaultConfig = configClassicSingleP;
InlineEditor.defaultConfig = configInline;
InlineEditorSingleParagraph.defaultConfig = configInlineSingleP;
ClassicEditorAutocomplete.defaultConfig = configAuto;

ClassicEditor.link = { link: { addTargetToExternalLinks: true } };
ClassicEditorSingleParagraph.link = { link: { addTargetToExternalLinks: true } };
InlineEditor.link = { link: { addTargetToExternalLinks: true } };
InlineEditorSingleParagraph.link = { link: { addTargetToExternalLinks: true } };
ClassicEditorAutocomplete.link = { link: { addTargetToExternalLinks: true } };

export default {
	ClassicEditor, ClassicEditorSingleParagraph, InlineEditor, InlineEditorSingleParagraph, ClassicEditorAutocomplete
};
