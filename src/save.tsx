import './style/style.scss';

import { useBlockProps } from '@wordpress/block-editor';
import { PropertiesSave } from './types';

/**
 * The save function defines the way in which the different attributes should be combined into the final markup, which is then serialized into post_content.
 *
 * @param  props
 * @param  props.attributes - the block attributes
 * @function Object() { [native code] }
 */
function Save( { attributes }: PropertiesSave ): JSX.Element {
	const blockProps = useBlockProps.save( {
		className: 'block-boilerplate',
	} );
	return <div { ...blockProps }> { attributes.message }</div>;
}

export default Save;
