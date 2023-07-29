<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel 10 vite with react</title>
        <script>
            window.env = {
                apiUrl: '{{ env("APP_URL") }}',
                environment: '{{ env("APP_ENV") }}',
                // Add other environment variables here as needed
            };
        </script>
        @viteReactRefresh
        @vite('resources/js/app.jsx')
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>