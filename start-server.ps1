Write-Host "Starting GVMUN Website Local Server..." -ForegroundColor Green
Write-Host ""
Write-Host "The website will be available at:" -ForegroundColor Yellow
Write-Host "http://localhost:8000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

try {
    python -m http.server 8000
} catch {
    Write-Host "Error: Python not found. Please install Python first." -ForegroundColor Red
    Write-Host "You can download Python from: https://python.org" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
}
