function pCallback(results_string, signature) {
    $.ajax({
        url: '/zmetrics/cb.txt',
        data: 'data=' +results_string+ '&signature=' +signature
    });
}