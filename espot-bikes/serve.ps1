# PowerShell Local HTTP Server for Espot Bikes
# Runs native on Windows without requiring Node.js, Python, or external dependencies.

$port = 5173
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "`n========================================================" -ForegroundColor Green
    Write-Host "  Servidor local de Espot Bikes iniciado con exito" -ForegroundColor Green
    Write-Host "  Direccion local: http://localhost:$port/" -ForegroundColor Cyan
    Write-Host "========================================================" -ForegroundColor Green
    Write-Host "  Para detener el servidor, cierra esta terminal o usa Ctrl+C`n" -ForegroundColor Yellow
    
    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response
            
            $urlPath = $request.Url.LocalPath
            if ($urlPath -eq "/") { $urlPath = "/index.html" }
            
            # Convert URI path to local filesystem path
            $urlPath = $urlPath.Replace("/", "\")
            if ($urlPath.StartsWith("\")) { $urlPath = $urlPath.Substring(1) }
            
            $filePath = Join-Path $PSScriptRoot $urlPath
            
            if (Test-Path $filePath -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $contentType = switch ($ext) {
                    ".html" { "text/html; charset=utf-8" }
                    ".css" { "text/css; charset=utf-8" }
                    ".js" { "application/javascript; charset=utf-8" }
                    ".jpg" { "image/jpeg" }
                    ".jpeg" { "image/jpeg" }
                    ".png" { "image/png" }
                    ".svg" { "image/svg+xml" }
                    default { "application/octet-stream" }
                }
                
                $response.ContentType = $contentType
                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            } else {
                $response.StatusCode = 404
                $response.StatusDescription = "Not Found"
                $bytes = [System.Text.Encoding]::UTF8.GetBytes("404 - Archivo no encontrado: $urlPath")
                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            }
        } catch {
            Write-Host "Error al procesar peticion: $_" -ForegroundColor Red
            if ($response) {
                try {
                    $response.StatusCode = 500
                    $bytes = [System.Text.Encoding]::UTF8.GetBytes("500 - Error Interno del Servidor: $_")
                    $response.ContentLength64 = $bytes.Length
                    $response.OutputStream.Write($bytes, 0, $bytes.Length)
                } catch {}
            }
        } finally {
            if ($response) {
                $response.Close()
            }
        }
    }
} catch {
    Write-Host "Error al iniciar el servidor HttpListener: $_" -ForegroundColor Red
    Write-Host "Asegurate de que el puerto $port no este siendo usado por otra aplicacion." -ForegroundColor Yellow
} finally {
    if ($listener) {
        $listener.Close()
    }
}
