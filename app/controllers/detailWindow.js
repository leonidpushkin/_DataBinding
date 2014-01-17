$model.on('change', function() {
    $.comment.text = $model.get('comment');
});

$.window.addEventListener('close', function() {
    $.destroy();
});
