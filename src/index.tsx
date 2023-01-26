import { BlockAttributes, registerBlockType } from '@wordpress/blocks';
/* adds styles to bundle */
import './style/style-admin.scss';

/* the edit function */
import Edit from './edit';

/* the save function */
import Save from './save';

/* Block settings */
import blockConfig from '../block.json';
const jsonData = blockConfig as BlockAttributes;

/** Registering the block with the name of the block and the attributes of the block. */
registerBlockType( jsonData.name, {
	...jsonData,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	/**
	 * @see ./save.js
	 */
	save: Save,
  icon: 'universal-access-alt',
	supports: {
		align: true,
		className: true,
		spacing: {
			margin: true, // Enable margin UI control.
			padding: true, // Enable padding UI control.
			blockGap: true, // Enables block spacing UI control.
		},
	},
	attributes: {
		message: {
			type: 'string',
			source: 'text',
			default: '',
		},
	},
} );
