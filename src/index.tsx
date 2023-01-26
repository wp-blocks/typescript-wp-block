import { registerBlockType } from '@wordpress/blocks';
/** add styles to bundle */
import './style/style-admin.scss';

/** the edit function */
import Edit from './edit';

/** the save function */
import Save from './save';

/* Block settings */
import blockConfig from '../block.json';

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
	attributes: {
		message: {
			type: 'string',
			source: 'text',
			default: '',
		},
	},
} );
