/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import InlineEditorBase from "@ckeditor/ckeditor5-editor-inline/src/inlineeditor";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import Base64UploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter";
import Font from "@ckeditor/ckeditor5-font/src/font";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import MathType from "@wiris/mathtype-ckeditor5";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";

export default class InlineEditor extends InlineEditorBase {}

// Plugins to include in the build.
InlineEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageResize,
	ImageUpload,
	Indent,
	Link,
	List,
	Alignment,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	Base64UploadAdapter,
	TableToolbar,
	FontFamily,
	Font,
	FontColor,
	FontBackgroundColor,
	MathType
];

// Editor configuration.
InlineEditor.defaultConfig = {
	toolbar: {
		alignment: {
			options: ["left", "right", "center"]
		},
		items: [
			"fontFamily",
			"fontSize",
			"bold",
			"italic",
			// "bulletedList",  // not working , dont know why
			// "numberedList",     // not working , dont know why
			// "|",
			// "indent",   // not working , dont know why
			// "outdent",  // not working , dont know why
			"|",
			"imageUpload",
			"blockQuote",
			"insertTable",
			"MathType",
			"ChemType",
			"|",
			'alignment',
			"undo",
			"redo"
		]
	},
	image: {
		toolbar: [
			"imageStyle:full",
			"imageStyle:alignLeft",
			"imageStyle:alignRight"
		]
	},
	table: {
		contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: "zh-cn"
};
