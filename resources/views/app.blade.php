<html lang="{{  app()->getLocale() }}">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="stylesheet" href="/app/assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/app/https://fonts.googleapis.com/css?family=Cookie">
    <link rel="stylesheet" href="/app/assets/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="/app/assets/css/best-carousel-slide.css">
    <link rel="stylesheet" href="/app/assets/css/Bootstrap-Cards-v2.css">
    <link rel="stylesheet" href="/app/assets/css/carousel-search.css">
    <link rel="stylesheet" href="/app/assets/css/Login-Box-En.css">
    <link rel="stylesheet" href="/app/assets/css/Pretty-Footer.css">
    <link rel="stylesheet" href="/app/assets/css/styles.css">
    <link rel="stylesheet" href="/app/assets/css/sidebar.css">

    <!-- Scrollbar Custom CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css">

        <title>Book exchange</title>

    </head>
    <body>

      <div id="app">

      </div>

    </body>

    <script src="{{ asset('/js/app.js') }}" ></script>
    <script>window.Laravel={csrfToken:'{{ csrf_token() }}'}</script>
    <script src="/app/assets/js/jquery.min.js"></script>
    <script src="/app/assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js"></script>
	<script src="/app/assets/js/Sidebar.js"></script>
	<script src="/app/assets/js/goTopBtn.js"></script>
</html>
