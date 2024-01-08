<?php
/**
 * Plugin Name: Typescript WP Block Boilerplate
 * Plugin URI: https://github.com/wp-blocks/typescript-wp-block
 * Description: WordPress block boilerplate in typescript
 * Version: 0.0.1
 * Author: codekraft
 */

if ( ! defined( 'ABSPATH' ) ) exit;

add_action( 'init', function() {
	register_block_type( __DIR__ );
} );
