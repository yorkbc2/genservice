<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-title" content="<?php bloginfo('name'); ?> - <?php bloginfo('description'); ?>">
    <link rel="shortcut icon" href="<?php echo esc_url(get_template_directory_uri() . '/assets/img/favicon.ico'); ?>"
          type="image/x-icon">
    <link rel="icon" href="<?php echo esc_url(get_template_directory_uri() . '/assets/img/favicon.ico'); ?>"
          type="image/x-icon">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?> id="top">

<div class="pointer" id="pointer"></div>
<?php wp_body(); ?>

<div class="wrapper wrapper--paged">

<header class="page-header">
        <div class="container page-header-container">
            <div class="page-header-column page-header-logo">
                <?php get_default_logo_link(); ?>
            </div>
            <div class="page-header-column">
                <div class="page-header-row page-header-row--right page-header-row--center-mobile">
                    <?php if (has_social()): ?>
                        <div class="page-header-row-column">
                            <ul class="social-list">
                                <?php foreach (get_social() as $social): ?>
                                    <li>
                                        <a href="<?php echo $social['url'] ?>" target="_blank" title="<?php echo $social['text']; ?>">
                                            <i class="<?php echo $social['icon']; ?>"></i>
                                        </a>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                    <?php endif; ?>
                    <?php if (has_phones()): ?>
                        <div class="page-header-row-column">
                            <?php $phones = get_phones();
                                    $first_phone = $phones[0]; ?>
                            <div class="phone-list-drop">
                                <a href="tel:<?php the_phone_number($first_phone); ?>">
                                    <?php echo $first_phone; ?>
                                    <?php if (sizeof($phones) > 1): ?>
                                    <button class="caret dropdown-trigger" type="button" data-list=".dropdown-list">
                                        <i class="fa fa-chevron-down"></i>
                                    </button>
                                    <?php endif; ?>
                                </a>
                                <?php if (sizeof($phones) > 1): ?>
                                <ul class="phone-list-dropdown dropdown-list">
                                    <?php for ($i = 1, $len = sizeof($phones); $i < $len; $i++): ?>
                                        <li>
                                            <a href="tel:<?php the_phone_number($phones[$i]); ?>">
                                                <?php echo $phones[$i]; ?>
                                            </a>
                                        </li>
                                    <?php endfor; ?>
                                </ul>
                                <?php endif; ?>
                            </div>
                        </div> 
                    <?php endif; ?>
                    <div class="page-header-row-column">
                        <button type="button" class="button button-large <?php echo ml_class('page-header-callback') ?>">
                            <?php _e("Обратный звонок", "brainworks"); ?>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div class="nav-container">
        <div class="container">
            <nav class="nav">
                <div class="js-menu">
                    <button type="button" tabindex="0" class="menu-item-close menu-close js-menu-close"></button>
                    <?php wp_nav_menu(array(
                        'theme_location' => 'main-nav',
                        'container' => false,
                        'menu_class' => 'menu-container',
                        'menu_id' => '',
                        'fallback_cb' => 'wp_page_menu',
                        'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                        'depth' => 3
                    )); ?>
                </div>
                <div class="nav-switcher">
                    <ul class="lang-list">
                        <?php pll_the_languages(['hide_if_empty' => 0]); ?>
                    </ul>
                </div>
            </nav>
        </div>
    </div>

    <div class="container js-container">

    <div class="nav-mobile-header">
            <button class="hamburger js-hamburger" type="button" tabindex="0">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
            </button>
            <!-- <div class="logo"><?php get_default_logo_link(); ?></div> -->
        </div>