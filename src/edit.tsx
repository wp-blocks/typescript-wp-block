import { useBlockProps } from '@wordpress/block-editor';
import type { BlockEditProps } from '@wordpress/blocks';
import { TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { TextDef } from './types';

/**
 * The edit function describes the structure of your block in the context of the editor.
 *
 * @param  props
 * @param  props.attributes    - the block attributes
 * @param  props.setAttributes - the setState function
 *
 */
export default function Edit( {
	attributes,
	setAttributes,
}: BlockEditProps< TextDef > ): JSX.Element {
	return (
		<div { ...useBlockProps() }>
			<TextControl
				label={ __( 'Message', 'boilerplate' ) }
				value={ attributes.message }
				onChange={ ( val ) =>
					setAttributes( { message: val.toString() } )
				}
			/>
		</div>
	);
}
