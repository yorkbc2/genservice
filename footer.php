</div><!-- .page-wrapper end-->

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

</div><!-- .wrapper end-->

<?php scroll_top(); ?>

<?php if (is_customize_preview()) { ?>
    <button class="button-small customizer-edit" data-control='{ "name":"bw_scroll_top_display" }'>
        <?php esc_html_e('Edit Scroll Top', 'brainworks'); ?>
    </button>
    <button class="button-small customizer-edit" data-control='{ "name":"bw_analytics_google_placed" }'>
        <?php esc_html_e('Edit Analytics Tracking Code', 'brainworks'); ?>
    </button>
    <button class="button-small customizer-edit" data-control='{ "name":"bw_login_logo" }'>
        <?php esc_html_e('Edit Login Logo', 'brainworks'); ?>
    </button>
<?php } ?>

<div class="is-hide"><?php svg_sprite(); ?></div>

<?php wp_footer(); ?>

</body>
</html>
