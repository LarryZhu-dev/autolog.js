import $ from 'jquery';
import autolog from '@/index';

$('.log').on('click', function() {
  const type = $(this).data('type');
  autolog.log('Hello World', type, 2500);
});
