<?php
/**
 * Template Name: Home Page
 **/
?>

<?php get_header(); ?>

<?php echo do_shortcode('[bw-social]') ?>

<br>

<?php if (has_social()) { ?>
    <ul class="social">
        <?php foreach (get_social() as $name => $social) { ?>
            <li class="social-item">
                <a href="<?php echo esc_attr(esc_url($social['url'])); ?>" class="social-link social-<?php echo esc_attr($name); ?>" target="_blank">
                    <?php if (!empty($social['icon-html'])) {
                        echo strip_tags($social['icon-html'], '<i>');
                    } else { ?>
                        <i class="<?php echo esc_attr($social['icon']); ?>" aria-hidden="true"
                           aria-label="<?php echo esc_attr($social['text']); ?>"></i>
                    <?php } ?>
                </a>
            </li>
        <?php } ?>
    </ul>
<?php } ?>


<?php get_template_part('loops/content', 'home'); ?>

<?php get_footer(); ?>
