<?php
/**
 * @package Stacker
 */
?>

<div <?php post_class( 'item' ); ?>>

	<a href="<?php the_permalink(); ?>"><?php if ( has_post_thumbnail() ) {
	
	// on change le premier paramètre de the_post_thumbnail en "full", ce qui correspond à la taille du thumbnail
	// c'est nécessaire pour que les gifs en image en avant soient animés
	  $thumb_url = get_the_post_thumbnail_url();
	  $thumb_low = strtolower($thumb_url);
	  if (strpos($thumb_low, '.gif') === false) {
	  	$thumb_size = 'post-thumb'; // valeur par défaut
	  } else {
	  	$thumb_size = 'full'; // si c'est un gif, alors on affiche la taille full pour conserver l'animation
	  }
		
			the_post_thumbnail( $thumb_size, array( 'class' => '' ) ); 
		} else {
			?>
			<img src="<?php echo esc_url( get_template_directory_uri() ) ?>/img/default.png"
				title="<?php the_title_attribute( array( 'before' => 'Permalink to: ', 'after' => '' ) ); ?>"/>
		<?php } ?></a>

	<div class="commentcount">
			<span><?php comments_number( '0', '1', '%' ); ?></span>
	</div>
	<h2 class="itemtitle"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>

	<div class="itemdate"><a href="<?php the_permalink(); ?>"><?php stacker_posted_on() ?></a></div>
	<div class="itemcat">
	<?php the_category( ' ' ); ?>
	</div>
</div><!--End Post -->