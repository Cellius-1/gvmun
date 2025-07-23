@echo off
echo Starting GVMUN Website Local Server...
echo.
echo The website will be available at:
echo http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.
python -m http.server 8000
