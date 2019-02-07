<?php
/**
 * Template Name: Landing
 **/
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-title" content="<?php bloginfo( 'name' ); ?> - <?php bloginfo( 'description' ); ?>">
    
	<link rel="shortcut icon" href="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/favicon.ico" type="image/x-icon" />

	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<div class="wrapper">
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
                        <button type="button" class="button button-large page-header-callback">
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
	<div class="js-container">
		<div class="nav-mobile-header">
            <button class="hamburger js-hamburger" type="button" tabindex="0">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
            </button>
            <!-- <div class="logo"><?php get_default_logo_link(); ?></div> -->
        </div>


		<!-- SECTIONS -->

		<section class="section section--full">
			<?php _layerslider(1); ?>
		</section>

		<!-- <section class="section section--full section--with-background" style="background-image: url('<?php echo get_template_directory_uri() ?>/assets/img/header.jpg');">
			<div class="section-content container">
				<h1 class="header header--intro">
					ЗАЩИТА <br />
					ВОЗДУШНОГО <br />
					ПРОСТРАНСТВА<br />
					ОТ БЕСПИЛОТНИКОВ<br />
				</h1>
				<div class="text-left">
					<a href="#" class="button-large">
						Узнать больше
					</a>
				</div>
			</div>
		</section> -->

		<section>
			<div class="sp-md-10 sp-sm-10 sp-xs-10"></div>
			<div class="container">
				<h3 class="header header--quote">
					<?php echo esc_html(get_post_meta(get_the_ID(), "second_screen_text", true)); ?>
				</h3>
			</div>
			<div class="sp-md-10 sp-sm-10 sp-xs-10"></div>
		</section>

		<section>
			<div class="sp-md-8 sp-sm-8 sp-xs-8"></div>
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<div class="thin-line _floated"></div>
					</div>
					<div class="col-md-6">
						<p class="typical-text _floated _left">
						<?php echo (get_post_meta(get_the_ID(), "second_screen_text_second", true)); ?>
						</p>
					</div>
				</div>
			</div>
			<div class="sp-md-8 sp-sm-8 sp-xs-8"></div>
		</section>

		<section>
			<div class="sp-md-8 sp-sm-8 sp-xs-8"></div>
			<div class="container">
				<div class="custom-jumbotron">
					<h2 class="custom-jumbotron-header header header--big">Преимущества</h2>
					<div class="row">
						<div class="col-md-4 col-sm-12 col-xs-12 custom-jumbotron-col">
							<h4 class="header"><?php echo (get_post_meta(get_the_ID(), "adv_col_1", true)); ?></h4>
						</div>
						<div class="col-md-4 col-sm-12 col-xs-12 custom-jumbotron-col">
							<h4 class="header"><?php echo (get_post_meta(get_the_ID(), "adv_col_2", true)); ?></h4>
						</div>
						<div class="col-md-4 col-sm-12 col-xs-12 custom-jumbotron-col">
							<h4 class="header"><?php echo (get_post_meta(get_the_ID(), "adv_col_3", true)); ?></h4>
						</div>
					</div>
				</div>
			</div>
			<div class="sp-md-8 sp-sm-8 sp-xs-8"></div>
		</section>

		<section>
			<div class="container">
				<?php echo do_shortcode('[bw-products-slider]'); ?>
			</div>
		</section>
		<section class="section section--with-background text-center" style="background-image: url('<?php echo get_template_directory_uri() ?>/assets/img/reviews.jpg');">
			<div class="container">
				<div class="sp-md-10 sp-sm-10 sp-xs-10"></div>
				<h2 class="header header--big">
					<?php _e("Отзывы", "brainworks"); ?>
				</h2>
				<div class="sp-md-5 sp-sm-5 sp-xs-5"></div>
				<?php echo do_shortcode('[bw-reviews]'); ?>
				<div class="text-center">
					<button type="button" class="button-large">
						<?php _e("Оставить отзыв", "brainworks"); ?>
					</button>
				</div>
				<div class="sp-md-10 sp-sm-10 sp-xs-10"></div>
			</div>
		</section>

		<section>
			<div class="sp-md-10 sp-sm-10 sp-xs-10"></div>
			<?php
				$posts = get_last_posts();
				if (sizeof($posts) > 0):
					$first_post = $posts[0];
					unset($posts[0]);
			 ?>

			 <div class="container">
			 	<div class="flex-row flex-row--with-paddings blog-item-row--mobile"> 
			 		<div class="flex-col blog-item-column--mobile">
			 			<div class="blog-item">
			 				<img src="<?php echo get_the_post_thumbnail_url($first_post->ID); ?>" class="blog-item-image">
			 				<div class="blog-item-content">
			 					<h2 class="blog-item-header">
			 						<?php echo get_the_title($first_post->ID); ?>
			 					</h2>
			 					<p class="blog-item-excerpt">
			 						<?php echo get_the_excerpt($first_post->ID); ?>
			 					</p>
			 					<div class="blog-item-permalink">
			 						<a href="<?php echo get_the_permalink($first_post->ID); ?>">
			 							<?php _e("Читать", "brainworks"); ?>
			 						</a>
			 					</div>
			 				</div>
			 			</div>
			 		</div>
			 		<div class="flex-col">
			 			<div class="blog-item-section-header">
			 				<h2 class="header header--big">
			 					<?php _e("Блог", "brainworks"); ?>
			 				</h2>
			 				<p>
			 					<a class="default-link" href="/blog">
			 						<?php _e("Смотреть все статьи", "brainworks"); ?>
			 					</a>
			 				</p>
			 			</div>
			 			<div class="blog-item-list">
			 				<?php foreach ($posts as $post): ?>
								<div class="blog-item">
									<img src="<?php echo get_the_post_thumbnail_url($post->ID); ?>" class="blog-item-image">
					 				<div class="blog-item-content">
					 					<h2 class="blog-item-header">
					 						<?php echo get_the_title($post->ID); ?>
					 					</h2>
					 					<div class="blog-item-permalink">
					 						<a href="<?php echo get_the_permalink($post->ID); ?>">
					 							<?php _e("Читать", "brainworks"); ?>
					 						</a>
					 					</div>
					 				</div>
								</div>
			 				<?php endforeach; ?>
			 			</div>
			 		</div>
			 	</div>
			 </div>

				

			<?php endif; ?> 
			<div class="sp-md-10 sp-sm-10 sp-xs-10"></div>
		</section>

		<!-- END SECTIONS -->

	</div>	
	<footer class="footer js-footer">
	    <?php if (is_active_sidebar('footer-widget-area')) : ?>
	        <div class="pre-footer">
	            <div class="container">
	                <div class="row">
	                    <?php dynamic_sidebar('footer-widget-area'); ?>
	                </div>
	            </div>
	        </div><!-- .pre-footer end-->
	    <?php endif; ?>

	    <div class="footer-container">
	        <div class="container">
	            <div class="row">
	                <div class="col-md-4 col-sm-4 col-xs-12">
	                    <form action="<?php echo get_site_url(); ?>/wp-json/api/contact" class="default-form">
	                        <div>
	                            <input type="text" name="name" class="default-form-input" placeholder="<?php _e("Ваше имя", "brainworks"); ?>">
	                        </div>
	                        <div>
	                            <input type="tel" name="phone" class="default-form-input" placeholder="<?php _e("Телефон", "brainworks"); ?>">
	                        </div>
	                        <div>
	                            <button type="submit" class="button-large button-reversed button-block footer-callback">
	                                <?php _e("Заказать звонок", "brainworks"); ?>
	                            </button>
	                        </div>
	                    </form>
	                </div>
	                <div class="col-md-8 col-sm-8 col-xs-12">
	                    <div class="flex-row footer-block">
	                        <div class="flex-col">
	                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d342335.213267162!2d33.086335894662646!3d47.90748106298786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dadfe03154ab7b%3A0xb0fa3a177d6b186e!2sKryvyi+Rih%2C+Dnipropetrovsk+Oblast%2C+50000!5e0!3m2!1sen!2sua!4v1549308677246" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
	                        </div>
	                        <div class="flex-col">
	                            <div class="footer-block-element">
	                                <h3><?php _e("Телефон", "brainworks"); ?></h3>
	                                <?php if (has_phones()): ?>
	                                    <?php foreach (get_phones() as $phone): ?>
	                                        <p>
	                                            <a href="tel:<?php the_phone_number($phone); ?>">
	                                                <?php echo $phone; ?>
	                                            </a>
	                                        </p>
	                                    <?php endforeach; ?>
	                                <?php endif; ?>
	                            </div>
	                            <?php if($address = get_theme_mod("bw_additional_address", "")): ?>
	                            <div class="footer-block-element">
	                                <h3><?php _e("Адрес", "brainworks"); ?></h3>
	                                <p>
	                                    <a href="https://maps.google.com/?q=<?php echo $address; ?>" target="_blank">
	                                        <?php echo $address; ?>
	                                    </a>
	                                </p>
	                            </div>
	                            <?php endif; ?>

	                            <?php if($email = get_theme_mod("bw_additional_email", "")): ?>
	                            <div class="footer-block-element">
	                                <h3><?php _e("E-mail", "brainworks"); ?></h3>
	                                <p>
	                                    <a href="mailto:<?php echo $email; ?>" target="_blank">
	                                        <?php echo $email; ?>
	                                    </a>
	                                </p>
	                            </div>
	                            <?php endif; ?>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>

	    <div class="copyright">
	        <p class="container">
	            <?php _e('Developed by', 'brainworks') ?>
	            <a href="https://brainworks.pro/" target="_blank">BrainWorks</a>
	        </p>
	    </div>
	</footer>
</div>



<?php wp_footer(); ?>

</body>
</html>
