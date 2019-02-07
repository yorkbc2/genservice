<?php

function bw_register_cpts_reviews()
{
    /**
     * Post Type: Reviews.
     */
    $labels = array(
        'name' => __('Reviews', 'brainworks'),
        'singular_name' => __('Review', 'brainworks'),
    );

    $args = array(
        'label' => __('Reviews', 'brainworks'),
        'labels' => $labels,
        'description' => '',
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'delete_with_user' => false,
        'show_in_rest' => false,
        'rest_base' => 'reviews',
        'rest_controller_class' => 'WP_REST_Posts_Controller',
        'has_archive' => true,
        'show_in_menu' => true,
        'show_in_nav_menus' => true,
        'exclude_from_search' => false,
        'capability_type' => 'post',
        'map_meta_cap' => true,
        'hierarchical' => false,
        'rewrite' => array('slug' => 'reviews', 'with_front' => true),
        'query_var' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
    );

    register_post_type('reviews', $args);
}

add_action('init', 'bw_register_cpts_reviews');

function bw_register_slider_items()
{
    /**
     * Post Type: Reviews.
     */
    $labels = array(
        'name' => __('Слайды', 'brainworks'),
        'singular_name' => __('Слайд', 'brainworks'),
    );

    $args = array(
        'label' => __('Слайды', 'brainworks'),
        'labels' => $labels,
        'description' => '',
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'delete_with_user' => false,
        'has_archive' => false,
        'show_in_menu' => true,
        'show_in_nav_menus' => true,
        'exclude_from_search' => false,
        'capability_type' => 'post',
        'map_meta_cap' => true,
        'hierarchical' => false,
        'query_var' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
    );

    register_post_type('slider_items', $args);
}

add_action('init', 'bw_register_slider_items');

function set_slide_items_metabox( $meta_boxes ) {
    $prefix = '';

    $meta_boxes[] = array(
        'id' => 'slide_items_metabox',
        'title' => esc_html__( 'Meta-data', 'brainworks' ),
        'post_types' => array('slider_items' ),
        'context' => 'advanced',
        'priority' => 'default',
        'autosave' => 'false',
        'fields' => array(
            array(
                'id' => $prefix . 'icon',
                'type' => 'image_advanced',
                'name' => esc_html__( 'Icon', 'brainworks' ),
                'max_file_uploads' => '1',
            ),
        ),
    );

    return $meta_boxes;
}
add_filter( 'rwmb_meta_boxes', 'set_slide_items_metabox' );