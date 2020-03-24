<html lang="{{  app()->getLocale() }}">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Book exchange</title>
      
    </head>
    <body>
            
      <div id="app">
            
      </div>
        
    </body>

    <script src="{{ asset('js/app.js') }}" ></script>
    <script>window.Laravel={csrfToken:'{{ csrf_token() }}'}</script>
</html>
