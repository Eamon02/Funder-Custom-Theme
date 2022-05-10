<?php
function divi__child_theme_enqueue_styles() {
wp_enqueue_style( ‘parent-style’, get_template_directory_uri() . ‘/public/css/style.css’ );
}add_action('wp_enque_scripts', 'divi__child_theme_enqueue_styles');
function add_scripts(){
    wp_enqueue_script( 'js', get_stylesheet_directory_uri() . '/public/js/switchPrice.js', array('jquery'), "1.0.0", false);
} add_action('wp_enque_scripts', 'add_scripts');
?>